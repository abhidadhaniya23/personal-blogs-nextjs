import Loader from "../Loader";

type PropsType = {
  label: string;
  loading: boolean;
  disable?: boolean;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
};

const LoadingButton = ({
  label,
  loading,
  disable,
  fullWidth,
  onClick,
}: PropsType) => {
  return (
    <>
      <button
        type="submit"
        className={`btn items-center ${loading ? "!cursor-not-allowed" : ""} ${
          fullWidth ? "w-full md:w-auto" : "w-36"
        }`}
        onClick={onClick}
        disabled={disable}
      >
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <span>{label}</span>
        )}
      </button>
    </>
  );
};

export default LoadingButton;
