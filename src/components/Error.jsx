// import { NavLink } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import { createPortal } from "react-dom";

function Error() {
  // const { setError, setEmail, setPassword } = useAuth();

  // function handleError(e) {
  //   e.preventDefault();
  //   setEmail("admin@admin.com");
  //   setPassword("admin");
  //   setError(() => false);
  // }

  return createPortal(
    <div className="absolute left-0 top-0 m-auto flex h-screen w-full items-center justify-center">
      <div className="flex h-[18rem] w-[35rem] items-center justify-center rounded-3xl bg-yellow-500 text-white">
        something went wrong
      </div>
    </div>,
    document.body,
  );
}

export default Error;
