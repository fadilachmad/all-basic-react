function Label({ name }) {
  return (
    <label htmlFor={name} className="block my-2 font-medium">
      {name}
    </label>
  );
}

export default Label;
