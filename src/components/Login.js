import React, { useState } from "react";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const toggleSignUp = () => {
    setIsSignUpForm(!isSignUpForm);
  };
  return (
    <div>
      Login
      <div className="absolute bg-black top-[0] right-[0] z-[-1]">
        <img
          className="opacity-50"
          alt="background-banner"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        />
      </div>
      <div className="form bg-[rgba(0,_0,_0,_0.7)] rounded-[4px] flex flex-col gap-[28px] w-[450px] px-[68px] py-[48px]">
        <div className="text-[rgb(255,_255,_255)] text-[2rem] font-bold">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </div>
        <form className="flex flex-col gap-[15px]">
          {isSignUpForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
            />
          )}
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
          />
          {isSignUpForm && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full leading-normal pt-4 pr-4 pb-2 pl-4 bg-transparent border-[1px] border-[white] rounded-[5px] text-[white]"
            />
          )}
          <button className="bg-[red] text-[white] p-[10px] font-bold rounded-[5px]">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-white cursor-pointer" onClick={toggleSignUp}>
          {isSignUpForm
            ? "Already Registered? SignIn Now"
            : "New To Webflix? SignUp Now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
