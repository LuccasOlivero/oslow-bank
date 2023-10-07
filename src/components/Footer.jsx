function Footer() {
  return (
    <footer className="flex justify-center relative h-[16rem] w-full bg-[#f2f2f2]">
      <div className="max-w-[1600px] w-full flex">
        <div className="w-full flex flex-col pt-[5rem] items-center">
          <picture className="h-[3rem] mb-3">
            <img
              src="./oslo.png"
              alt="oslowIcon"
              className="w-full text-center h-full block"
            />
          </picture>

          <p className="pb-1 font-normal text-sm">Copyright Oslo</p>
          <p className=" font-normal text-sm">Todos los derechos reservados</p>
        </div>

        <div className="w-full flex flex-col pt-[5rem] items-center">
          <h3 className="pb-3 font-bold text-base">Queremos ayudarte</h3>
          <p className="pb-2 font-light text-sm">0810 - 333 - 6272</p>
          <p className="font-light text-sm">Chateá con nosotros</p>
        </div>

        <div className="w-full flex flex-col pt-[5rem] items-center">
          <h3 className="pb-3 font-bold text-base">Nosotros</h3>
          <p className="pb-2 font-light text-sm">Trabajá con nosotros</p>
          <p className="font-light text-sm">Sustentabilidad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
