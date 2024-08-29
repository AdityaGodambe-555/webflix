import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModalMovie, toggleModalState } from "../utils/moviesSlice";
// import MovieDetailModal from "./MovieDetailModal";

const VideoTitle = () => {
  const dispatch = useDispatch();
  const videoMovieData = useSelector((store) => store.movies.videoMovie);
  // const modalState = useSelector((store) => store.movies.toggleModalState);
  // console.log(modalState);

  // console.log(videoMovieData);
  const handelMovieModal = () => {
    dispatch(addModalMovie(videoMovieData));
    dispatch(toggleModalState());
  };
  return (
    <>
      <div className="absolute bottom-[15rem] left-4 md:left-[5rem] w-[344px] md:w-[30rem] flex flex-col gap-4 text-white">
        <div className="text-[xx-large] font-bold">{videoMovieData?.title}</div>
        <div className="text-[smaller]">{videoMovieData?.overview}</div>
        <div className="flex gap-2">
          {/* <div className="flex gap-4 bg-[white] px-[20px] py-[10px] rounded-[5px] hover:opacity-[0.5] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width={20}
            height={20}
            color={"#000000"}
            fill={"black"}
          >
            <path
              d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-black">Play</span>
        </div> */}
          <div
            className="flex gap-4 bg-[#6d6d6d] px-[20px] py-[10px] rounded-[5px] hover:opacity-[0.5] cursor-pointer"
            onClick={handelMovieModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"white"}
              fill={"#6d6d6d"}
            >
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.992 8H12.001"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>More Info</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
