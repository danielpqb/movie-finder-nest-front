import { createSlice } from "@reduxjs/toolkit";

const exp = {
  title: "Guardians of the Galaxy Vol. 2",
  description:
    "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  img: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  rating: "7.6",
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
