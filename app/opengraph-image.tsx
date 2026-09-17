import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = "MECNUN — Computer Engineer & Creative Technologist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050508",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background Gradients */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(0, 240, 255, 0.18)",
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(204, 255, 0, 0.12)",
            filter: "blur(140px)",
          }}
        />

        {/* Top Header / Brand Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(0, 240, 255, 0.4)",
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#CCFF00",
              }}
            />
            <span
              style={{
                color: "#00F0FF",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              MECNUN
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>|</span>
            <span style={{ color: "#E0E0E0", fontSize: "16px" }}>
              COMPUTER ENGINEER & CREATIVE TECH
            </span>
          </div>
        </div>

        {/* Center Main Message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 10,
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            DIGITAL EXPERIENCES,
            <br />
            <span style={{ color: "#00F0FF" }}>ENGINEERED WITH PURPOSE.</span>
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#A1A1AA",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Bespoke Web Applications • Real-Time 3D WebGL • Sub-Second Performance
          </p>
        </div>

        {/* Bottom Footer Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", gap: "24px", color: "#71717A", fontSize: "16px" }}>
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Three.js / WebGL</span>
            <span>•</span>
            <span>Lighthouse 95+</span>
          </div>
          <span style={{ color: "#CCFF00", fontSize: "18px", fontWeight: 700 }}>
            {siteConfig.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
