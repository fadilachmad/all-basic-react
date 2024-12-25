import { Link } from "react-router-dom";
import FormRegister from "../fragments/FormRegister";
import AuthLayouts from "../layouts/AuthLayouts";

function Register() {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
}

export default Register;
