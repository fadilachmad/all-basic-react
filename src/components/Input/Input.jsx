import Inputan from "./Inputan";
import Label from "./Label";

function Input({ type, placeholder, name }) {
  return (
    <>
      <Label type={type} name={name}></Label>
      <Inputan type={type} name={name} placeholder={placeholder}></Inputan>
    </>
  );
}

export default Input;
