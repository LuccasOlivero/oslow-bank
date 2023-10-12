import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../contexts/AccountContext";

function Movements({ operation, completeDate }) {
  const { movements } = useAccount();
  return (
    <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between">
      <div className="flex">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="green" size="xl" />
        <p className="text-gray-900 font-semibold ml-2">
          {movements["withdraw"] ? "Withdraw" : ""}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-900 font-bold ">- {operation}</p>

        <p className="text-gray-900 text-xs font-light">{completeDate}</p>
      </div>
    </div>
  );
}

export default Movements;
