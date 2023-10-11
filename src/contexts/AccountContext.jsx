import { createContext, useContext, useReducer, useState } from "react";

const AccountContext = createContext();

const initialState = {
  userBalance: {
    USD: 200,
    EUR: 100,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        userBalance: {
          ...state.userBalance,
          USD: state.userBalance.USD + action.payload,
        },
      };
    case "withdraw":
      return {
        ...state,
        userBalance: {
          ...state.userBalance,
          USD: state.userBalance.USD - action.payload,
        },
      };
    default:
      "Unknow action";
  }
}

function AccountProvider({ children }) {
  const [{ userBalance, operation, currency }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [optionsActive, setOptionsActive] = useState(false);
  const [typeOfOperation, setTypeOfOperation] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(230.5);
  const [activeOption, setActiveOption] = useState(null);

  function depositAccount(input) {
    if (input < 1) return;

    dispatch({ type: "deposit", payload: input });
  }

  function operationWithdraw(input) {
    console.log(input);
    if (input > userBalance) return;
    dispatch({ type: "withdraw", payload: input });
  }

  return (
    <AccountContext.Provider
      value={{
        dispatch,
        optionsActive,
        setOptionsActive,
        userBalance,
        setAmount,
        amount,
        depositAccount,
        typeOfOperation,
        setTypeOfOperation,
        operationWithdraw,
        operation,
        currency,
        selectedCurrency,
        setSelectedCurrency,
        activeOption,
        setActiveOption,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined)
    throw new Error("AccountContext was used outside AccountProvider");
  return context;
}

export { useAccount, AccountProvider };
