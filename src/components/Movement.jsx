import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../contexts/AccountContext";

function Movement({ movement }) {
  const { completeDate } = useAccount();
  return (
    <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between max-sm:flex-col max-sm:h-[5rem]">
     
      </div>
    </div>
  );
}

export default Movement;
