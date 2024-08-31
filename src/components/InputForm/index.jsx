import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = ({ placeholder, valueInput, ...rests }) => {
  return (
    <>
      <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests}></WrapperInputStyle>
    </>
  );
};

export default InputForm;
