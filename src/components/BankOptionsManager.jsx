import { useAccount } from "../contexts/AccountContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BankOptionsManager() {
  const { optionsActive, depositAccount, setOptionsActive } = useAccount();
  const [input, setInput] = useState(0);

  function handleDeposit(e) {
    setInput(() => Number(e.target.value) + input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input > 0) depositAccount(input);
    setInput(0);
    setOptionsActive(false);
  }

  return (
    <form
      className={` ${
        optionsActive
          ? "w-full col-span-3 rounded-[3rem] shadow-xl py-8 px-12 z-[99] justify-between bg-white relative items-center flex h-[10rem]"
          : "h-2 w-full col-span-3"
      } duration-300`}
      onSubmit={(e) => handleSubmit(e)}
    >
      {optionsActive && (
        <>
          <div className="flex flex-col justify-between h-full">
            <p className="relative font-semibold text-4xl mr-4 text-gray-900">
              Amout
              <span className="absolute right-[4rem] bottom-[-.6rem]">
                <FontAwesomeIcon icon={faTurnDown} size="xs" />
              </span>
            </p>
            <input
              type="number"
              className=" h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
              onChange={(e) => handleDeposit(e)}
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <p className="relative font-semibold text-4xl mr-4 text-gray-900">
              Account
              <span className="absolute right-[2rem] bottom-[-.6rem]">
                <FontAwesomeIcon icon={faTurnDown} size="xs" />
              </span>
            </p>

            <input
              type="number"
              name=""
              className="h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none "
            />
          </div>

          <div className="flex flex-col justify-end h-full">
            <button className="w-[7rem] h-[2.5rem] bg-green-600 rounded-2xl text-white flex items-center justify-center text-base font-bold shadow-xl hover:bg-green-700 hover:shadow-2xl">
              Send
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default BankOptionsManager;
