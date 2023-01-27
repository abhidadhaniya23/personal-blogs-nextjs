import Loader from "../Loader";

type PropsType = {
  children: JSX.Element | string;
  loading: boolean;
  disable?: boolean;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
};

const LoadingButton = ({
  children,
  loading,
  disable,
  fullWidth,
  onClick,
}: PropsType) => {
  return (
    <>
      <button
        type="submit"
        className={`btn md:min-w-[8rem] items-center ${
          loading ? "!cursor-not-allowed" : ""
        } ${fullWidth ? "w-full md:w-auto" : "w-36"}`}
        onClick={onClick}
        disabled={disable}
      >
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <span>{children}</span>
        )}
      </button>
    </>
  );
};

export default LoadingButton;
