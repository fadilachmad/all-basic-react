function Button({ children = "...", style, type = "button" }) {
  return (
    <button
      className={`bg-sky-950 px-6 py-2 rounded-md text-white hover:bg-sky-900 w-full ${style}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
