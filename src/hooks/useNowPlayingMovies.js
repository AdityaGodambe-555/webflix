import { useDispatch, useSelector } from "react-redux";
import { TMDB_API, TMDB_API_OPTIONS } from "../utils/constants";
import {
  addNowPlayingMovies,
  addvideoMovie,
  addVideoMovieYtKey,
} from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  let nowPlayingMoviesData = null;
  const getNowPlayingMovies = async () => {
    const data = await fetch(TMDB_API, TMDB_API_OPTIONS);
    const json = await data.json();
    nowPlayingMoviesData = await json.results;
    // console.log(json.results);
    dispatch(addNowPlayingMovies(nowPlayingMoviesData));

    const randomNumber = Math.floor(Math.random() * 6);

    const videoMovie = await nowPlayingMoviesData[randomNumber];
    // console.log(videoMovie.id);
    dispatch(addvideoMovie(videoMovie));
    const videoMovieId = await videoMovie.id;

    const videoData = await fetch(
      `https://api.themoviedb.org/3/movie/${videoMovieId}/videos`,
      TMDB_API_OPTIONS
    );
    const videoDataJson = await videoData.json();

    const filterData = await videoDataJson.results.filter(
      (video) => video.name === "Official Trailer"
    );
    const videoMovieKey = await filterData[0]?.key;

    // console.log(videoMovieKey);

    dispatch(addVideoMovieYtKey(videoMovieKey));
  };

  useEffect(() => {
    // if (nowPlayingMoviesData !== null) {
    // }
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
