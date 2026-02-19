import { configureStore } from "@reduxjs/toolkit";

import cardsSlice from "./cardsList/slice";

export const store = configureStore({
  reducer: {
    cardsList: cardsSlice,
  },
});
