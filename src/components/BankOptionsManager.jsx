import { useAccount } from "../contexts/AccountContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BankOptionsManager({ type }) {
  const {
    optionsActive,
    depositAccount,
    setOptionsActive,
    operationWithdraw,
    userBalance,
    // operation,
  } = useAccount();
  const [inputAmount, setInputAmount] = useState(0);
  const [accNo, setAccNo] = useState("");
  // const [test] = useState([]);

  function handleDeposit(e) {
    setInputAmount(() => Number(e.target.value) + inputAmount);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (accNo.length <= 7) return;
    if (inputAmount > 0 && type === "deposit") depositAccount(inputAmount);

    if (inputAmount <= userBalance && type === "withdraw")
      operationWithdraw(inputAmount);

    setInputAmount(0);
    setOptionsActive(false);
    setAccNo(0);
  }

  function handleInputAccNo(e) {
    e.preventDefault();
    const accInput = e.target.value;
    setAccNo(accInput);
  }

  return (
    <form
      className={` ${
        optionsActive
          ? "w-full col-span-3 rounded-[3rem] shadow-xl py-8 px-12 z-[99] justify-evenly bg-white relative items-center flex h-[10rem]"
          : "h-2 w-full col-span-3"
      } duration-300`}
      onSubmit={(e) => handleSubmit(e)}
    >
      {optionsActive && (
        <>
          <div className="flex flex-col justify-between h-full">
            <p className="relative font-semibold text-4xl mr-4 text-gray-900">
              Amout
              <span className="absolute right-[4.3rem] bottom-[-.6rem]">
                <FontAwesomeIcon icon={faTurnDown} size="xs" />
              </span>
            </p>
            <input
              type="number"
              className=" h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
              onChange={(e) => handleDeposit(e)}
              placeholder="Ex: 100"
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <p className="relative font-semibold text-4xl mr-4 text-gray-900">
              Currency
              <span className="absolute right-[2.4rem] bottom-[-.6rem]">
                <FontAwesomeIcon icon={faTurnDown} size="xs" />
              </span>
            </p>

            <input
              type="number"
              name=""
              className="h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
              placeholder="Ex: USD/EUR"
            />
          </div>

          {type === "deposit" ? (
            <div className="flex flex-col justify-between h-full">
              <p className="relative font-semibold text-4xl mr-4 text-gray-900">
                Acct No.
                <span className="absolute right-[3rem] bottom-[-.6rem]">
                  <FontAwesomeIcon icon={faTurnDown} size="xs" />
                </span>
              </p>

              <input
                type="number"
                name=""
                className="h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
                placeholder="Ex: 1234567890"
                onChange={(e) => handleInputAccNo(e)}
              />
            </div>
          ) : null}

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
