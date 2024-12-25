function Navbar() {
  const handleClick = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center border border-b-black mb-2 p-3 font-poppins sticky top-0 bg-white z-10">
      <h1 className="text-xl font-bold ml-10">
        Hi, {localStorage.getItem("email")}
      </h1>
      <button
        className="mr-10 hover:bg-slate-100 px-3 py-2 rounded-md flex items-center border border-slate-200"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
