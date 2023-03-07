import { createSlice } from "@reduxjs/toolkit";

const exp = {
  title: "",
  description:
    "",
  img: "",
  actors: "",
  rating: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    value: exp,
    search: "",
  },
  reducers: {
    setMovie: (state, action) => {
      state.value = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setMovie, setSearch } = movieSlice.actions;

export default movieSlice.reducer;
