import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Card({ title, icon }) {
  return (
    <Link
      to="/login"
      className="flex h-[12rem] w-[8rem] flex-col items-center justify-between rounded-3xl bg-white p-5 shadow-lg transition-all duration-300 ease-in hover:shadow-2xl max-xl:w-[6rem] max-lg:h-[10rem] max-lg:w-[8.5rem] max-md:w-[5rem] max-md:p-3"
    ></Link>
  );
}

export default Card;
