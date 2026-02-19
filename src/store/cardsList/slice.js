import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: 0,
};

export const updateDeckCard = createAsyncThunk(
  "cardsList/updateDeckCard",
  async (params, { rejectWithValue }) => {
    try {
      return params;
    } catch (error) {
      rejectWithValue(error.message);
      console.error(error.message);
    }
  },
);

const cardsSlice = createSlice({
  name: "list",
  initialState,
  reducer: {
    clearCards: () => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateDeckCard.pending, (state) => {
        state.list = [];
        state.loading += 1;
      })
      .addCase(updateDeckCard.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading -= 1;
      })
      .addCase(updateDeckCard.rejected, (state) => {
        state.list = [];
        state.loading -= 1;
      });
  },
});

// export const { clearCards } = cardsSlice.actions;

export default cardsSlice.reducer;
