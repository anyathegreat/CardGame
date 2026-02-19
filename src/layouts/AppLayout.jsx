import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div></div>
      <main
        style={{
          background: "#d79f9f",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
