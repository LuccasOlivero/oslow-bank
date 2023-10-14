import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function SideBar({ setActive, active }) {
  //if sideBar is active, Disable scrolling
  useEffect(() => {
    const body = document.body;
    if (active === "translate-x-0") {
      body.style.overflow = "hidden";
    }

    return () => (body.style.overflow = "visible");
  }, [setActive, active]);
  return (
    <>
      <section
        className={`bg-green-600 w-[38%] h-full z-[200] absolute p-12 left-0 test ${active} transition-all ease-in flex flex-col justify-between top-0 overflow-hidden max-sm:px-6`}
      >
        <div
          className=" w-full flex justify-end cursor-pointer"
          onClick={() => setActive("translate-x-[-100%]")}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <ul className="">
            <li
              className="text-white text-2xl font-semibold mb-6"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="text-white text-2xl font-semibold mb-6"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">About</NavLink>
            </li>
            <li
              className="text-white text-2xl font-semibold mb-6"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Schedule</NavLink>
            </li>
            <li
              className="text-white text-2xl font-semibold mb-6"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start relative w-full">
          <h3 className="text-5xl text-white text-[2rem] font-bold pb-3 max-sm:text-2xl">
            Contact Info
          </h3>
          <p className="text-xl font-light text-gray-200 hover:text-[#ff0336] cursor-pointer ease-in duration-200 pb-1">
            59 Street, House Newyork City
          </p>
          <p className="text-xl font-light text-gray-200 hover:text-[#ff0336] cursor-pointer ease-in duration-200 pb-1">
            +123-678800090
          </p>
          <p className="text-xl font-light text-gray-200 hover:text-[#ff0336] cursor-pointer ease-in duration-200">
            osloBank@gmail.com
          </p>
        </div>
      </section>
      <div
        className={`w-full bg-gray-600 bg-opacity-25 h-full z-[199] absolute transition-all ease-in ${active} top-0`}
        onClick={() => setActive("translate-x-[-100%]")}
      ></div>
    </>
  );
}

export default SideBar;
