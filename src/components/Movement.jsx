import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../contexts/AccountContext";

function Movement({ movement }) {
  const { completeDate } = useAccount();
  return (
    <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between max-sm:flex-col max-sm:h-[5rem]">
      <div className="flex max-sm:text-sm">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="green" size="xl" />
        <p className="text-gray-900 font-semibold ml-2 first-letter:uppercase ">
          {movement.type}
        </p>
      </div>

      <div className="text-gray-900 flex flex-col items-center">
        <p
          className={`font-bold max-sm:text-sm
          ${movement.type === "deposit" ? "text-green-600" : ""} 
          ${movement.type === "loan" ? "text-green-600" : ""}`}
        >
          {movement.type === "deposit" ? "+" : ""}
          {movement.type === "withdraw" ? "-" : ""}
          {movement.type === "payments" ? "-" : ""}
          {movement.type === "loan" ? "+" : ""}
          {movement.type === "transfer" ? "-" : ""} $ {movement.balance} USD
        </p>

        <p className="text-gray-900 text-xs max-sm:font-extralight font-light">
          {completeDate}
        </p>
      </div>
    </div>
  );
}

export default Movement;
