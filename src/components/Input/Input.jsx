import { forwardRef } from "react";
import Inputan from "./Inputan";
import Label from "./Label";

const Input = forwardRef(({ type, placeholder, name }, ref) => {
  return (
    <>
      <Label type={type} name={name}></Label>
      <Inputan
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      ></Inputan>
    </>
  );
});

export default Input;
