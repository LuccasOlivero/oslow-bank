import { createPortal } from "react-dom";
import { motion } from "framer-motion";

function Error() {
  const containerStyle =
    "absolute left-0 top-0 m-auto flex h-screen w-full items-center justify-center";

  return createPortal(
    <motion.div
      initial={{
        scale: 0,
      }}
      transition={{
        scale: 1,
      }}
      className={containerStyle}
    >
      <div className="flex h-[18rem] w-[35rem] items-center justify-center rounded-3xl bg-yellow-500 text-white">
        something went wrong, try again
      </div>
    </motion.div>,
    document.body,
  );
}

export default Error;
