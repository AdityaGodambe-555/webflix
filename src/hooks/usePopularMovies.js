import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, appendPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = (page) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMOvies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const populaRMovies = await json.results;
    // console.log(popularMovies);
    dispatch(addPopularMovies(populaRMovies));
  };

  const getMorePopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const populaRMovies = await json.results;
    dispatch(appendPopularMovies(populaRMovies));
    console.log("Append Done");
  };

  useEffect(() => {
    if (!popularMovies?.length) {
      // If popularMovies is empty, fetch the initial batch of movies
      getPopularMOvies();
    } else {
      // If there are already movies, fetch more
      getMorePopularMovies();
    }
  }, []);
};

export default usePopularMovies;
