import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useAccount } from "../contexts/AccountContext";

function BankOptionsManager({ type, handleClickOperation }) {
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
      if (inputAmount > userBalance.USD || inputAmount <= 0)
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

      if (inputAmount > userBalance.USD || inputAmount <= 0)
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

  // if error is true, set mensaje 3 seconds then remove it
  useEffect(() => {
    if (error.status === true) {
      const timeoutId = setTimeout(() => {
        setError(() => !error);
      }, 2500);

      // clean timeout when component change or unmount
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <>
      {/* error mensaje */}
      {error.status && (
        <div
          className={`${
            error.status
              ? "bottom-9 col-span-3 flex h-[2rem] w-full items-center justify-center rounded-2xl bg-red-500 font-semibold uppercase text-white"
              : "col-span-3 h-0 w-full"
          } duration-300`}
        >
          {error.status ? error.type : null}
        </div>
      )}

      {/* Form to an operation  */}
      <div
        className={` ${
          optionsActive
            ? "z-[99] col-span-3 h-[13rem] w-full rounded-[3rem] bg-white px-12 py-8 shadow-xl max-md:flex max-md:h-[21rem] max-md:flex-col max-md:justify-evenly max-md:px-8 max-md:py-3"
            : "col-span-3 h-0 w-full"
        } duration-300`}
      >
        {optionsActive && (
          <>
            {typeOfOperation === "qr" ? (
              <div className="relative flex h-full items-center justify-center">
                <span className="relative h-[3px] w-full bg-black max-md:hidden">
                  <span className="absolute right-0 top-[-1rem] h-[2rem] w-[3px] bg-black max-md:hidden"></span>
                </span>
                <a
                  href="https://github.com/LuccasOlivero"
                  className="mx-9 h-full w-[24rem] max-md:w-full"
                >
                  <img
                    src="./qr.png"
                    alt="qr.png"
                    className=" block h-full w-full "
                  />
                </a>
                <span className="relative h-[3px] w-full bg-black max-md:hidden">
                  <span className="absolute left-0 top-[-1rem] h-[2rem] w-[3px] bg-black max-md:hidden"></span>
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
                      <h2 className="relative items-start pb-3 text-4xl font-semibold first-letter:uppercase">
                        Oops
                        <span className="absolute left-0 top-[2.5rem] h-[3px] w-[3rem] bg-green-600 max-md:w-[2.5rem]"></span>
                      </h2>

                      <span
                        className="text-4xl font-bold"
                        onClick={() => {
                          setOptionsActive(false);
                          setActiveOption(null);
                        }}
                      >
                        <FontAwesomeIcon icon={faCircleArrowLeft} />
                      </span>
                    </div>

                    <div className="flex items-center justify-center">
                      <h3 className="text-3xl">
                        Currently, <strong>{typeOfOperation}</strong> is under
                        maintenance, available soon.
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <h2 className="relative items-start pb-3 text-4xl font-semibold first-letter:uppercase">
                        {typeOfOperation}
                        <span className="absolute left-0 top-[2.5rem] h-[3px] w-[6rem] bg-green-600 max-md:w-[3rem]"></span>
                      </h2>

                      <span
                        className="text-4xl font-bold"
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
                          ? "relative flex items-end justify-evenly max-md:grid max-md:w-full max-md:grid-cols-2"
                          : "relative top-0"
                      }`}
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="flex h-full flex-col justify-between ">
                        <p className="relative mr-4 pb-3 text-4xl font-semibold text-gray-900 max-md:text-2xl">
                          {/* types of operations from user */}
                          {typeOfOperation === "loan" ? "Loan amount" : ""}
                          {typeOfOperation === "deposit" ? "Amount" : ""}
                          {typeOfOperation === "withdraw" ? "Withdraw" : ""}
                          {typeOfOperation === "payments"
                            ? loans === null
                              ? "You're loan-free"
                              : "You have pay"
                            : ""}
                          {typeOfOperation === "transfer" ? "Amount" : ""}
                        </p>
                        {typeOfOperation === "payments" ? (
                          <div className="flex justify-center">
                            {loans === null ? (
                              <button
                                className=" flex h-[2.5rem] appearance-none items-center justify-center rounded-xl bg-[#f2f2f2] px-6 font-semibold shadow-xl outline-none max-md:w-full"
                                onClick={() => handleApplyLoan()}
                              >
                                Try Loan
                              </button>
                            ) : (
                              <span className=" flex h-[2.5rem] w-[13rem] appearance-none items-center justify-center rounded-xl bg-[#f2f2f2] px-6 font-bold shadow-xl outline-none">
                                $ {loans} USD
                              </span>
                            )}
                          </div>
                        ) : (
                          <input
                            type="number"
                            className=" h-[2.5rem] appearance-none rounded-xl bg-[#f2f2f2] px-6 shadow-xl outline-none"
                            onChange={handleDeposit}
                            placeholder="Ex: 100"
                          />
                        )}
                      </div>

                      {type === "transfer" ? (
                        <div className="flex h-full flex-col justify-between">
                          <p className="relative mr-4 pb-3 text-4xl font-semibold text-gray-900 max-md:text-2xl">
                            Acct.No.
                          </p>

                          <input
                            type="number"
                            name=""
                            className="h-[2.5rem] appearance-none rounded-xl bg-[#f2f2f2] px-6 shadow-xl outline-none "
                            placeholder="Ex: 425426649"
                            onChange={(e) => handleInputAccNo(e)}
                          />
                        </div>
                      ) : null}
                      <div className="flex h-full flex-col justify-between">
                        <p className="relative mr-4 pb-3 text-4xl font-semibold text-gray-900 max-md:text-2xl">
                          Currency
                        </p>

                        <select
                          className="h-[2.5rem] w-full rounded-xl bg-green-600 px-6 text-center text-base uppercase text-white shadow-lg outline-none"
                          disabled={true}
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                        </select>
                      </div>

                      <div className="relative flex h-full flex-col justify-end ">
                        {typeOfOperation === "payments" ? (
                          <button
                            className="flex h-[2.5rem] w-[7rem] items-center justify-center rounded-2xl bg-green-600 text-base font-bold text-white shadow-xl hover:bg-green-700 hover:shadow-2xl max-md:mt-[1rem] max-md:w-full"
                            onClick={handlePayLoan}
                          >
                            Pay
                          </button>
                        ) : (
                          <button className="flex h-[2.5rem] w-[7rem] items-center justify-center rounded-2xl bg-green-600 text-base font-bold text-white shadow-xl hover:bg-green-700 hover:shadow-2xl max-md:mt-[1rem] max-md:w-full">
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

export default BankOptionsManager;
