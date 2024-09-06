const Input = ({
    placeholder,
    type,
    inputStyle,
    inputError,
    value,
    ...props
  }) => {
    return (
    <div>
        <input
          id={placeholder}
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          value={value}
          {...props}
        />
        <p className=" text-red-500 text-sm">{inputError}</p>
    </div>
    );
  };
  
  export default Input;