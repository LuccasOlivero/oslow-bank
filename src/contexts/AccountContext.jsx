import { createContext, useContext, useReducer } from "react";

const AccountContext = createContext();

const initialState = {
  deposit: 0,
};

function reducer(state, action) {}

function AccountProvider({ children }) {
  const [state, dispath] = useReducer(reducer, initialState);
  const test = "it works";
  return (
    <AccountContext.Provider value={{ test }}>
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
