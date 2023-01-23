import { gigawebUrl } from "@/utils/urls";
import { AiOutlineRight } from "react-icons/ai";
import LinkButton from "./buttons/LinkButton";

const Gigaweb = () => {
  return (
    <>
      <div className="pt-10 pb-20">
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="flex items-center flex-col gap-2 md:w-1/2">
            <h2 className="text-3xl md:text-4xl text-center">
              Want to build brand website?
            </h2>
            <p className="text-white/50 text-lg text-center md:px-20 mb-3">
              We are a team of experienced developers who can build your brand
              website.
            </p>
            <LinkButton external link={gigawebUrl}>
              <div className="flex flex-row items-center gap-2">
                Learn More <AiOutlineRight />
              </div>
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gigaweb;
