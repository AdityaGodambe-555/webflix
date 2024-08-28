import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  return (
    <div className="relative w-full overflow-x-hidden h-[44rem]">
      <VideoBackground />
      <VideoTitle />
    </div>
  );
};

export default MainContainer;
