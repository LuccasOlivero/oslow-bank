import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Card({ title, icon }) {
  return (
    <Link
      to="/login"
      className="w-[8rem] h-[12rem] bg-white rounded-3xl flex flex-col justify-between items-center p-5 shadow-lg hover:shadow-2xl transition-all ease-in duration-300 max-xl:w-[6rem] max-md:w-[5rem] max-md:p-3 max-lg:h-[10rem] max-lg:w-[8.5rem]"
    >
      <div className="grid rounded-full bg-[#f2f2f2] w-[4rem] h-[4rem] justify-center items-center shadow-lg">
        <FontAwesomeIcon icon={icon} color="#059669" size="sm" />
      </div>

      <h3 className="font-bold text-xs text-gray-900 ">{title}</h3>
      <span className="bg-gray-900 text-sm w-full h-[2rem] rounded-3xl flex justify-center items-center font-semibold hover:bg-green-700 transition-all ease-in duration-200">
        more
      </span>
    </Link>
  );
}

export default Card;
