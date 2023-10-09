function Footer() {
  return (
    <footer className="flex justify-center relative h-[16rem] w-full bg-white">
      <div className="max-w-[1300px] w-full flex justify-center">
        <div className="w-full flex flex-col pt-[5rem] ">
          <picture className="h-[3rem] w-[3rem]">
            <img
              src="./oslo.png"
              alt="oslowIcon"
              className="w-full h-full block"
            />
          </picture>

          <p className="pb-1 font-normal text-sm">
            &copy; Copyright {new Date().getFullYear()}
            <br />
            by <span className="text-green-600 font-bold">Oslo Inc.</span>
          </p>
        </div>

        <div className="w-full flex flex-col pt-[5rem] items-center">
          <h3 className="pb-2 font-bold text-base ">We want to help you.</h3>
          <p className="pb-1 font-light text-sm hover:font-semibold hover:text-green-600">
            0810 - 333 - 6272
          </p>
          <p className="font-light text-sm hover:font-semibold hover:text-green-600">
            Chat with us
          </p>
        </div>

        <div className="w-full flex flex-col pt-[5rem] items-end">
          <h3 className="pb-3 font-bold text-base text-center">About us</h3>
          <p className="pb-2 font-light text-sm hover:font-semibold hover:text-green-600">
            Work with us
          </p>
          <p className="font-light text-sm hover:font-semibold hover:text-green-600">
            Sustainability
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
