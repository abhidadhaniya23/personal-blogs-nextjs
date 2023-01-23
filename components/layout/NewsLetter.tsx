import React from "react";
import InputComponent from "../input/InputComponent";
import LoadingButton from "../buttons/LoadingButton";

const NewsLetter = () => {
  return (
    <>
      <div
        id="newsletter"
        className="my-10 py-7 px-5 lg:p-10 border border-solid border-white/10 rounded-lg flex flex-col justify-center items-center gap-7"
      >
        <div className="flex items-center flex-col gap-2 md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-center">
            Get the latest updates
          </h2>
          <p className="text-white/50 text-lg text-center md:px-10">
            Subscribe to our newsletter to get weekly updates about
            technologies.
          </p>
        </div>
        <form className="flex flex-col items-center md:flex-row gap-2 w-full md:w-1/2">
          <InputComponent />
          <LoadingButton
            fullWidth
            label="Subscribe"
            onClick={(e: any) => {
              e.preventDefault();
            }}
            loading={false}
          />
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
