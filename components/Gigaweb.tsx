import { gigawebUrl } from "@/utils/urls";
import { AiOutlineRight } from "react-icons/ai";

const Gigaweb = () => {
  return (
    <>
      <div className="py-16">
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="flex items-center flex-col gap-2 md:w-1/2">
            <h2 className="text-3xl md:text-4xl text-center">
              Want to build brand website?
            </h2>
            <p className="text-white/50 text-lg text-center md:px-20 px-5">
              We are a team of experienced developers who can build your brand
              website.
            </p>
            <a
              href={gigawebUrl}
              target={"_blank"}
              rel="noreferrer"
              className="btn mt-2 flex flex-row justify-center items-center gap-2"
            >
              Learn More <AiOutlineRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gigaweb;
