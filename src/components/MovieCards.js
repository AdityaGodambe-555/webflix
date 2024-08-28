import React from "react";
import { TMDB_IMAGE_BASE_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <img
      className="w-64 rounded-xl"
      alt="nowPlaying"
      src={TMDB_IMAGE_BASE_URL + posterPath}
    />
  );
};

export default MovieCards;
