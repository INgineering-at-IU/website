import { motion } from "framer-motion";

export default function WhatWeDoPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center p-6 md:p-10 bg-zinc-100 relative overflow-y-hidden">
      <div className="flex flex-col md:flex-row justify-around items-center relative z-10 w-full h-full">
        <div className="text-black w-full md:w-[60vw] px-4 md:px-20 text-center flex justify-center flex-col">
          <h2 className="font-bold text-4xl md:text-8xl text-black mb-4 md:mb-3">
            What We Do
          </h2>
          <p className="font-medium text-base md:text-xl px-2 md:px-20">
            We host events, workshops, and share opportunities so the engineers of IU can develop their skills. Interested in joining?
          </p>
          <a href="/join">
            <motion.button
              className="mx-auto w-40 md:w-[15vw] mt-5 text-white border-4 md:border-8 border-[#940600] px-4 py-2 rounded-lg transition-all duration-300"
              style={{ backgroundColor: "#940600" }}
              whileHover={{
                backgroundColor: "transparent",
                color: "#940600",
                borderColor: "#940600",
                translateY: -3,
                scale: 1.05,
              }}
            >
              <span className="font-bold">Join Now!</span>
            </motion.button>
          </a>
        </div>
      </div>

      {/* Background Logo */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden z-0 brightness-90">
        <img
          src="./LogoAssets/TransparentLogo.png"
          className="max-w-full max-h-full object-contain filter invert opacity-20 md:opacity-100"
          alt="Background Image Transparent Logo"
        />
      </div>
    </div>
  );
}
