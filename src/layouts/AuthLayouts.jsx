import { Link } from "react-router-dom";

function AuthLayouts({ children, title }) {
  return (
    <div className="flex justify-center items-center min-h-screen font-poppins">
      <div className="w-full max-w-xs">
        <div className="title">
          <h1 className="text-sky-900 font-bold text-3xl">{title}</h1>
          <h2 className="text-slate-500 text-md font-semibold mb-8">
            Welcome, Please enter your details
          </h2>
        </div>
        {children}
        <SwitchRoute title={title} />
      </div>
    </div>
  );
}

function SwitchRoute({ title }) {
  const isLogin = title == "Login";
  return (
    <p className="text-center">
      {isLogin ? "Don't have an account? " : "Already have an account? "}
      <Link to={isLogin ? "/register" : "/login"} className="text-blue-800">
        {isLogin ? "Register" : "Login"}
      </Link>
    </p>
  );
}

export default AuthLayouts;
