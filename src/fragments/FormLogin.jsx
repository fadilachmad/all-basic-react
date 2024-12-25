import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";

function FormLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.Email.value);
    localStorage.setItem("password", e.target.Password.value);
    window.location.href = "/products";
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Input type="email" name="Email" placeholder="example@gmail.com" />
        <Input type="password" name="Password" placeholder="********" />
        <Button style={"my-5"} type="submit">
          Login
        </Button>
      </form>
    </>
  );
}

export default FormLogin;
