import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Main() {
  const [active, setActive] = useState("translate-x-[-100%]");
  return (
    <>
      <main className="relative w-full h-screen bg-[#f2f2f2] ">
        <NavBar setActive={setActive} active={active} />

        <div className="w-full flex flex-col h-full justify-center items-center">
          <div className="relative max-w-[1300px] flex flex-col justify-evenly h-full w-full px-12">
            <div className="flex items-center flex-col max-lg:pt-[6rem] pt-3">
              <h1 className="text-7xl font-bold max-lg:text-5xl">
                Simplified banking for an enhanced experience.
              </h1>
              <p className="text-xl font-light pt-3 max-lg:text-lg">
                We simplify banking for you. With cutting-edge technology,
                managing your finances has never been easier or more rewarding.
              </p>

              <NavLink
                to="/login"
                className="relative w-[12rem] h-[3.5rem] bg-gray-900 rounded-full flex items-center font-bold text-white hover:bg-gray-950 transition-all ease-in duration-300 p-2 justify-center text-lg mb-[13rem] shadow-xl hover:shadow-2xl"
              >
                Join Now
                <span className="w-[3rem] h-[3rem] rounded-full bg-green-600 flex justify-center items-center absolute right-[.2rem] hover:bg-green-700 transition-all ease-in duration-200 rotate-[-35deg]">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </NavLink>
            </div>

            <div className="flex justify-center items-center flex-col z-40">
              <p className="relative text-xl font-extralight ">
                Recommended by <strong>+150k </strong> people
              </p>
              <picture className="pt-[.7rem]">
                <img src="./recomendation.png" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </main>

      <section className="grid justify-center relative h-full bg-[#f2f2f2] px-12 py-12">
        <div className="gap-6 items-center max-w-[1300px] my-[3rem] w-full grid grid-cols-3 max-lg:grid-cols-2 max-lg:grid-rows-1 max-lg:pt-[8rem]">
          <div className="bg-gray-900 w-full h-[22.5rem] relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between items-center shadow-2xl col-start-1 col-end-2 max-lg:row-span-1 max-lg:col-span-2">
            <h3 className="text-3xl font-bold  max-md:text-2xl">
              Income management, savings growth
            </h3>
            <p className="text-base max-md:text-sm">
              Empowering Your Financial Journey, Unleashing Earnings Potential
              from Any Pocket or Phone, Anytime.
            </p>
            <span className="text-base h-[2.5rem] w-[10rem] bg-green-600 rounded-3xl flex items-center justify-center font-bold hover:bg-green-700 transition-all ease-in duration-200">
              Download app
            </span>
          </div>

          <div className="bg-green-600 w-full h-full relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between items-center shadow-2xl col-start-2 col-end-4 max-lg:row-start-2 max-lg:col-span-2">
            <h3 className="text-3xl font-bold max-md:mb-4  max-lg:text-2xl max-lg:mb-[1rem]">
              Furthermore, you can access all of these products.
            </h3>
            <div className="grid grid-cols-4 gap-3 w-full justify-items-center max-md:grid-cols-2 max-md:grid-rows-2 ">
              <Card icon={faDollarSign} title={"Recharges"} />
              <Card icon={faCreditCard} title={"Account"} />
              <Card icon={faChartSimple} title={"Fixed-Term"} />
              <Card icon={faSackDollar} title={"Loans"} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;
