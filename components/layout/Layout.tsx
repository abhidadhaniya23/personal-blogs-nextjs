import Navbar from "@/components/navbar/Navbar";
import NewsLetter from "./NewsLetter";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="text-white lg:px-10 px-5 max-w-6xl mx-auto">
        <Navbar />
        {children}
        <div className="py-16 border-y-[1px] border-solid border-white/10">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Layout;
