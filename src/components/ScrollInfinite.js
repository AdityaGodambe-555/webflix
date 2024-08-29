import React from "react";
import MovieCards from "./MovieCards";

const ScrollInfinite = ({ movies }) => {
  //   console.log(movies);

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCards
            key={movie.id}
            posterPath={movie.poster_path}
            movie={movie}
          />
        ))
      ) : (
        <p>No movies available</p> // Or any other fallback UI
      )}
      {/* {movies.map((movie) => (
        <MovieCards
          key={movie.id}
          posterPath={movie.poster_path}
          movie={movie}
        />
      ))} */}
    </div>
  );
};

export default ScrollInfinite;
