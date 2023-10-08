import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Error() {
  const { setError, setEmail, setPassword } = useAuth();

  function handleError(e) {
    e.preventDefault();
    setEmail("admin@admin.com");
    setPassword("admin");
    setError(() => false);
  }
  return (
    <div
      className="absolute bg-gray-900 h-[23rem] rounded-[3rem] text-white font-bold 
    w-[20rem] p-6 flex flex-col justify-center items-center text-center"
    >
      <h3 className="text-white text-7xl pb-6">Error</h3>
      <p className="text-white text-xl pb-3">
        Oops, something went wrong. <br /> Please try again
      </p>

      <NavLink
        onClick={(e) => handleError(e)}
        className="bg-green-600 hover:bg-green-700 p-6 rounded-2xl w-[12rem] h-[2rem] flex justify-center items-center  transition-all ease-in duration-200 "
      >
        Back
      </NavLink>
    </div>
  );
}

export default Error;
