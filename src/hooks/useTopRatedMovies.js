import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const topRatedMovies = await json.results;
    // console.log(topRatedMovies);
    dispatch(addTopRatedMovies(topRatedMovies));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
