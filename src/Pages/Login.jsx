import { Link } from "react-router-dom";
import FormLogin from "../fragments/FormLogin";
import AuthLayouts from "../layouts/AuthLayouts";

function Login() {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
}

export default Login;
