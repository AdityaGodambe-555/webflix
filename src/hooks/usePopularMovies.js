import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMOvies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const popularMovies = await json.results;
    // console.log(popularMovies);
    dispatch(addPopularMovies(popularMovies));
  };

  useEffect(() => {
    getPopularMOvies();
  }, []);
};

export default usePopularMovies;
