import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import ScrollInfinite from "./ScrollInfinite";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="relative top-[-115px] px-6">
        <div className="flex flex-col pt-6">
          <div className="text-white font-bold text-2xl p-3">Now Playing</div>
          <MoviesList moviesList={movies.nowPlayingMovies} />
        </div>
        <div className="flex flex-col pt-6">
          <div className="text-white font-bold text-2xl p-3">Top Rated</div>
          <MoviesList moviesList={movies.topRatedMovies} />
        </div>
        <div className="flex flex-col pt-6">
          <div className="text-white font-bold text-2xl p-3">Upcoming</div>
          <MoviesList moviesList={movies.upcomingMovies} />
        </div>
        <div className="flex flex-col pt-6">
          <div className="text-white font-bold text-2xl p-3">
            Popular Movies
          </div>
          <ScrollInfinite movies={movies.popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
