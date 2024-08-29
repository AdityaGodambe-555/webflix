import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();

  // const nowPlayingMoviesData = useSelector(
  //   (store) => store.movies.nowPlayingMovies
  // );
  // console.log(nowPlayingMoviesData);
  const gptToggle = useSelector((store) => store.gpt.gptToggle);

  return (
    <>
      <div className="bg-transparent absolute z-[1]">
        <Header />
      </div>
      {gptToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
