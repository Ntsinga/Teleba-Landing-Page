"use client";

import { useState } from "react";
import { LOCATION_PLACEHOLDER, SURVEY_FORM_URL } from "./config";

type Status =
  | "idle"
  | "locating"
  | "opening"
  | "denied"
  | "unavailable"
  | "timeout"
  | "unsupported";

function formUrlWith(location: string) {
  const url = SURVEY_FORM_URL.replace(
    LOCATION_PLACEHOLDER,
    encodeURIComponent(location),
  );
  return url + (url.includes("?") ? "&" : "?") + "embedded=true&hl=en";
}

export function SurveyStart() {
  const [status, setStatus] = useState<Status>("idle");
  const [formUrl, setFormUrl] = useState<string | null>(null);
  const configured = SURVEY_FORM_URL.includes(LOCATION_PLACEHOLDER);

  function openForm(location: string) {
    setStatus("opening");
    setFormUrl(formUrlWith(location));
  }

  function start() {
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

  if (formUrl) {
    return (
      <iframe
        src={formUrl}
        title="Teleba agent survey"
        className="h-[80vh] min-h-[600px] w-full rounded-2xl border border-black/10 bg-white"
      >
        Loading…
      </iframe>
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
      <button
        type="button"
        onClick={start}
        disabled={busy}
        className="btn-primary-gradient w-full rounded-full px-6 py-4 font-display text-base font-bold text-white disabled:opacity-60"
      >
        {status === "locating"
          ? "Finding your location…"
          : status === "opening"
            ? "Opening the survey…"
            : "Start survey"}
      </button>

      {status === "locating" && (
        <p className="text-center text-sm text-brand-ink-muted">
          If your phone asks, tap <strong>Allow</strong> to share your location.
        </p>
      )}

      {problem[status] && (
        <div className="rounded-2xl border border-brand-red/20 bg-brand-red-light p-4 text-sm text-brand-red-deep">
          <p>{problem[status]}</p>
          <button
            type="button"
            onClick={() => openForm("Not captured")}
            className="mt-3 font-semibold underline underline-offset-2"
          >
            Continue without location
          </button>
        </div>
      )}
    </div>
  );
}
