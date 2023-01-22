import Loader from "../Loader";

type PropsType = {
  label: string;
  loading: boolean;
  disable?: boolean;
  onClick?: (e: any) => void;
};

const LoadingButton = ({ label, loading, disable, onClick }: PropsType) => {
  return (
    <>
      <button
        type="submit"
        className={`btn w-36 items-center ${
          loading ? "!cursor-not-allowed" : ""
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
