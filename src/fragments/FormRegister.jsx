import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function FormRegister() {
  return (
    <>
      <form action="">
        <Input type="text" name="Username" placeholder="John Doe" />
        <Input type="email" name="Email" placeholder="example@gmail.com" />
        <Input type="password" name="Password" placeholder="********" />
        <Input type="password" name="Confirm Password" placeholder="********" />
      </form>
      <Button style={"my-5"}>Register</Button>
    </>
  );
}

export default FormRegister;
