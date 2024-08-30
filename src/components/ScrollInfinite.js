import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import { TMDB_API_OPTIONS } from "../utils/constants";

const ScrollInfinite = () => {
  let [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(true);

  const getPopularMOvies = async () => {
    // setLoader(true);
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    const populaRMovies = await json.results;
    setMovies((prevMovies) => {
      if (prevMovies === null) {
        return populaRMovies;
      }
      return [...prevMovies, ...populaRMovies];
    });
  };
  !movies && getPopularMOvies();

  const handelInfiniteScroll = () => {
    const innerHe = window.innerHeight;
    const scrollTp = document.documentElement.scrollTop;
    const scrollHe = document.documentElement.scrollHeight;

    if (innerHe + scrollTp + 1 >= scrollHe) {
      setPage(page++);
      getPopularMOvies();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <div className="flex gap-3 flex-wrap justify-center">
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => (
            <MovieCards
              key={movie.id + "-" + index}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
      {loader && (
        <div class="flex justify-center items-center bg-white h-12 dark:invert">
          <span class="sr-only">Loading...</span>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      )}
    </>
  );
};

export default ScrollInfinite;
