import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="my-10 flex flex-col justify-center items-center gap-3 p-10 rounded-lg border border-white/10 border-solid">
        <h1 className="text-3xl">404</h1>
        <p>Page not found</p>
        <Link href="/" className="btn">
          Go back to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
