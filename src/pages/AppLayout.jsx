import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
  faMoneyBillTransfer,
  faMoneyCheck,
  faRightLeft,
  faLandmark,
  faQrcode,
  faUnlockKeyhole,
  faCircleQuestion,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import OptionBank from "../components/OptionBank";
import { useAccount } from "../contexts/AccountContext";
import BankOptionsManager from "../components/BankOptionsManager";
import { useAuth } from "../contexts/AuthContext";

function AppLayout() {
  const { user } = useAuth();
  const {
    setOptionsActive,
    userBalance,
    typeOfOperation,
    setTypeOfOperation,
    selectedCurrency,
    setSelectedCurrency,
  } = useAccount();

  function handleCurrencyChange(e) {
    setSelectedCurrency(() => e.target.value);
  }

  function handleClickOperation(type) {
    setOptionsActive(() => true);
    const stringType = type;
    setTypeOfOperation(stringType);
  }

  return (
    <>
      <main className="h-full w-full bg-[#f2f2f2]">
        <NavBar session={"Logout"} />

        <section className="flex justify-center relative h-full w-full bg-[#f2f2f2] ">
          <div className="grid grid-cols-3 gap-6 max-w-[1300px] my-[3rem] w-full">
            <BankOptionsManager type={typeOfOperation} />
            <div className="bg-gray-900 w-full h-full relative rounded-[3rem] text-white py-8 px-12 flex flex-col justify-between items-center shadow-2xl row-span-2">
              <h3 className="relative text-4xl font-bold">
                👋 Welcome
                <br />
                <span className="text-green-600">{user.name}</span>
              </h3>
              <p className="text-6xl ">
                {userBalance[selectedCurrency]},00 <br /> {selectedCurrency}
              </p>
              <select
                className="text-base text-white uppercase w-full rounded-xl bg-green-600 px-6 outline-none h-[2.5rem] text-center"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="bg-green-600 w-full h-full relative rounded-[3rem] text-white py-8 px-12 flex flex-col justify-between shadow-2xl col-span-2 row-span-2 mb-3 items-start">
              <h3 className="text-4xl font-bold">
                How can we assist you?
                {/* <span className="absolute w-[18rem] h-[3px] bg-gray-900 left-[2.1rem] top-[4.5rem]"></span> */}
              </h3>
              <div className="flex flex-wrap gap-6 justify-between text-center text-4xl">
                <span onClick={() => handleClickOperation("deposit")}>
                  <OptionBank type={"Deposit"} icon={faDollarSign} />
                </span>

                <span onClick={() => handleClickOperation("withdraw")}>
                  <OptionBank type={"Withdraw"} icon={faCreditCard} />
                </span>

                <span>
                  <OptionBank type={"Payments"} icon={faMoneyBillTransfer} />
                </span>

                <span>
                  <OptionBank type={"Invest"} icon={faSackDollar} />
                </span>

                <span>
                  <OptionBank type={"Transfer"} icon={faChartSimple} />
                </span>

                <span>
                  <OptionBank type={"Loan"} icon={faLandmark} />
                </span>

                <span>
                  <OptionBank type={"Qr"} icon={faQrcode} />
                </span>

                <span>
                  <OptionBank type={"Insurance"} icon={faUnlockKeyhole} />
                </span>

                <span>
                  <OptionBank type={"Help"} icon={faCircleInfo} />
                </span>

                <span>
                  <OptionBank type={"More"} icon={faCircleQuestion} />
                </span>
              </div>
            </div>

            <div className="bg-white w-full relative rounded-[3rem] py-8 px-12 flex flex-col shadow-2xl col-span-3 ">
              <h3 className="text-gray-900 text-4xl font-bold mb-6 relative">
                Movements
                <span className="absolute w-[9rem] h-[3px] bg-green-600 left-0 top-[2.5rem]"></span>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between">
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faMoneyBillTransfer}
                      color="green"
                      size="xl"
                    />
                    <p className="text-gray-900 font-semibold ml-2">Withdraw</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-gray-900 font-bold ">- 40,5</p>
                    <p className="text-gray-900 text-xs font-light">
                      23/05/2000
                    </p>
                  </div>
                </div>

                <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between">
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faMoneyCheck}
                      color="green"
                      size="xl"
                    />
                    <p className="text-gray-900 font-semibold ml-2">Deposit</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-green-600 font-bold ">40,5</p>
                    <p className="text-gray-900 text-xs font-light">
                      23/05/2000
                    </p>
                  </div>
                </div>

                <div className="w-full h-[4rem] bg-[#f2f2f2] rounded-md py-2 px-6 flex items-center justify-between">
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faRightLeft}
                      color="green"
                      size="xl"
                    />
                    <p className="text-gray-900 font-semibold ml-2">Transfer</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-red-600 font-bold ">- 40,5</p>
                    <p className="text-gray-900 text-xs font-light">
                      23/05/2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default AppLayout;
