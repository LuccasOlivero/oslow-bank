import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OptionBank({ type, icon }) {
  return (
    <div className="w-[6rem] h-[6rem] bg-white rounded-3xl flex flex-col justify-between items-center p-5 shadow-lg hover:shadow-2xl transition-all ease-in duration-300 cursor-pointer">
      <FontAwesomeIcon icon={icon} color="#059669" />
      <p className="font-bold text-base text-gray-900">{type}</p>
    </div>
  );
}

export default OptionBank;
