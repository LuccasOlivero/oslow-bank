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
} from "@fortawesome/free-solid-svg-icons";

import OptionBank from "../components/OptionBank";

function AppLayout() {
  return (
    <>
      <main className="h-full w-full bg-[#f2f2f2]">
        <NavBar session={"Sign out"} />

        <section className="flex justify-center relative h-full w-full bg-[#f2f2f2] ">
          <div className="grid grid-cols-3 gap-6 max-w-[1300px] my-[3rem] w-full">
            <div className="bg-gray-900 w-full h-full relative rounded-[3rem] text-[#f2f2f2] p-8 flex flex-col justify-between items-center shadow-2xl row-span-3">
              <h3 className="text-4xl font-semibold">
                👋 Welcome
                <br />
                Lucas
              </h3>
              <p className="text-6xl ">
                2.305,00 <br /> USD
              </p>
              <p className="text-xl text-green-600 font-bold uppercase">
                Currency
              </p>
            </div>

            <div className="bg-green-600 w-full h-full relative rounded-[3rem] text-[#f2f2f2] p-8 flex flex-col justify-between shadow-2xl col-span-2 row-span-3 mb-3">
              <h3 className="text-4xl font-bold">
                What do you wanna do?
                <span className="absolute w-[8rem] h-1 bg-gray-900 left-[2.1rem] top-[4.5rem]"></span>
              </h3>
              <div className="flex flex-wrap gap-6 justify-center text-center text-4xl">
                <OptionBank type={"test"} icon={faDollarSign} />
                <OptionBank type={"test"} icon={faCreditCard} />
                <OptionBank type={"test"} icon={faChartSimple} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
                <OptionBank type={"test"} icon={faSackDollar} />
              </div>
            </div>

            <div className="bg-white w-full relative rounded-[3rem] text-[#f2f2f2] p-8 flex flex-col shadow-2xl col-span-3 row-start-4 row-end-7">
              <h3 className="text-gray-900 text-4xl font-semibold mb-6">
                Movements
                <span className="absolute w-[6rem] h-1 bg-green-600 left-[2.1rem] top-[4.5rem]"></span>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                <div className="w-full h-[4rem] bg-neutral-200 rounded-md py-2 px-6 flex items-center justify-between">
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

                <div className="w-full h-[4rem] bg-neutral-200 rounded-md py-2 px-6 flex items-center justify-between">
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

                <div className="w-full h-[4rem] bg-neutral-200 rounded-md py-2 px-6 flex items-center justify-between">
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
