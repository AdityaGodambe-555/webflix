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
  const CancelCircleHalfDotIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"red"}
      fill={"none"}
      {...props}
    >
      <path
        d="M15 9L12 12M12 12L9 15M12 12L15 15M12 12L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47714 17.5228 1.99998 12 1.99998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 8.49998C2.86239 7.67055 3.3189 6.89164 3.85601 6.17676M6.17681 3.85597C6.89168 3.31886 7.67058 2.86237 8.5 2.49998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  useEffect(() => {
    movieDetails();
  }, []);

  return (
    <div className="bg-[#000000e6] w-[90vw] h-[93%] fixed top-[2rem] rounded-xl overflow-y-scroll z-20 scrollbar-thin">
      <div
        className="font-bold absolute right-7 text-2xl top-3 cursor-pointer"
        onClick={handelModalToggle}
      >
        {CancelCircleHalfDotIcon()}
      </div>
      {moviesDesc ? (
        <div className="p-4">
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center mb-4">
            {moviesDesc.title}
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center">
              <img
                className="w-[75%] md:w-[50%] rounded-full"
                alt="Movie-Poster"
                src={TMDB_IMAGE_BASE_URL + moviesDesc.backdrop_path}
              />
            </div>
            <div className="w-auto">
              <div className="text-white text-3xl sm:text-4xl font-bold mb-4">
                Over View
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold mb-4">
                {moviesDesc.tagline}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold mb-4">
                {moviesDesc.overview}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold mb-4">
                Adult : {moviesDesc.adult ? <>Yes</> : <>No</>}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold mb-4">
                Rating : {moviesDesc.vote_average}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold  mb-4">
                Release Date: {moviesDesc.release_date}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold  mb-4">
                Budget: ${moviesDesc.budget.toLocaleString()}
              </div>
              <div className="text-white text-xl sm:text-2xl font-semibold  mb-4">
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
