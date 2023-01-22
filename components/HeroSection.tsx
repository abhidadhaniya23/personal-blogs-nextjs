import Image from "next/image";
import InputComponent from "./input/InputComponent";

const HeroSection = () => {
  return (
    <>
      <div className="py-10 flex flex-row justify-between items-start gap-3">
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl font-bold">Abhi's Blogs</h1>
          <p className="text-lg text-left text-white/50 md:w-3/5">
            Tech talk and programming adventures from a self-taught developer
          </p>
          <div className="md:w-3/4 mt-3">
            <InputComponent />
          </div>
        </div>
        {/* <Image
          src="/assets/ipad.png"
          alt="Abhi's Blogs"
          width={500}
          height={500}
        /> */}
      </div>
    </>
  );
};

export default HeroSection;
