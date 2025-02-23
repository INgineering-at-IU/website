import { motion } from "framer-motion";


export default function WhatWeDoPage(){
    return(
        <div className="h-screen w-screen flex flex-col align-center p-10 bg-zinc-100 relative overflow-y-hidden" >
             <div className="flex justify-around items-center relative z-10 my-auto">
                <div className="text-black w-[60vw] px-20 text-center flex justify-center flex-col">
                <h2 className="font-bold text-8xl text-black mb-3">
                        What We Do
                    </h2>
                    <p className="font-semibold text-xl px-20">
                        We host events, workshops, and share opportunities so the engineers of IU can develop their skills. Interested in joining?
                    </p>
                        <a href="/join">
                            <motion.button 
                                className="mx-auto w-[15vw] mt-5 text-white border-8 border-[#940600] px-4 py-2 rounded-lg transition-all duration-300"
                                style={{ backgroundColor: "#940600", borderWidth: "4px" }}
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
             <div className="absolute top-0  left-0 flex justify-center items-center overflow-y-hidden z-0 brightness-90">
                <img 
                    src="./LogoAssets/TransparentLogo.png" 
                    className="max-w-full max-h-full object-contain filter invert" 
                    alt="Background Image Transparent Logo"
                    width={2048}
                />
            </div>
        </div>
    )
}