export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          padding: "40px",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          textAlign: "center",
          maxWidth: "420px",
        }}
      >
        <h1 style={{ marginBottom: "12px" }}>
          Netlify Test Page
        </h1>

        <p style={{ color: "#555", marginBottom: "20px" }}>
          If you can see this, your build pipeline works.
        </p>

        <button
          onClick={() => alert("JS works")}
          style={{
            padding: "12px 18px",
            borderRadius: "999px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
