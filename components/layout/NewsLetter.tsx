import React from "react";
import InputComponent from "../input/InputComponent";
import LoadingButton from "../buttons/LoadingButton";
import axios from "axios";

const NewsLetter = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [subscribed, setSubscribed] = React.useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const data = Object.fromEntries(new FormData(e.target));
    fetch(
      "https://sheet.best/api/sheets/c687690f-f305-4612-8428-ee501f9952c8",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        setSubscribed(true);
      } else {
        console.log("Error: ", response.statusText);
      }
      setLoading(false);
    });
  };

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center md:flex-row gap-2 w-full md:w-1/2"
        >
          <InputComponent
            type="email"
            placeholder="johndoe@gmail.com"
            required={true}
            name="Emails"
          />
          <LoadingButton fullWidth loading={loading}>
            Subscribe
          </LoadingButton>
        </form>
        {subscribed && (
          <p className="text-green-400/80 text-lg text-center md:px-10">
            You have been subscribed successfully!
          </p>
        )}
      </div>
    </>
  );
};

export default NewsLetter;
