import { useAccount } from "../contexts/AccountContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function BankOptionsManager({ type }) {
  const {
    optionsActive,
    depositAccount,
    setOptionsActive,
    operationWithdraw,
    userBalance,
    typeOfOperation,
    setActiveOption,
  } = useAccount();
  const [error, setError] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);

  function handleDeposit(e) {
    const newValue = +e.target.value;
    setInputAmount(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "deposit") {
      if (inputAmount > 0) depositAccount(inputAmount);
    }

    if (type === "withdraw") {
      if (inputAmount < userBalance.USD) operationWithdraw(inputAmount);
    }

    setInputAmount(0);
    setOptionsActive(false);
    setActiveOption(null);
  }

  useEffect(() => {
    if (error) {
      // Si error está en true, espera 3 segundos y luego cambia a false
      const timeoutId = setTimeout(() => {
        setError(false);
      }, 3000); // 3000 milisegundos = 3 segundos

      // Limpia el timeout cuando el componente se desmonta o cuando error cambia
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <>
      <div
        className={`${
          error
            ? "h-[2rem] w-full col-span-3 bg-red-500 bottom-9 flex justify-center items-center text-white font-semibold uppercase rounded-2xl"
            : "h-0 w-full col-span-3"
        } duration-300`}
      >
        {error ? "All fields are required." : null}
      </div>

      <div
        className={` ${
          optionsActive
            ? "w-full col-span-3 rounded-[3rem] shadow-xl py-8 px-12 z-[99] bg-white h-[13rem]"
            : "h-0 w-full col-span-3"
        } duration-300`}
      >
        {optionsActive && (
          <>
            <div className="flex justify-between">
              <h2 className="relative text-4xl items-start pb-3 first-letter:uppercase font-semibold">
                {typeOfOperation}
                <span className="absolute w-[6rem] h-[3px] bg-green-600 left-0 top-[2.5rem]"></span>
              </h2>

              <span
                className="font-bold text-4xl"
                onClick={() => {
                  setOptionsActive(false);
                  setActiveOption(null);
                }}
              >
                X
              </span>
            </div>

            <form
              className={`${
                optionsActive
                  ? "flex justify-evenly relative items-end"
                  : "relative top-0"
              }`}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex flex-col justify-between h-full">
                <p className="relative font-semibold text-4xl mr-4 text-gray-900 pb-3">
                  Amout
                  <span className="absolute right-[4.3rem] bottom-0">
                    <FontAwesomeIcon icon={faTurnDown} size="xs" />
                  </span>
                </p>
                <input
                  type="number"
                  className=" h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
                  onChange={handleDeposit}
                  placeholder="Ex: 100"
                />
              </div>

              {type === "transfer" ? (
                <div className="flex flex-col justify-between h-full">
                  <p className="relative font-semibold text-4xl mr-4 text-gray-900 pb-3">
                    Acct No.
                    <span className="absolute right-[3rem] bottom-0">
                      <FontAwesomeIcon icon={faTurnDown} size="xs" />
                    </span>
                  </p>

                  <input
                    type="number"
                    name=""
                    className="h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
                    placeholder="Ex: 1234567890"
                    // onChange={(e) => handleInputAccNo(e)}
                  />
                </div>
              ) : null}

              <div className="flex flex-col justify-between h-full">
                <p className="relative font-semibold text-4xl mr-4 text-gray-900 pb-3">
                  Currency
                  <span className="absolute right-[-1.8rem] bottom-0">
                    <FontAwesomeIcon icon={faTurnDown} size="xs" />
                  </span>
                </p>

                <select
                  className="text-base text-white uppercase w-full rounded-xl bg-green-600 px-6 outline-none h-[2.5rem] text-center shadow-lg"
                  disabled={true}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div className="flex flex-col justify-end h-full">
                <button className="w-[7rem] h-[2.5rem] bg-green-600 rounded-2xl text-white flex items-center justify-center text-base font-bold shadow-xl hover:bg-green-700 hover:shadow-2xl">
                  Send
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default BankOptionsManager;
