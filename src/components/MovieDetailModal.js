import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TMDB_API_OPTIONS,
  TMDB_IMAGE_BASE_URL,
  TMDB_MOVIE_DETAILS_API,
} from "../utils/constants";
import { removeModalMovie, toggleModalState } from "../utils/moviesSlice";

const MovieDetailModal = () => {
  const [moviesDesc, setMoviesDesc] = useState(null);
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.modalMovie);
  // console.log(movie.id);
  const handelModalToggle = () => {
    dispatch(toggleModalState());
    dispatch(removeModalMovie());
  };
  const movieDetails = async () => {
    const data = await fetch(
      TMDB_MOVIE_DETAILS_API + movie.id,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    setMoviesDesc(json);
    // console.log(json);
  };
  useEffect(() => {
    movieDetails();
  }, []);

  return (
    <div className="bg-[#000000e6] w-[90vw] h-[90%] fixed top-[4rem] rounded-xl overflow-y-scroll z-20">
      <div
        className="text-white font-bold absolute right-7 text-2xl top-3 cursor-pointer"
        onClick={handelModalToggle}
      >
        X
      </div>
      {moviesDesc ? (
        <div className="p-4">
          <h1 className="text-white text-5xl font-bold text-center mb-4">
            {moviesDesc.title}
          </h1>
          <div className="flex flex-col gap-5">
            <div>
              <img
                className="w-full rounded-full"
                alt="Movie-Poster"
                src={TMDB_IMAGE_BASE_URL + moviesDesc.backdrop_path}
              />
            </div>
            <div className="w-auto">
              <div className="text-white text-4xl font-bold mb-4">
                Over View
              </div>
              <div className="text-white text-2xl font-semibold mb-4">
                {moviesDesc.tagline}
              </div>
              <div className="text-white text-2xl font-semibold mb-4">
                {moviesDesc.overview}
              </div>
              <div className="text-white text-2xl font-semibold mb-4">
                Adult : {moviesDesc.adult ? <>Yes</> : <>No</>}
              </div>
              <div className="text-white text-2xl font-semibold mb-4">
                Rating : {moviesDesc.vote_average}
              </div>
              <div className="text-white text-2xl font-semibold  mb-4">
                Release Date: {moviesDesc.release_date}
              </div>
              <div className="text-white text-2xl font-semibold  mb-4">
                Budget: ${moviesDesc.budget.toLocaleString()}
              </div>
              <div className="text-white text-2xl font-semibold  mb-4">
                Revenue: ${moviesDesc.revenue.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-center p-4">Loading...</div>
      )}
    </div>
  );
};
export default MovieDetailModal;
