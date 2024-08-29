// import React, { useEffect, useRef } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalState } from "../utils/moviesSlice";
// import { addUser, removeUser } from "../utils/userSlice";
// import { toggleGpt } from "../utils/gptSlice";
// import { SUPPORTED_LANGUAGE } from "../utils/constants";
// import { changeTheLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const language = useRef(null);
  const user = useSelector((store) => store.user);
  const modalState = useSelector((store) => store.movies.toggleModalState);

  const urlPath = useLocation();
  // console.log(urlPath.pathname);

  // const gptToggle = useSelector((store) => store.gpt.gptToggle);
  // const handelGptToggle = () => {
  //   dispatch(toggleGpt());
  // };
  const userSignOut = () => {
    if (modalState === true) {
      dispatch(toggleModalState());
    }
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // const handelLanguageChange = () => {
  //   // console.log(language.current.value);
  //   dispatch(changeTheLanguage(language.current.value));
  // };
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, []);

  return (
    <div className="header flex md:justify-between mx-3 w-[90vw] h-16 flex-col md:flex-row gap-[12px] md:gap-0 items-end md:items-center">
      <div className="logo text-[rgb(229,_9,_20)] text-[2.6rem] font-bold tracking-wide self-center">
        WEBFLIX
      </div>
      {user && (
        <div className="flex items-center text-red-700 font-bold text-lg gap-2">
          Hii, <span className="text-white">{user.displayName}</span>
        </div>
      )}
      <div className="flex items-center gap-5">
        {/* <div
          className="flex gap-1 text-white font-semibold text-lg rounded-full border-[1px] border-[white] px-[10px] py-[3px] cursor-pointer"
          onClick={handelGptToggle}
        >
          {!gptToggle ? (
            <>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#006cff"}
                  fill={"none"}
                >
                  <path
                    d="M13.9258 12.7775L11.7775 10.6292C11.4847 10.3364 11.3383 10.19 11.1803 10.1117C10.8798 9.96277 10.527 9.96277 10.2264 10.1117C10.0685 10.19 9.92207 10.3364 9.62923 10.6292C9.33638 10.9221 9.18996 11.0685 9.11169 11.2264C8.96277 11.527 8.96277 11.8798 9.11169 12.1803C9.18996 12.3383 9.33638 12.4847 9.62923 12.7775L11.7775 14.9258M13.9258 12.7775L20.3708 19.2225C20.6636 19.5153 20.81 19.6617 20.8883 19.8197C21.0372 20.1202 21.0372 20.473 20.8883 20.7736C20.81 20.9315 20.6636 21.0779 20.3708 21.3708C20.0779 21.6636 19.9315 21.81 19.7736 21.8883C19.473 22.0372 19.1202 22.0372 18.8197 21.8883C18.6617 21.81 18.5153 21.6636 18.2225 21.3708L11.7775 14.9258M13.9258 12.7775L11.7775 14.9258"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 2L17.2948 2.7966C17.6813 3.84117 17.8746 4.36345 18.2556 4.74445C18.6366 5.12545 19.1588 5.31871 20.2034 5.70523L21 6L20.2034 6.29477C19.1588 6.68129 18.6366 6.87456 18.2556 7.25555C17.8746 7.63655 17.6813 8.15883 17.2948 9.2034L17 10L16.7052 9.2034C16.3187 8.15884 16.1254 7.63655 15.7444 7.25555C15.3634 6.87455 14.8412 6.68129 13.7966 6.29477L13 6L13.7966 5.70523C14.8412 5.31871 15.3634 5.12545 15.7444 4.74445C16.1254 4.36345 16.3187 3.84117 16.7052 2.7966L17 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 4L6.22108 4.59745C6.51097 5.38087 6.65592 5.77259 6.94167 6.05834C7.22741 6.34408 7.61913 6.48903 8.40255 6.77892L9 7L8.40255 7.22108C7.61913 7.51097 7.22741 7.65592 6.94166 7.94167C6.65592 8.22741 6.51097 8.61913 6.22108 9.40255L6 10L5.77892 9.40255C5.48903 8.61913 5.34408 8.22741 5.05833 7.94167C4.77259 7.65592 4.38087 7.51097 3.59745 7.22108L3 7L3.59745 6.77892C4.38087 6.48903 4.77259 6.34408 5.05833 6.05833C5.34408 5.77259 5.48903 5.38087 5.77892 4.59745L6 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>GPT Search</span>
            </>
          ) : (
            "Home Page"
          )}
        </div> */}
        {/* {gptToggle && (
          <div className="flex gap-1 rounded-full border-[1px] border-[white] px-[10px] py-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"white"}
              fill={"none"}
            >
              <path
                d="M5 5.96552H8.15M12 5.96552H10.25M8.15 5.96552H10.25M8.15 5.96552V5M10.25 5.96552C9.88076 7.28593 9.10754 8.53411 8.225 9.63103M5.975 12C6.68843 11.344 7.4942 10.5394 8.225 9.63103M8.225 9.63103C7.775 9.10345 7.145 8.24984 6.965 7.86364M8.225 9.63103L9.575 11.0345"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.02231 16.9777C7.07674 18.6978 7.26397 19.7529 7.90796 20.5376C8.07418 20.7401 8.25989 20.9258 8.46243 21.092C9.56878 22 11.2125 22 14.5 22C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.7563 7.26676 18.707 7.07837 17 7.02303M7.02231 16.9777C5.30217 16.9233 4.24713 16.736 3.46243 16.092C3.25989 15.9258 3.07418 15.7401 2.90796 15.5376C2 14.4312 2 12.7875 2 9.5C2 6.21252 2 4.56878 2.90796 3.46243C3.07418 3.25989 3.25989 3.07418 3.46243 2.90796C4.56878 2 6.21252 2 9.5 2C12.7875 2 14.4312 2 15.5376 2.90796C15.7401 3.07418 15.9258 3.25989 16.092 3.46243C16.736 4.24713 16.9233 5.30217 16.9777 7.02231C16.9777 7.02231 16.9777 7.02231 17 7.02303M7.02231 16.9777L17 7.02303"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13 19L13.8333 17M18 19L17.1667 17M13.8333 17L15.5 13L17.1667 17M13.8333 17H17.1667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <select
              className="text-[white] bg-transparent cursor-pointer"
              ref={language}
              onChange={handelLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((language) => {
                return (
                  <option
                    key={language.identifier}
                    value={language.identifier}
                    className="text-[white] bg-[red] cursor-pointer"
                  >
                    {language.lang}
                  </option>
                );
              })}
            </select>
          </div>
        )} */}
        {urlPath.pathname !== "/" && (
          <button
            onClick={() => navigate("/")}
            className="text-red-600 w-[fit-content] font-bold text-lg rounded-full border-[1px] border-[white] px-[10px] py-[3px]"
          >
            Home
          </button>
        )}
        {user && (
          <button
            onClick={userSignOut}
            className="text-red-600 w-[fit-content] font-bold text-lg rounded-full border-[1px] border-[white] px-[10px] py-[3px]"
          >
            Sign Out
          </button>
        )}
        {urlPath.pathname !== "/login" && !user && (
          <button
            onClick={userSignOut}
            className="text-red-600 w-[fit-content] font-bold text-lg rounded-full border-[1px] border-[white] px-[10px] py-[3px]"
          >
            Sign In / Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
