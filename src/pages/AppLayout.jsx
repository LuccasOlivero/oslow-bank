import NavBar from "../components/NavBar";
import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
  faMoneyBillTransfer,
  // faMoneyCheck,
  // faRightLeft,
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
// import Movements from "../components/Movements";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movement from "../components/Movement";

function AppLayout() {
  const { user } = useAuth();
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
        <NavBar session={"Logout"} />

        <section className="flex justify-center relative h-full w-full bg-[#f2f2f2] ">
          <div className="grid grid-cols-3 gap-6 max-w-[1300px] my-[3rem] w-full">
            <BankOptionsManager
              type={typeOfOperation}
              handleClickOperation={handleClickOperation}
            />
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
                  <OptionBank
                    type={"Deposit"}
                    icon={faDollarSign}
                    isActive={activeOption === 1}
                    onClick={() => handleOptionClick(1)}
                  />
                </span>

                <span onClick={() => handleClickOperation("withdraw")}>
                  <OptionBank
                    type={"Withdraw"}
                    icon={faCreditCard}
                    isActive={activeOption === 2}
                    onClick={() => handleOptionClick(2)}
                  />
                </span>

                <span onClick={() => handleClickOperation("payments")}>
                  <OptionBank
                    type={"Payments"}
                    icon={faMoneyBillTransfer}
                    isActive={activeOption === 3}
                    onClick={() => handleOptionClick(3)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"Invest"}
                    icon={faSackDollar}
                    isActive={activeOption === 4}
                    onClick={() => handleOptionClick(4)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"Transfer"}
                    icon={faChartSimple}
                    isActive={activeOption === 5}
                    onClick={() => handleOptionClick(5)}
                  />
                </span>

                <span onClick={() => handleClickOperation("loan")}>
                  <OptionBank
                    type={"Loan"}
                    icon={faLandmark}
                    isActive={activeOption === 6}
                    onClick={() => handleOptionClick(6)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"Qr"}
                    icon={faQrcode}
                    isActive={activeOption === 7}
                    onClick={() => handleOptionClick(7)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"Insurance"}
                    icon={faUnlockKeyhole}
                    isActive={activeOption === 8}
                    onClick={() => handleOptionClick(8)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"Help"}
                    icon={faCircleInfo}
                    isActive={activeOption === 9}
                    onClick={() => handleOptionClick(9)}
                  />
                </span>

                <span>
                  <OptionBank
                    type={"More"}
                    icon={faCircleQuestion}
                    isActive={activeOption === 10}
                    onClick={() => handleOptionClick(10)}
                  />
                </span>
              </div>
            </div>

            <div className="bg-white w-full relative rounded-[3rem] py-8 px-12 flex flex-col shadow-2xl col-span-3 ">
              <h3 className="text-gray-900 text-4xl font-bold mb-6 relative">
                Movements
                <span className="absolute w-[9rem] h-[3px] bg-green-600 left-0 top-[2.5rem]"></span>
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
}
export default AppLayout;
