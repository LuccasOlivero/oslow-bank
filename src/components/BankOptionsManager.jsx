function BankOptionsManager() {
  return (
    <section className="bg-white w-full col-span-3 rounded-[2.5rem] shadow-xl py-8 px-12 flex justify-between">
      <div className="flex items-center">
        <p className="font-semibold text-lg mr-4">Amout</p>
        <input
          type="number"
          className=" h-[2.5rem] outline-none bg-[#f2f2f2] rounded-xl px-6 appearance-none "
        />
      </div>

      <div className="flex items-center">
        <p className="font-semibold text-lg mr-4">Account to deposit</p>
        <input
          type="number"
          name=""
          className="h-[2.5rem] outline-none bg-[#f2f2f2] rounded-xl px-6 appearance-none "
        />
      </div>

      <button className="w-[7rem] h-[2.5rem] bg-gray-900 rounded-2xl text-white flex items-center justify-center text-base font-bold">
        Send
      </button>
    </section>
  );
}

export default BankOptionsManager;
