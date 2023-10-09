import { createContext, useContext, useReducer, useState } from "react";

const AccountContext = createContext();

const initialState = {
  userBalance: 230.5,
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, userBalance: state.userBalance + action.payload };
    default:
      "Unknow action";
  }
}

function AccountProvider({ children }) {
  const [{ userBalance }, dispath] = useReducer(reducer, initialState);
  const [optionsActive, setOptionsActive] = useState(true);
  const [amount, setAmount] = useState(230.5);

  function depositAccount(input) {
    dispath({ type: "deposit", payload: input });
  }

  return (
    <AccountContext.Provider
      value={{
        dispath,
        optionsActive,
        setOptionsActive,
        userBalance,
        setAmount,
        amount,
        depositAccount,
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
