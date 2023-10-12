import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

const AccountContext = createContext();

const initialState = {
  userBalance: {
    USD: 200,
    EUR: 100,
  },
  movements: [
    {
      withdraw: 30,
      deposit: 60,
      transfer: 90,
    },
  ],
  loans: null,
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
    case "loan":
      return {
        ...state,
        loans: action.payload,
        userBalance: {
          ...state.userBalance,
          USD:
            state.loans === null
              ? state.userBalance.USD + action.payload
              : state.userBalance.USD,
        },
      };
    default:
      "Unknow action";
  }
}

function AccountProvider({ children }) {
  const [{ userBalance, movements }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // active menu options of type operations
  const [optionsActive, setOptionsActive] = useState(false);
  const [typeOfOperation, setTypeOfOperation] = useState("");

  // type of currency and input from user
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState(230.5);

  // setting active operation
  const [activeOption, setActiveOption] = useState(null);

  // curr date of each movement
  const [completeDate, setCompleteDate] = useState("");
  useEffect(() => {
    const currDate = new Date();

    const day = currDate.getDate().toString().padStart(2, "0");
    const mounth = (currDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currDate.getFullYear();

    const date = `${day}/${mounth}/${year}`;
    setCompleteDate(date);
  }, [movements]);

  function depositAccount(input) {
    if (input < 1) return;
    dispatch({ type: "deposit", payload: input });
  }

  function operationWithdraw(input) {
    if (input > userBalance) return;
    dispatch({ type: "withdraw", payload: input });
  }

  function requestLoan(input) {
    if (input < 10000) dispatch({ type: "loan", payload: input });
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
        selectedCurrency,
        setSelectedCurrency,
        activeOption,
        setActiveOption,
        requestLoan,
        movements,
        completeDate,
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

AccountProvider.propTypes = {
  children: PropTypes.string.isRequired, // Puedes reemplazar 'string' con el tipo de dato adecuado
};

export { useAccount, AccountProvider };
