import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e7",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            fontWeight: 600,
            color: "#8a3f1e",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 28, height: 1.5, background: "#8a3f1e" }} />
          {site.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 600, color: "#1a1512", letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 30, color: "#5c5248", maxWidth: 920, lineHeight: 1.4 }}>
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {["Program Delivery", "Engineering Leadership", "Cross-functional Execution"].map(
            (label) => (
              <div
                key={label}
                style={{
                  fontSize: 16,
                  color: "#5c5248",
                  background: "#efe7d6",
                  borderRadius: 999,
                  padding: "8px 18px",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
