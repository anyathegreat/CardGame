import { createBrowserRouter } from "react-router";

import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "*",
        Component: NotFoundPage,
        handle: { crumb: "not found" },
      },
    ],
  },
]);
