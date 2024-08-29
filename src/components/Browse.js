import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import MovieDetailModal from "./MovieDetailModal";
import { toggleModalState } from "../utils/moviesSlice";

const Browse = () => {
  useNowPlayingMovies();
  const dispatch = useDispatch();
  const modalState = useSelector((store) => store.movies.toggleModalState);
  // const navigate = useNavigate();
  // const nowPlayingMoviesData = useSelector(
  //   (store) => store.movies.nowPlayingMovies
  // );
  // console.log(nowPlayingMoviesData);
  const gptToggle = useSelector((store) => store.gpt.gptToggle);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/");
      } else {
        dispatch(removeUser());
        // navigate("/login");
      }
    });
  }, []);

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
          {modalState && <MovieDetailModal />}
        </>
      )}
    </>
  );
};

export default Browse;
