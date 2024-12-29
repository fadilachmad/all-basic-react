import { useEffect, useRef } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";

function FormLogin(ref) {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.Email.value);
    localStorage.setItem("password", e.target.Password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);
  useEffect(() => {
    // console.log(emailRef.current);
    emailRef.current.focus();
  }, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="Email"
          placeholder="example@gmail.com"
          ref={emailRef}
        />
        <Input type="password" name="Password" placeholder="********" />
        <Button style={"my-5"} type="submit">
          Login
        </Button>
      </form>
    </>
  );
}

export default FormLogin;
