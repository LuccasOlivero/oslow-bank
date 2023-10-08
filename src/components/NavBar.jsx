import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

function NavBar({ session = "Login" }) {
  const currLocation = useLocation().pathname;
  console.log(currLocation);
  return (
    <nav className="flex justify-center w-full h-[4rem]">
      <div className="flex justify-between items-center w-full h-full  max-w-[1300px]">
        <FontAwesomeIcon icon={faBars} size="xl" />

        <picture className="h-[3rem]">
          <img
            src="./oslo.png"
            alt="oslowIcon"
            className="w-full text-center h-full block"
          />
        </picture>

        <NavLink
          to={`${currLocation === "/bank" ? "/" : "/bank"}`}
          className="font-semibold text-xl"
        >
          {session}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
