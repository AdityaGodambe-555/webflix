import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    videoMovie: null,
    videoMovieYtKey: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggleModalState: false,
    modalMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addvideoMovie: (state, action) => {
      state.videoMovie = action.payload;
    },
    addVideoMovieYtKey: (state, action) => {
      state.videoMovieYtKey = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addModalMovie: (state, action) => {
      state.modalMovie = action.payload;
    },
    removeModalMovie: (state) => {
      state.modalMovie = null;
    },
    toggleModalState: (state) => {
      state.toggleModalState = !state.toggleModalState;
    },
  },
});

export const {
  addNowPlayingMovies,
  addvideoMovie,
  addVideoMovieYtKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addModalMovie,
  toggleModalState,
  removeModalMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
