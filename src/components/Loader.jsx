import { Ring } from "@uiball/loaders";

function Loader() {
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-gray-400 bg-opacity-40 z-[999]">
      <div className="w-[9rem] h-[9rem] bg-[#f2f2f2] z-[100] rounded-[3rem] flex justify-center items-center max-md:w-[6rem] max-md:h-[6rem] max-md:rounded-3xl">
        <Ring size={70} lineWeight={5} speed={2} color="black" />
      </div>
    </div>
  );
}

export default Loader;
