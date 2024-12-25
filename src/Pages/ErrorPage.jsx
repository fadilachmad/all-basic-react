import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-3xl font-bold ">Oops!</h1>
      <p className="text-xl font-semibold">Sorry, an unexpected error</p>
      <p className="text-xl font-semibold">
        {error.status} {error.statusText}
      </p>
    </div>
  );
}

export default ErrorPage;
