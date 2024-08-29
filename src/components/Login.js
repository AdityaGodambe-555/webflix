import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/checkValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [validError, setValidError] = useState(null);
  const toggleSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  const formEmail = useRef(null);
  const formPassword = useRef(null);
  const formFullName = useRef(null);

  const formValidation = () => {
    const errIs = checkValidation(
      formEmail.current.value,
      formPassword.current.value
    );
    // const fireAuth = auth;
    setValidError(errIs);

    if (errIs) return;

    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        formEmail.current.value,
        formPassword.current.value
      )
        .then((userCredential) => {
          // User has been created successfully
          // console.log("User created successfully");

          // Update the user profile
          return updateProfile(userCredential.user, {
            displayName: formFullName.current.value,
          });
        })
        .then(() => {
          // Profile updated successfully
          const { uid, email, displayName } = auth.currentUser;

          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );

          // console.log("Profile updated successfully");
        })
        .catch((error) => {
          // Handle errors here
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidError(errorCode + ": " + errorMessage);
          console.error("Error:", errorMessage);
        });
    }

    if (!isSignUpForm) {
      signInWithEmailAndPassword(
        auth,
        formEmail.current.value,
        formPassword.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidError(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <>
      <div className="bg-transparent absolute z-[1]">
        <Header></Header>
      </div>
      <div className="bg-black w-screen h-screen">
        <img
          className="opacity-50 object-cover w-full h-full"
          alt="background-banner"
          src={BG_URL}
        />
      </div>
      <div className="form bg-[rgba(0,_0,_0,_0.7)] rounded-[4px] flex flex-col gap-[28px] w-[450px] px-[68px] py-[48px] absolute top-2/4 -translate-y-1/2">
        <div className="text-[rgb(255,_255,_255)] text-[2rem] font-bold">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </div>
        <form
          className="flex flex-col gap-[15px]"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignUpForm && (
            <input
              ref={formFullName}
              type="text"
              placeholder="Full Name"
              className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
            />
          )}
          <input
            type="text"
            ref={formEmail}
            placeholder="Email"
            className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
          />
          <input
            ref={formPassword}
            type="password"
            placeholder="Password"
            className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
          />
          {validError && <p className="text-[red] font-bold">{validError}</p>}
          <button
            className="bg-[red] text-[white] p-[10px] font-bold rounded-[5px]"
            onClick={formValidation}
          >
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-white cursor-pointer" onClick={toggleSignUp}>
          {isSignUpForm
            ? "Already Registered? SignIn Now"
            : "New To Webflix? SignUp Now"}
        </p>
      </div>
    </>
  );
};

export default Login;
