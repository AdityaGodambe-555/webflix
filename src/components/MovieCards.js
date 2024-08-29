import React from "react";
import { TMDB_IMAGE_BASE_URL } from "../utils/constants";
import { addModalMovie, toggleModalState } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const MovieCards = ({ posterPath, movie }) => {
  // console.log(movie);
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(addModalMovie(movie));
    dispatch(toggleModalState());
  };
  return (
    <img
      className="w-64 rounded-xl cursor-pointer"
      alt="nowPlaying"
      src={TMDB_IMAGE_BASE_URL + posterPath}
      onClick={handleModal}
    />
  );
};

export default MovieCards;
