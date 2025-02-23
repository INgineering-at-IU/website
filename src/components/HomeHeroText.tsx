import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HomeHeroTextProps {
  isOpen: boolean;
}

export default function HomeHeroText({ isOpen }: HomeHeroTextProps) {
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => setInitialAnimation(false), 3000);
  }, []);

  return (
    <>
      {isOpen ? (
        <div className="md:w-[50vw] flex justify-center">
          {initialAnimation ? (
            <h1 className="font-bold text-8xl drop-shadow-lg">
              <motion.span
                className="text-[#940600]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.5, ease: "easeOut" }}
              >
                I
              </motion.span>
              <motion.span
                className="text-[#f6c64d]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.4, ease: "easeOut" }}
              >
                N
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.5, ease: "easeOut" }}
              >
                ovate.&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.4, ease: "easeOut" }}
              >
                Explore.&nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.4, ease: "easeOut" }}
              >
                Lead.&nbsp;
              </motion.span>
            </h1>
          ) : (
            <h1 className="font-bold text-8xl drop-shadow-lg">
              <span className="text-[#940600]">I</span>
              <span className="text-[#f6c64d]">N</span>
              <span>ovate.&nbsp;</span>
              <span>Explore.&nbsp;</span>
              <span>Lead.&nbsp;</span>
            </h1>
          )}
        </div>
      ) : null}
    </>
  );
}
