const InputComponent = () => {
  return (
    <>
      <input
        type="text"
        className="w-full border-[1px] bg-black border-solid border-white/10 focus:border-white/30 hover:border-white/30 px-6 py-3 placeholder:text-white/40"
        placeholder="Enter the text..."
      />
    </>
  );
};

export default InputComponent;
