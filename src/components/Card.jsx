import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ title, icon }) {
  return (
    <div className="w-[9rem] h-[12rem] bg-white rounded-3xl flex flex-col justify-between items-center p-5 shadow-lg hover:shadow-2xl transition-all ease-in duration-300">
      <div className="rounded-full bg-[#f2f2f2] w-[5rem] h-[5rem] flex justify-center items-center shadow-lg">
        <FontAwesomeIcon icon={icon} color="#059669" />
      </div>
      <h3 className="font-bold text-xs text-gray-900">{title}</h3>
      <span className="bg-gray-900 text-sm w-full h-[2rem] rounded-3xl flex justify-center items-center font-bold hover:bg-green-700 transition-all ease-in duration-200">
        see more
      </span>
    </div>
  );
}

export default Card;
