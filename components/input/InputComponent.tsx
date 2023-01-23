type PropsType = {
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
};

const InputComponent = (props: PropsType) => {
  const { name, type, placeholder, required } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        className="w-full border bg-black border-solid border-white/10 focus:border-white/30 px-6 py-3 placeholder:text-white/40"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default InputComponent;
