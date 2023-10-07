import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <>
      <main className="relative w-full h-screen bg-[#f2f2f2]">
        <NavBar />

        <div className="w-full flex flex-col h-full justify-center items-center">
          <h1 className="text-7xl font-bold">
            Simplified banking for an enhanced <br />
            and enriched financial experience.
          </h1>
          <p className="text-xl font-light py-6">
            We simplify banking for you. With cutting-edge technology, managing
            your finances has never been easier or more rewarding.
          </p>

          <div className="relative w-[12rem] h-[3.5rem] bg-gray-900 rounded-full flex items-center font-bold text-white hover:bg-gray-950 transition-all ease-in duration-300 p-2 justify-center mb-[14rem] text-lg">
            Join Now
            <span className="w-[3rem] h-[3rem] rounded-full bg-green-600 flex justify-center items-center absolute right-[.2rem] hover:bg-green-700 transition-all ease-in duration-200">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>

          <p className="text-xl font-extralight ">
            Recommended by <strong>+150k </strong> people
          </p>
          <picture>
            <span>aca va una img de personas</span>
          </picture>
        </div>
      </main>

      <section className="relative h-[60vh] w-full bg-red-600">
        {/* <div className="flex justify-center items-center gap-8 bg-violet-900">
          <div className="bg-white w-[40rem] h-[35rem]"></div>
          <div className="bg-green-900 w-[40rem] h-[35rem]"></div>
        </div> */}
      </section>
    </>
  );
}

export default Main;
