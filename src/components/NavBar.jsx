import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SideBar from "./Sidebar";
import { useCallback } from "react";

function NavBar({ session = "Login", setActive, active }) {
  const { logout } = useAuth();

  const handleClick = useCallback(
    function handleClick() {
      logout();
    },
    [logout]
  );

  const location = useLocation();
  return (
    <>
      {active && <SideBar setActive={setActive} active={active} />}
      <nav className="flex justify-center w-full h-[4rem] px-12 z-[500]">
        <div className="flex justify-between items-center w-full h-full  max-w-[1300px]">
          <span onClick={() => setActive("translate-x-0")}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </span>

          <NavLink className="h-[3rem]" to="/">
            <img
              src="./oslo.png"
              alt="oslowIcon"
              className="w-full text-center h-full block"
            />
          </NavLink>

          <NavLink
            to={location.pathname === "/app" ? "/" : "/login"}
            className="font-semibold text-xl max-lg:text-sm"
            onClick={handleClick}
          >
            {session}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
