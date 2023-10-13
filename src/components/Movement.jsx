import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../contexts/AccountContext";
import PropTypes from "prop-types";

function Movement({ movement }) {
  const { completeDate } = useAccount();
  return (
    <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between">
      <div className="flex">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="green" size="xl" />
        <p className="text-gray-900 font-semibold ml-2">{movement.type}</p>
      </div>
      <div className="text-gray-900 flex flex-col items-center">
        <p
          className={`font-bold 
          ${movement.type === "deposit" ? "text-green-600" : ""} 
          ${movement.type === "loan" ? "text-green-600" : ""}`}
        >
          {movement.type === "deposit" ? "+" : ""}
          {movement.type === "withdraw" ? "-" : ""}
          {movement.type === "transfer" ? "-" : ""} $ {movement.balance} USD
        </p>

        <p className="text-gray-900 text-xs font-light">{completeDate}</p>
      </div>
    </div>
  );
}

Movement.propTypes = {
  movement: PropTypes.object.isRequired,
};

export default Movement;
