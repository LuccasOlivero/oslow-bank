import { useAccount } from "../contexts/AccountContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTurnDown,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function BankOptionsManager({ type, handleClickOperation }) {
  // Deconstructing values from context with custom hook
  const {
    optionsActive,
    depositAccount,
    setOptionsActive,
    operationWithdraw,
    userBalance,
    typeOfOperation,
    setActiveOption,
    requestLoan,
    loans,
    payLoan,
    transfer,
  } = useAccount();
  const [error, setError] = useState({ status: false, type: "" });
  const [inputAmount, setInputAmount] = useState(0);
  const [accNo, setAccNo] = useState([]);

  // taking input value from ui and setting into an state
  function handleDeposit(e) {
    const newValue = +e.target.value;
    setInputAmount(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "deposit") {
      if (inputAmount < 0)
        return setError({
          ...error,
          status: true,
          type: "Please enter a number greater than 0.",
        });

      if (inputAmount > 100000)
        return setError({
          ...error,
          status: true,
          type: "The maximum deposit amount is 100,000. Please try a lower amount.",
        });

      depositAccount(inputAmount, typeOfOperation);
    }

    if (type === "withdraw") {
      if (inputAmount > userBalance.USD)
        return setError({
          ...error,
          status: true,
          type: "Insufficient funds. You do not have enough balance to perform this operation.",
        });
      operationWithdraw(inputAmount, typeOfOperation);
    }

    if (type === "loan") {
      if (inputAmount > 10000)
        return setError({
          ...error,
          status: true,
          type: "The maximum allowable amount for this operation is 10,000. Please try a lower amount.",
        });

      if (inputAmount < 100)
        return setError({
          ...error,
          status: true,
          type: "The minimum allowable amount for this operation is 100. Please enter a higher amount.",
        });
      requestLoan(inputAmount, typeOfOperation);
    }

    if (type === "transfer") {
      if (accNo.length < 9)
        return setError({
          ...error,
          status: true,
          type: "Invalid account number. Please enter a valid 9-digit account number.",
        });

      if (inputAmount > userBalance.USD)
        return setError({
          ...error,
          status: true,
          type: "Insufficient funds. You do not have enough balance to perform this operation.",
        });
      transfer(inputAmount, typeOfOperation);
    }

    // restoring some default values
    setInputAmount(0);
    setOptionsActive(false);
    setActiveOption(null);
    setAccNo([]);
  }

  function handleApplyLoan() {
    setActiveOption(6);
    handleClickOperation("loan");
  }

  function handlePayLoan() {
    if (loans === null)
      return setError({
        ...error,
        status: true,
        type: "You do not have an active loan at the moment.",
      });
    payLoan(typeOfOperation);
  }

  function handleInputAccNo(e) {
    const accountNumberFromUser = +e.target.value;
    setAccNo(() => [...accNo, accountNumberFromUser]);
  }

  // handling erros into a BankOptions
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
      {/* error mensaje */}
      <div
        className={`${
          error
            ? "h-[2rem] w-full col-span-3 bg-red-500 bottom-9 flex justify-center items-center text-white font-semibold uppercase rounded-2xl"
            : "h-0 w-full col-span-3"
        } duration-300`}
      >
        {error ? error.type : null}
      </div>

      {/* Form to an operation  */}
      <div
        className={` ${
          optionsActive
            ? "w-full col-span-3 rounded-[3rem] shadow-xl py-8 px-12 z-[99] bg-white h-[13rem]"
            : "h-0 w-full col-span-3"
        } duration-300`}
      >
        {optionsActive && (
          <>
            {typeOfOperation === "qr" ? (
              <div className="h-full flex justify-center items-center relative">
                <span className="bg-black w-full h-[3px] relative">
                  <span className="absolute bg-black h-[2rem] w-[3px] right-0 top-[-1rem]"></span>
                </span>
                <a
                  href="https://github.com/LuccasOlivero"
                  className="w-[24rem] mx-9 h-full"
                >
                  <img
                    src="./qr.png"
                    alt="qr.png"
                    className=" h-full w-full block "
                  />
                </a>
                <span className="bg-black w-full h-[3px] relative">
                  <span className="absolute bg-black h-[2rem] w-[3px] left-0 top-[-1rem]"></span>
                </span>
              </div>
            ) : (
              <>
                {typeOfOperation === "invest" ||
                typeOfOperation === "insurance" ||
                typeOfOperation === "help" ||
                typeOfOperation === "more" ? (
                  <>
                    <div className="flex justify-between">
                      <h2 className="relative text-4xl items-start pb-3 first-letter:uppercase font-semibold">
                        Oops
                        <span className="absolute w-[3rem] h-[3px] bg-green-600 left-0 top-[2.5rem]"></span>
                      </h2>

                      <span
                        className="font-bold text-4xl"
                        onClick={() => {
                          setOptionsActive(false);
                          setActiveOption(null);
                        }}
                      >
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                      </span>
                    </div>

                    <div className="flex justify-center items-center">
                      <h3 className="text-3xl">
                        Currently, <strong>{typeOfOperation}</strong> is under
                        maintenance, available soon.
                      </h3>
                    </div>
                  </>
                ) : (
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
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
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
                          {/* types of operations from user */}
                          {typeOfOperation === "loan" ? "Loan amount" : ""}
                          {typeOfOperation === "deposit" ? "Amount" : ""}
                          {typeOfOperation === "withdraw" ? "Withdraw" : ""}
                          {typeOfOperation === "payments"
                            ? loans === null
                              ? "You have no outstanding loans"
                              : "You have pay"
                            : ""}
                          {typeOfOperation === "transfer" ? "Amount" : ""}
                        </p>

                        {typeOfOperation === "payments" ? (
                          <div className="flex justify-center">
                            {loans === null ? (
                              <button
                                className=" h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none font-semibold flex justify-center items-center"
                                onClick={() => handleApplyLoan()}
                              >
                                Apply for a loan
                              </button>
                            ) : (
                              <span className=" h-[2.5rem] w-[13rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none font-bold flex justify-center items-center">
                                $ {loans} USD
                              </span>
                            )}
                          </div>
                        ) : (
                          <input
                            type="number"
                            className=" h-[2.5rem] outline-none bg-[#f2f2f2] shadow-xl rounded-xl px-6 appearance-none"
                            onChange={handleDeposit}
                            placeholder="Ex: 100"
                          />
                        )}
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
                            placeholder="Ex: 425426649"
                            onChange={(e) => handleInputAccNo(e)}
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
                        {typeOfOperation === "payments" ? (
                          <button
                            className="w-[7rem] h-[2.5rem] bg-green-600 rounded-2xl text-white flex items-center justify-center text-base font-bold shadow-xl hover:bg-green-700 hover:shadow-2xl"
                            onClick={handlePayLoan}
                          >
                            Pay
                          </button>
                        ) : (
                          <button className="w-[7rem] h-[2.5rem] bg-green-600 rounded-2xl text-white flex items-center justify-center text-base font-bold shadow-xl hover:bg-green-700 hover:shadow-2xl">
                            Send
                          </button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

// config eslit to avoid some props errors
BankOptionsManager.propTypes = {
  type: PropTypes.string.isRequired,
  handleClickOperation: PropTypes.func.isRequired,
};

export default BankOptionsManager;
