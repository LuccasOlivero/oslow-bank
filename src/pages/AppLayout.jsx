import { memo } from "react";

import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
  faMoneyBillTransfer,
  faLandmark,
  faQrcode,
  faUnlockKeyhole,
  faCircleQuestion,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import { useAccount } from "../contexts/AccountContext";
import { useAuth } from "../contexts/AuthContext";

import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import Movement from "../components/Movement";
import OptionBank from "../components/OptionBank";
import BankOptionsManager from "../components/BankOptionsManager";

const AppLayout = memo(function AppLayout() {
  const { user, isLoading } = useAuth();
  const {
    setOptionsActive,
    userBalance,
    typeOfOperation,
    setTypeOfOperation,
    selectedCurrency,
    setSelectedCurrency,
    activeOption,
    setActiveOption,
    movements,
  } = useAccount();

  function handleCurrencyChange(e) {
    setSelectedCurrency(() => e.target.value);
  }

  function handleClickOperation(type) {
    setOptionsActive(() => true);
    const stringType = type;
    setTypeOfOperation(stringType);
  }

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <>
     
    </>
  );
});
export default AppLayout;
