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


    </>
  );
}

export default BankOptionsManager;
