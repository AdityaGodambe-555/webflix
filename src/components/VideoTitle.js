import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = () => {
  const videoMovieData = useSelector((store) => store.movies.videoMovie);
  // console.log(videoMovieData);
  return (
    <div className="absolute bottom-[15rem] left-4 md:left-[5rem] w-[344px] md:w-[30rem] flex flex-col gap-4 text-white">
      <div className="text-[xx-large] font-bold">{videoMovieData?.title}</div>
      <div className="text-[smaller]">{videoMovieData?.overview}</div>
      <div className="flex gap-2">
        <div className="flex gap-4 bg-[white] px-[20px] py-[10px] rounded-[5px] hover:opacity-[0.5] cursor-pointer">
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
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
