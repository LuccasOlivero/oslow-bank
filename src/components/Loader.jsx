import { Ring } from "@uiball/loaders";

function Loader() {
  return (
    <div className="absolute flex justify-center items-center w-full h-screen bg-gray-400 bg-opacity-40 z-[999]">
      <div className="w-[13rem] h-[13rem] bg-[#f2f2f2] z-[100] rounded-[3rem] flex justify-center items-center">
        <Ring size={70} lineWeight={5} speed={2} color="black" />
      </div>
    </div>
  );
}

export default Loader;
