import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../contexts/AccountContext";

function Movement({ movement }) {
  const { completeDate } = useAccount();
  return (
    <div className="flex h-[4rem] w-full items-center justify-between rounded-md bg-[#f2f2f2] px-6 py-2 max-sm:h-[5rem] max-sm:flex-col">
      <div className="flex max-sm:text-sm">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="green" size="xl" />
        <p className="ml-2 font-semibold text-gray-900 first-letter:uppercase ">
          {movement.type}
        </p>
      </div>

      <div className="flex flex-col items-center text-gray-900">
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

        <p className="text-xs font-light text-gray-900 max-sm:font-extralight">
          {completeDate}
        </p>
      </div>
    </div>
  );
}

export default Movement;
