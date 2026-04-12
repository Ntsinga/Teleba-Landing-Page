import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Teleba — The Agent-First Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #c62828 0%, #7f0000 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "rgba(253,216,53,0.2)",
            border: "1px solid rgba(253,216,53,0.5)",
            borderRadius: "100px",
            padding: "8px 24px",
            color: "#fdd835",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Now piloting in Uganda
        </div>

        {/* Logo */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          <span style={{ color: "#ffffff" }}>Tele</span>
          <span style={{ color: "#fdd835" }}>ba</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          The Agent-First Platform for Telecom &amp; Banking Agents
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "60px",
          }}
        >
          {[
            { value: "7+", label: "Books replaced" },
            { value: "2hrs", label: "Saved daily" },
            { value: "100%", label: "Commission clarity" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{ color: "#fdd835", fontSize: "40px", fontWeight: 800 }}
              >
                {stat.value}
              </span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
