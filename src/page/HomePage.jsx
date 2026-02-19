import { Button } from "@base-ui/react";

import { router } from "../router";

import styles from "../index.module.css";

export default function HomePage() {
  return (
    <div>
      <div>
        <Button
          className={`${styles.Button} ${styles["button-lg"]}`}
          onClick={() => router.navigate("startGame")}
        >
          Начать игру
        </Button>
      </div>
    </div>
  );
}
