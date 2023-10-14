import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function NavBar({ session = "Login" }) {
  const { logout } = useAuth();

  function handleClick() {
    logout();
  }

  const location = useLocation();
  return (
    <nav className="flex justify-center w-full h-[4rem] px-12">
      <div className="flex justify-between items-center w-full h-full  max-w-[1300px]">
        <FontAwesomeIcon icon={faBars} size="xl" />

        <NavLink className="h-[3rem]" to="/">
          <img
            src="./oslo.png"
            alt="oslowIcon"
            className="w-full text-center h-full block"
          />
        </NavLink>

        <NavLink
          to={location.pathname === "/app" ? "/" : "/login"}
          className="font-semibold text-xl"
          onClick={handleClick}
        >
          {session}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
