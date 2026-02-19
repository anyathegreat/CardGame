import { Button } from "@base-ui/react";

import { router } from "../router";

import styles from "../index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <Button
          style={{ width: "200px" }}
          className={`${styles.button} ${styles["button-sm"]}`}
          onClick={() => router.navigate("/")}
          // В будузем будет сохранение текущего прогресса либо же сброс игры
        >
          Главная страница
        </Button>

        <Button
          style={{ width: "120px" }}
          className={`${styles.button} ${styles["button-sm"]}`}
        >
          Меню
        </Button>
      </div>
    </header>
  );
}
