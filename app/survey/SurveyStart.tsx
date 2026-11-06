"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  API_URL,
  IN_PERSON_CHOICE,
  INTERVIEWER_NAME_ENTRY,
  LOCATION_PLACEHOLDER,
  REFERENCE_ID_ENTRY,
  SURVEY_FORM_URL,
  SURVEY_MODE_ENTRY,
} from "./config";

const ENUMERATOR_NAME_KEY = "teleba:surveyEnumeratorName";

type Status =
  | "idle"
  | "locating"
  | "opening"
  | "denied"
  | "unavailable"
  | "timeout"
  | "offline"
  | "unsupported";

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  // iPads report themselves as a Mac but have a touch screen.
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
    return "ios";
  }
  return /Android/.test(ua) ? "android" : "other";
}

// Once location is blocked, the browser never asks again, so people have to
// turn it back on themselves. Show the steps for the phone they are using.
function LocationHelp({ platform }: { platform: Platform }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Location is turned off for this site</p>
      <p>The survey needs your location. Turn it on, then tap Try again.</p>
      {platform !== "ios" && (
        <p>
          <strong>Chrome on Android:</strong> tap the icon next to the address,
          open <strong>Permissions</strong>, and allow{" "}
          <strong>Location</strong>.
        </p>
      )}
      {platform !== "android" && (
        <p>
          <strong>Safari on iPhone:</strong> tap <strong>aA</strong> in the
          address bar, open <strong>Website Settings</strong>, and set{" "}
          <strong>Location</strong> to <strong>Allow</strong>. If location is
          off for Safari altogether, go to{" "}
          <strong>
            Settings → Privacy &amp; Security → Location Services → Safari
            Websites
          </strong>
          .
        </p>
      )}
      {platform === "other" && (
        <p>
          <strong>On a computer:</strong> click the icon next to the address
          and allow <strong>Location</strong>.
        </p>
      )}
      <p>Still not working? Reload this page and try again.</p>
    </div>
  );
}

// Logs the start with the Teleba API, which records the IP address and time,
// and returns the reference ID that ties the form response to this start.
async function logSurveyStart(body: {
  source: "survey" | "enumerator";
  enumerator_name: string | null;
  latitude: number;
  longitude: number;
  accuracy_m: number;
}): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(`${API_URL}/survey-starts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Survey start failed: ${res.status}`);
    const data: { reference_id?: string } = await res.json();
    if (!data.reference_id) throw new Error("Survey start returned no reference ID");
    return data.reference_id;
  } finally {
    clearTimeout(timer);
  }
}

function formUrlWith(
  location: string,
  enumeratorName: string,
  referenceId: string,
) {
  const url = SURVEY_FORM_URL.replace(
    LOCATION_PLACEHOLDER,
    encodeURIComponent(location),
  );
  const params = [
    "embedded=true",
    "hl=en",
    `${REFERENCE_ID_ENTRY}=${encodeURIComponent(referenceId)}`,
  ];
  if (enumeratorName) {
    params.push(
      `${INTERVIEWER_NAME_ENTRY}=${encodeURIComponent(enumeratorName)}`,
      `${SURVEY_MODE_ENTRY}=${encodeURIComponent(IN_PERSON_CHOICE)}`,
    );
  }
  return url + (url.includes("?") ? "&" : "?") + params.join("&");
}

// Browser storage can be blocked or cleared; the name is then just retyped.
function readSavedName() {
  try {
    return window.localStorage.getItem(ENUMERATOR_NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveName(name: string) {
  try {
    window.localStorage.setItem(ENUMERATOR_NAME_KEY, name);
  } catch {
    // Nothing to do: this survey still gets the name through the form link.
  }
}

type SurveyStartProps = {
  enumerator?: boolean;
  onFormReady: (url: string) => void;
};

export function SurveyStart({
  enumerator = false,
  onFormReady,
}: SurveyStartProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(true);
  const [platform, setPlatform] = useState<Platform>("other");
  const configured = SURVEY_FORM_URL.includes(LOCATION_PLACEHOLDER);
  const enumeratorName = enumerator ? name.trim() : "";
  const nameMissing = enumerator && !enumeratorName;

  // Read after mount: the saved name only exists in the browser.
  useEffect(() => {
    if (!enumerator) return;
    const saved = readSavedName();
    if (saved) {
      setName(saved);
      setEditingName(false);
    }
  }, [enumerator]);

  // Show the turn-it-on steps before the first tap if location is already
  // blocked, and clear them as soon as it is allowed again.
  useEffect(() => {
    setPlatform(detectPlatform());
    let cancelled = false;
    let permission: PermissionStatus | undefined;
    function sync() {
      const blocked = permission?.state === "denied";
      setStatus((s) =>
        blocked && s === "idle" ? "denied" : !blocked && s === "denied" ? "idle" : s,
      );
    }
    navigator.permissions
      ?.query({ name: "geolocation" })
      .then((p) => {
        if (cancelled) return;
        permission = p;
        sync();
        p.addEventListener("change", sync);
      })
      .catch(() => {
        // Not supported (older Safari): the steps show after the first tap.
      });
    return () => {
      cancelled = true;
      permission?.removeEventListener("change", sync);
    };
  }, []);

  // The form only opens with a logged reference ID, so every response can be
  // checked against its start.
  async function openForm(coords: GeolocationCoordinates) {
    setStatus("opening");
    const { latitude, longitude, accuracy } = coords;
    let referenceId: string;
    try {
      referenceId = await logSurveyStart({
        source: enumerator ? "enumerator" : "survey",
        enumerator_name: enumeratorName || null,
        latitude,
        longitude,
        accuracy_m: accuracy,
      });
    } catch {
      setStatus("offline");
      return;
    }
    onFormReady(
      formUrlWith(
        `${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)} m)`,
        enumeratorName,
        referenceId,
      ),
    );
  }

  function start() {
    if (enumerator) {
      saveName(enumeratorName);
      setEditingName(false);
    }
    if (!("geolocation" in navigator) || !window.isSecureContext) {
      setStatus("unsupported");
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        void openForm(pos.coords);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) setStatus("denied");
        else if (err.code === err.TIMEOUT) setStatus("timeout");
        else setStatus("unavailable");
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 },
    );
  }

  if (!configured) {
    return (
      <p className="rounded-2xl border border-black/10 bg-white p-5 text-sm text-brand-ink-muted">
        The survey link has not been set up yet. Please check back soon.
      </p>
    );
  }

  const busy = status === "locating" || status === "opening";
  const retryable =
    status === "denied" ||
    status === "timeout" ||
    status === "unavailable" ||
    status === "offline";
  const problem: Record<string, ReactNode> = {
    denied: <LocationHelp platform={platform} />,
    timeout:
      "Your location took too long to find. Move near a door or window, then tap Try again.",
    unavailable:
      "We couldn't get your location. Turn on location (GPS) in your phone settings, then tap Try again.",
    offline:
      "We couldn't start the survey. Check your internet connection, then tap Try again.",
    unsupported:
      "This browser can't share location, which the survey needs. Open this link in Chrome or Safari instead.",
  };

  return (
    <div className="flex flex-col gap-4">
      {enumerator &&
        (editingName ? (
          <label className="flex flex-col gap-2 text-sm font-semibold text-foreground md:text-white">
            Your name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              maxLength={60}
              placeholder="e.g. Sarah Nakato"
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-foreground"
            />
          </label>
        ) : (
          <p className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-brand-ink-muted">
            Collecting as{" "}
            <strong className="text-foreground">{enumeratorName}</strong>
            {" · "}
            <button
              type="button"
              onClick={() => setEditingName(true)}
              className="font-semibold underline underline-offset-2"
            >
              Change
            </button>
          </p>
        ))}

      <button
        type="button"
        onClick={start}
        disabled={busy || nameMissing}
        className="w-full rounded-full bg-brand-gold px-6 py-4 font-display text-base font-bold text-brand-red-deep shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
      >
        {status === "locating"
          ? "Finding your location…"
          : status === "opening"
            ? "Opening the survey…"
            : retryable
              ? "Try again"
              : "Start survey"}
      </button>

      {status === "locating" && (
        <p className="text-center text-sm text-brand-ink-muted md:text-red-100">
          If your phone asks, tap <strong>Allow</strong> to share your location.
        </p>
      )}

      {problem[status] && (
        <div
          role="alert"
          className="rounded-2xl border border-brand-red/20 bg-brand-red-light p-4 text-sm text-brand-red-deep"
        >
          {problem[status]}
        </div>
      )}
    </div>
  );
}
