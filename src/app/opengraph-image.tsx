import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at 85% 18%, rgba(34, 211, 238, 0.28), transparent 30%), radial-gradient(circle at 18% 90%, rgba(59, 130, 246, 0.2), transparent 35%), linear-gradient(180deg, #020617 0%, #0f172a 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#67e8f9",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Aziz Dhifaoui
        </div>
        <div
          style={{
            marginTop: "18px",
            fontSize: 34,
            color: "#cbd5e1",
          }}
        >
          Full Stack JavaScript Developer &amp; Network Expert
        </div>
      </div>
    ),
    size
  );
}
