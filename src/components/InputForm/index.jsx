import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = ({ placeholder, value, handleOnchange, ...rests }) => {
  const handleOnchangeInput = (e) => {
    handleOnchange(e.target.value);
  };
  return (
    <>
      <WrapperInputStyle placeholder={placeholder} valueInput={value} onChange={handleOnchangeInput} {...rests} />
    </>
  );
};

export default InputForm;
