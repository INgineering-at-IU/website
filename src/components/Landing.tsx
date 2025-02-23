import LandingImage from "./LandingImage";
import { MouseIcon } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useEffect, useState, ReactNode } from "react";
import NavbarPage from "./NavbarPage";

interface HeroPageProps{
  InitialText: ReactNode;
  isHomePage: boolean
}

export default function HeroPage({ InitialText , isHomePage}: HeroPageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    
    <div className="w-screen h-[90vh] bg-[#292524] flex flex-col items-center justify-center">
    
      <div className="flex justify-center items-center px-10">
      {isOpen ? (
      InitialText
) : (
  <NavbarPage />
)}


        {/* Landing Image */}
        <div className="md:w-[50vw] flex justify-center items-center">
          <LandingImage isHomePage={isHomePage}/>
        </div>
      </div>

      {/* Mouse Icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5, ease: "easeOut" }}
      >
        <MouseIcon className="animate-pulse w-8 h-8" />
      </motion.div>
    </div>
    </>
  );
}
