import Link from "next/link";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  const links = [
    {
      label: "About",
      link: "https://abhidadhaniya.com/",
    },
    {
      label: "Contact",
      link: "https://abhidadhaniya.com/contact",
    },
    {
      label: "Gigaweb",
      link: "https://abhidadhaniya.com/gigaweb",
    },
    {
      label: "Products",
      link: "https://abhidadhaniya.com/work",
    },
  ];
  return (
    <>
      <header className="sticky top-0 bg-black flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 border-b border-solid border-white/10">
        <nav
          className="w-full mx-auto sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex-none text-xl font-semibold text-white"
            >
              Time Square Blogs
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border-2 font-medium border-solid border-white/50 focus:border-brand/70 text-white shadow-sm align-middle duration-200 focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                data-hs-collapse="#navbar-primary"
                aria-controls="navbar-primary"
                aria-label="Toggle navigation"
              >
                <HiOutlineBars3CenterLeft
                  size={20}
                  className="text-white/80 focus:text-brand/90"
                />
              </button>
            </div>
          </div>
          <div
            id="navbar-primary"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="font-medium text-white/60 hover:text-white"
                  href={link.link}
                  aria-current="page"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
