import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Card({ title, icon }) {
  return (
    <Link
      to="/login"
      className="flex h-[12rem] w-[8rem] flex-col items-center justify-between rounded-3xl bg-white p-5 shadow-lg transition-all duration-300 ease-in hover:shadow-2xl max-xl:w-[6rem] max-lg:h-[10rem] max-lg:w-[8.5rem] max-md:w-[5rem] max-md:p-3"
    >
      <div className="grid h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#f2f2f2] shadow-lg">
        <FontAwesomeIcon icon={icon} color="#059669" size="sm" />
      </div>
      <h3 className="text-xs font-bold text-gray-900 ">{title}</h3>
      <span className="flex h-[2rem] w-full items-center justify-center rounded-3xl bg-gray-900 text-sm font-semibold transition-all duration-200 ease-in hover:bg-green-700">
        more
      </span>
    </Link>
  );
}

export default Card;
