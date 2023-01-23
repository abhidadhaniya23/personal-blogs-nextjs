import Image from "next/image";
import LinkButton from "./buttons/LinkButton";

const HeroSection = () => {
  return (
    <>
      <div className="py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-3">
        <div className="flex gap-4 flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold">Abhi's Blogs</h1>
          <p className="text-lg text-center md:text-left text-white/50 md:w-3/4">
            Tech talk and programming adventures from a self-taught developer
          </p>
          <LinkButton link="#newsletter">Subscribe Newsletter</LinkButton>
        </div>
        <Image
          src="/assets/hero.png"
          alt="Abhi's Blogs"
          width={500}
          height={500}
          draggable={false}
        />
      </div>
    </>
  );
};

export default HeroSection;
