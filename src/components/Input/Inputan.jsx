import { forwardRef } from "react";

const Inputan = forwardRef(({ placeholder, type, name }, ref) => {
  return (
    <input
      type={type}
      id={name}
      className="border border-slate-300 py-2 rounded-md w-full px-3 font-normal"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Inputan;
