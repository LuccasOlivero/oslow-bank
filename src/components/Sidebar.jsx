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
  return <></>;
}

export default SideBar;
