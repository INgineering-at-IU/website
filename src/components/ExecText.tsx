import { motion } from "framer-motion";

export default function ExecTextPage() {
  return (
    <div className="md:w-[50vw] flex justify-center">
      <motion.h1
        className="font-bold text-9xl drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Meet the Exec Board
      </motion.h1>
    </div>
  );
}
