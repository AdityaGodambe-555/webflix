import React from "react";
import SearchForm from "./SearchForm";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="w-screen h-screen relative bg-black">
      <img
        className="opacity-50 object-cover w-full h-full"
        alt="background-banner"
        src={BG_URL}
      />
      <SearchForm />
    </div>
  );
};

export default GptSearch;
