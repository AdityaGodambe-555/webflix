import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="header flex md:justify-between mx-3 w-[80vw] h-16 flex-col md:flex-row gap-[12px] md:gap-0 items-end md:items-center">
      <div className="logo text-[rgb(229,_9,_20)] text-[2.6rem] font-bold tracking-wide self-center">
        WEBFLIX
      </div>
      {user && (
        <div className="flex items-center text-white">
          Hii, {user.displayName}{" "}
        </div>
      )}
      {user && (
        <button onClick={userSignOut} className="text-white w-[fit-content]">
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
