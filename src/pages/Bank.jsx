import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

function Bank() {
  return (
    <>
      <main className="h-screen w-full bg-[#f2f2f2]">
        <NavBar session={"Sign out"} />

        <section className="flex justify-center relative h-full w-full bg-[#f2f2f2] ">
          <div className="grid grid-cols-3 grid-rows-6 gap-6 max-w-[1300px] my-[3rem] w-full">
            <div className="bg-gray-900 w-full h-full relative rounded-[3rem] text-[#f2f2f2] p-8 flex flex-col justify-between items-center shadow-2xl row-span-3">
              <h3 className="text-4xl">
                Welcome again! <br />
                Lucas
              </h3>
              <p className="text-6xl">
                2.305,00 <br /> usd
              </p>
              <p>change currency</p>
            </div>

            <div className="bg-green-600 w-full h-full relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between shadow-2xl col-span-2 row-span-3">
              <h3>What do you wanna do?</h3>
              <div className="w-[6rem] h-[6rem] bg-white rounded-3xl flex flex-col justify-between items-center p-5 shadow-lg hover:shadow-2xl transition-all ease-in duration-300">
                <FontAwesomeIcon icon={faDollarSign} color="#059669" />
                <p className="font-bold text-xs text-gray-900">testtest</p>
              </div>
            </div>

            <div className="bg-white w-full h-full relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between shadow-2xl col-span-3 row-start-4 row-end-7">
              <h3 className="text-gray-900">Movements</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Bank;
