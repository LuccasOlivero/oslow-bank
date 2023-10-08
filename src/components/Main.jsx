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

function Main() {
  return (
    <>
      <main className="relative w-full h-screen bg-[#f2f2f2] ">
        <NavBar />

        <div className="w-full flex flex-col h-full justify-center items-center">
          <div className="relative max-w-[1300px] flex flex-col justify-evenly h-full w-full">
            <div className="flex items-center flex-col">
              <h1 className="text-7xl font-bold">
                Simplified banking for an enhanced experience.
              </h1>
              <p className="text-xl font-light pt-3 pb-9">
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

            <div className="flex justify-center items-center flex-col">
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

      <section className="flex justify-center relative h-full w-full bg-[#f2f2f2]">
        <div className="flex justify-between gap-6 items-center max-w-[1300px] my-[3rem] w-full ">
          <div className="bg-gray-900 w-[30rem] h-[22.5rem] relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between items-center shadow-2xl">
            <h3 className="text-3xl font-bold">
              Manage your income and grow your savings.
            </h3>
            <p className="text-base">
              No matter how much money you have in your pocket or on your phone,
              with Oslo, you have what you need to grow your income.
            </p>
            <span className="text-base h-[2.5rem] w-[10rem] bg-green-600 rounded-3xl flex items-center justify-center font-bold hover:bg-green-700 transition-all ease-in duration-200">
              Download app
            </span>
          </div>

          <div className="bg-green-600 w-[43rem] h-[22.5rem] relative rounded-[3rem] text-[#f2f2f2] text-4xl p-8 flex flex-col justify-between shadow-2xl">
            <h3 className="text-3xl font-bold">
              Furthermore, you can access all of these products.
            </h3>
            <div className="flex justify-center gap-6 items-center">
              <Card icon={faDollarSign} title={"Recharges"} />
              <Card icon={faCreditCard} title={"Oslo Account"} />
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
