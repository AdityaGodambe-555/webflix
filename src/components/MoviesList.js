import React from "react";
import MovieCards from "./MovieCards";

const MoviesList = ({ moviesList }) => {
  //   console.log(moviesList);
  if (!moviesList) return;
  return (
    <div className="flex gap-3 overflow-x-scroll scrollbar-thin">
      {moviesList.map((movie) => (
        <MovieCards
          key={movie.id}
          posterPath={movie.poster_path}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MoviesList;
