import { createBrowserRouter } from "react-router";

import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import GamePage from "./page/GamePage";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/startGame",
        Component: GamePage,
        handle: { crumb: "game" },
      },
      {
        path: "*",
        Component: NotFoundPage,
        handle: { crumb: "not found" },
      },
    ],
  },
]);
