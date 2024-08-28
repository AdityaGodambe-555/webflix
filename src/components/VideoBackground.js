import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  // useVideoKey();
  const movieVideoYtKey = useSelector((store) => store.movies.videoMovieYtKey);
  // console.log(movieVideoYtKey);

  return (
    <div className="w-screen h-[44rem] relative overflow-hidden">
      <iframe
        className="youtubeVideo block scale-[3.96] sm:scale-[2.65] md:scale-[2.2] lg:scale-[1.66] xl:scale-[1.35]"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${movieVideoYtKey}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${movieVideoYtKey}&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="overlay absolute top-[0] left-[0] w-screen h-[44rem] bg-transparent"></div>
    </div>
  );
};

export default VideoBackground;
