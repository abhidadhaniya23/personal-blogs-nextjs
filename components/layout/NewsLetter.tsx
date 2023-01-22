import React from "react";
import InputComponent from "../input/InputComponent";

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7">
        <div className="flex items-center flex-col gap-2 md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-center">
            Get the latest updates
          </h2>
          <p className="text-white/50 text-lg text-center md:px-20 px-5">
            Subscribe to our newsletter to get weekly updates about
            technologies.
          </p>
        </div>
        <form className="flex gap-2 md:w-1/2">
          <InputComponent />
          <button className="bg-white/10 hover:bg-white/20 text-white/40 hover:text-white/60 px-4 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
