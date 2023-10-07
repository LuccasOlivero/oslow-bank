import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar({ session = "Login" }) {
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

        <p className="font-semibold text-xl">{session}</p>
      </div>
    </nav>
  );
}

export default NavBar;
