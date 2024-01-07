function Footer() {
  return (
    <footer className="relative flex h-[16rem] w-full justify-center bg-white px-12">
      <div className="flex w-full max-w-[1300px] justify-center">
        <div className="flex w-full flex-col pt-[5rem] ">
          <picture className="h-[3rem] w-[3rem]">
            <img
              src="./oslo.png"
              alt="oslowIcon"
              className="block h-full w-full"
            />
          </picture>

          <p className="pb-1 text-sm font-normal">
            &copy; Copyright {new Date().getFullYear()}
            <br />
            by <span className="font-bold text-green-600">Oslo Inc.</span>
          </p>
        </div>

        <div className="flex w-full flex-col items-center pt-[5rem]">
          <h3 className="pb-2 text-base font-bold  max-lg:text-sm">
            We want to help you.
          </h3>
          <p className="pb-1 text-sm font-light hover:font-semibold hover:text-green-600  max-lg:text-xs">
            0810 - 333 - 6272
          </p>
          <p className="text-sm font-light hover:font-semibold hover:text-green-600  max-lg:text-xs">
            Chat with us
          </p>
        </div>

        <div className="flex w-full flex-col items-end pt-[5rem]">
          <h3 className="pb-3 text-center text-base font-bold   max-lg:text-sm">
            About us
          </h3>
          <p className="pb-2 text-sm font-light hover:font-semibold hover:text-green-600  max-lg:text-xs">
            Work with us
          </p>
          <p className="text-sm font-light hover:font-semibold hover:text-green-600  max-lg:text-xs">
            Sustainability
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
