import { RouterProvider } from "react-router";
import { Provider as ProviderStore } from "react-redux";

import { router } from "./router";
import { store } from "./store";

import "./style.css";

export default function App() {
  return (
    <ProviderStore store={store}>
      <RouterProvider router={router} />
    </ProviderStore>
  );
}
