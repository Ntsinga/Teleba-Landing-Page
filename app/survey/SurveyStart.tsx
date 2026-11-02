"use client";

import { useEffect, useState } from "react";
import {
  IN_PERSON_CHOICE,
  INTERVIEWER_NAME_ENTRY,
  LOCATION_PLACEHOLDER,
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
  | "unsupported";

function formUrlWith(location: string, enumeratorName: string) {
  const url = SURVEY_FORM_URL.replace(
    LOCATION_PLACEHOLDER,
    encodeURIComponent(location),
  );
  const params = ["embedded=true", "hl=en"];
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

  function openForm(location: string) {
    setStatus("opening");
    onFormReady(formUrlWith(location, enumeratorName));
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
        const { latitude, longitude, accuracy } = pos.coords;
        openForm(
          `${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)} m)`,
        );
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
  const problem: Record<string, string> = {
    denied:
      "Location access was blocked. Tap the lock icon next to the address bar, allow location for teleba.io, then try again.",
    timeout:
      "Your location took too long to find. Move near a door or window and try again.",
    unavailable:
      "We couldn't get your location. Check that location (GPS) is turned on in your phone settings, then try again.",
    unsupported:
      "This browser can't share location. You can still take the survey without it.",
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
        className="w-full rounded-full bg-brand-gold px-6 py-4 font-display text-base font-bold text-brand-red-deep shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-gold-dark hover:shadow-xl disabled:opacity-60"
      >
        {status === "locating"
          ? "Finding your location…"
          : status === "opening"
            ? "Opening the survey…"
            : "Start survey"}
      </button>

      {status === "locating" && (
        <p className="text-center text-sm text-brand-ink-muted md:text-red-100">
          If your phone asks, tap <strong>Allow</strong> to share your location.
        </p>
      )}

      {problem[status] && (
        <div className="rounded-2xl border border-brand-red/20 bg-brand-red-light p-4 text-sm text-brand-red-deep">
          <p>{problem[status]}</p>
          <button
            type="button"
            onClick={() => openForm("Not captured")}
            disabled={nameMissing}
            className="mt-3 font-semibold underline underline-offset-2 disabled:opacity-60"
          >
            Continue without location
          </button>
        </div>
      )}
    </div>
  );
}
