import { motion } from "framer-motion";

export default function JoinPageText() {
  return (
    <div className="md:w-[50vw] flex justify-center">
      <motion.h1
        className="font-bold text-9xl drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        JO
        <span className="text-[#940600]">I</span>
        <span className="text-[#f6c64d]">N</span>
        &nbsp;Us
      </motion.h1>
    </div>
  );
}
