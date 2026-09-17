import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#050508",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          border: "1px solid rgba(0, 240, 255, 0.4)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Futuristic Cyber Cat Silhouette */}
          <path
            d="M4 18V9L7 3L11 7H13L17 3L20 9V18C20 19.1 19.1 20 18 20H6C4.9 20 4 18.9 4 18Z"
            stroke="#00F0FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(0, 240, 255, 0.15)"
          />
          {/* Eyes */}
          <circle cx="8.5" cy="11.5" r="1.5" fill="#CCFF00" />
          <circle cx="15.5" cy="11.5" r="1.5" fill="#CCFF00" />
          {/* Nose / Bridge */}
          <path
            d="M12 14L11 15.5H13L12 14Z"
            fill="#00F0FF"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
