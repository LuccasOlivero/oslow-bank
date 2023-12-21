import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        className={`test absolute left-0 z-[200] h-full w-[38%] bg-green-600 p-12 ${active} top-0 flex flex-col justify-between overflow-hidden transition-all ease-in max-sm:px-6`}
      >
        <div
          className=" flex w-full cursor-pointer justify-end"
          onClick={() => setActive("translate-x-[-100%]")}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <ul className="">
            <li
              className="mb-6 text-2xl font-semibold text-white"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className="mb-6 text-2xl font-semibold text-white"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">About</NavLink>
            </li>
            <li
              className="mb-6 text-2xl font-semibold text-white"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Schedule</NavLink>
            </li>
            <li
              className="mb-6 text-2xl font-semibold text-white"
              onClick={() => setActive("translate-x-[-100%]")}
            >
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="relative flex w-full flex-col items-start">
          <h3 className="pb-3 text-5xl text-[2rem] font-bold text-white max-sm:text-2xl">
            Contact Info
          </h3>
          <p className="cursor-pointer pb-1 text-xl font-light text-gray-200 duration-200 ease-in hover:text-[#ff0336]">
            59 Street, House Newyork City
          </p>
          <p className="cursor-pointer pb-1 text-xl font-light text-gray-200 duration-200 ease-in hover:text-[#ff0336]">
            +123-678800090
          </p>
          <p className="cursor-pointer text-xl font-light text-gray-200 duration-200 ease-in hover:text-[#ff0336]">
            osloBank@gmail.com
          </p>
        </div>
      </section>
      <div
        className={`absolute z-[199] h-full w-full bg-gray-600 bg-opacity-25 transition-all ease-in ${active} top-0`}
        onClick={() => setActive("translate-x-[-100%]")}
      ></div>
    </>
  );
}

export default SideBar;
