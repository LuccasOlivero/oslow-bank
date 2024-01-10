import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faDollarSign,
  faCreditCard,
  faChartSimple,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";

function Main() {
  const [active, setActive] = useState("translate-x-[-100%]");
  return (
    <>
      <main className="relative h-screen w-full bg-[#f2f2f2] ">
        <NavBar setActive={setActive} active={active} />

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="relative flex h-full w-full max-w-[1300px] flex-col justify-evenly px-12">
            <div className="flex flex-col items-center pt-3 max-lg:pt-[6rem]">
              <h1 className="text-7xl font-bold max-lg:text-5xl">
                Simplified banking for an enhanced experience.
              </h1>
              <p className="pt-3 text-xl font-light max-lg:text-lg">
                We simplify banking for you. With cutting-edge technology,
                managing your finances has never been easier or more rewarding.
              </p>

              <NavLink
                to="/login"
                className="relative mb-[13rem] flex h-[3.5rem] w-[12rem] items-center justify-center rounded-full bg-gray-900 p-2 text-lg font-bold text-white shadow-xl transition-all duration-300 ease-in hover:bg-gray-950 hover:shadow-2xl"
              >
                Join Now
                <span className="absolute right-[.2rem] flex h-[3rem] w-[3rem] rotate-[-35deg] items-center justify-center rounded-full bg-green-600 transition-all duration-200 ease-in hover:bg-green-700">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </NavLink>
            </div>

            <div className="z-40 flex flex-col items-center justify-center">
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

      <section className="relative grid h-full justify-center bg-[#f2f2f2] px-12 py-12">
        <div className="my-[3rem] grid w-full max-w-[1300px] grid-cols-3 items-center gap-6 max-lg:grid-cols-2 max-lg:grid-rows-1 max-lg:pt-[8rem]">
          <div className="relative col-start-1 col-end-2 flex h-[22.5rem] w-full flex-col items-center justify-between rounded-[3rem] bg-gray-900 p-8 text-4xl text-[#f2f2f2] shadow-2xl max-lg:col-span-2 max-lg:row-span-1">
            <h3 className="text-3xl font-bold  max-md:text-2xl">
              Income management, savings growth
            </h3>
            <p className="text-base max-md:text-sm">
              Empowering Your Financial Journey, Unleashing Earnings Potential
              from Any Pocket or Phone, Anytime.
            </p>
            <span className="flex h-[2.5rem] w-[10rem] items-center justify-center rounded-3xl bg-green-600 text-base font-bold transition-all duration-200 ease-in hover:bg-green-700">
              Download app
            </span>
          </div>

          <div className="relative col-start-2 col-end-4 flex h-full w-full flex-col items-center justify-between rounded-[3rem] bg-green-600 p-8 text-4xl text-[#f2f2f2] shadow-2xl max-lg:col-span-2 max-lg:row-start-2">
            <h3 className="text-3xl font-bold max-lg:mb-[1rem]  max-lg:text-2xl max-md:mb-4">
              Furthermore, you can access all of these products.
            </h3>
            <div className="grid w-full grid-cols-4 justify-items-center gap-3 max-md:grid-cols-2 max-md:grid-rows-2 ">
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
