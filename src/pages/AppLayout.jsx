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
      <main className="h-full w-full bg-[#f2f2f2]">
        {isLoading && <Loader />}
        <NavBar session={"Logout"} />

        <section className="relative flex h-full w-full justify-center bg-[#f2f2f2] px-6">
          <div className="my-[3rem] grid w-full max-w-[1300px] grid-cols-3 gap-6">
            <BankOptionsManager
              type={typeOfOperation}
              handleClickOperation={handleClickOperation}
            />

            <div className="relative col-span-3 flex w-full flex-col rounded-[3rem] bg-white px-12 py-8 shadow-2xl ">
              <h3 className="relative mb-6 text-4xl font-bold text-gray-900 max-sm:text-3xl">
                Movements
                <span className="absolute left-0 top-[2.5rem] h-[3px] w-[9rem] bg-green-600"></span>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                {movements.map((movement, index) => {
                  return (
                    <Movement
                      movement={movement}
                      key={index}
                      typeOfOperation={typeOfOperation}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
export default AppLayout;
