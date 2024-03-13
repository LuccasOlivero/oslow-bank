import { useCallback } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../contexts/AuthContext";
import SideBar from "./Sidebar";

function NavBar({ session = "Login", setActive, active }) {
  const { logout } = useAuth();
  const location = useLocation();

  const handleClick = useCallback(
    function handleClick() {
      logout();
    },
    [logout],
  );

  return (
    <>
      {active && <SideBar setActive={setActive} active={active} />}
      <nav className="z-[500] flex h-[4rem] w-full justify-center px-12">
        <div className="flex h-full w-full max-w-[1300px] items-center  justify-between">
          <span onClick={() => setActive("translate-x-0")}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </span>

          <NavLink className="h-[3rem]" to="/">
            <img
              src="./oslo.png"
              alt="oslowIcon"
              className="block h-full w-full text-center"
            />
          </NavLink>

          <NavLink
            to={location.pathname === "/app" ? "/" : "/login"}
            className="text-xl font-semibold max-lg:text-sm"
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
