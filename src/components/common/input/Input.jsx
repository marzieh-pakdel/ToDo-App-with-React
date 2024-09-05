const Input = ({
    placeholder,
    type,
    inputStyle,
    inputError,
    ...props
  }) => {
    return (
    <div>
        <input
          id={placeholder}
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        <p className=" text-red-500 text-sm">{inputError}</p>
    </div>
    );
  };
  
  export default Input;