import { useAccount } from "../contexts/AccountContext";

function BankOptionsManager() {
  const { optionsActive, setOptionsActive } = useAccount();
  //   setOptionsActive(false);
  return (
    <section
      className={`absolute ${
        optionsActive
          ? "w-[full] col-span-3 rounded-[3rem] shadow-xl py-8 px-12 flex flex-col z-[99] justify-between bg-gray-900 relative"
          : ""
      }  transition-all ease-in duration-200`}
    >
      {/* <div className="">
        <p className="font-semibold text-4xl mr-4 text-white">Amout</p>
        <input
          type="number"
          className=" h-[2.5rem] outline-none bg-[#f2f2f2] rounded-xl px-6 appearance-none "
        />
      </div>

      <div className="">
        <p className="font-semibold text-4xl mr-4 text-white">Currency</p>
        <input
          type="number"
          name=""
          className="h-[2.5rem] outline-none bg-[#f2f2f2] rounded-xl px-6 appearance-none "
        />
      </div> */}

      {/* <button className="w-[7rem] h-[2.5rem] bg-green-600 rounded-2xl text-white flex items-center justify-center text-base font-bold">
        Send
      </button> */}
    </section>
  );
}

export default BankOptionsManager;
