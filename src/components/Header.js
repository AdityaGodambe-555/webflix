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
    <div className="header flex justify-between mx-3 w-[80vw] h-16">
      <div className="logo w-[9.25rem] h-10 text-[rgb(229,_9,_20)] text-[2.6rem] font-bold tracking-wide">
        WEBFLIX
      </div>
      {user && (
        <div className="flex items-center">Hii!, {user.displayName} </div>
      )}
      {user && <button onClick={userSignOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
