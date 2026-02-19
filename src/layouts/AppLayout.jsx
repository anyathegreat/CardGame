import { Outlet } from "react-router";

import Header from "../components/Header";

import styles from "../index.module.css";

export default function AppLayout() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
