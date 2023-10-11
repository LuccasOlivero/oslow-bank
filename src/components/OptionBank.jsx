import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OptionBank({ type, icon, isActive, onClick }) {
  return (
    <div
      className={`w-[6rem] h-[6rem] ${
        isActive ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } rounded-3xl flex flex-col justify-between items-center p-5 shadow-lg hover:shadow-2xl transition-all ease-in duration-300 cursor-pointer `}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} color="#059669" />
      <p className="font-bold text-base ">{type}</p>
    </div>
  );
}

export default OptionBank;
