import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  const nowPlayingMoviesData = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  // console.log(nowPlayingMoviesData);

  return (
    <>
      <div className="bg-transparent absolute z-[1]">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
