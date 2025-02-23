import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LandingImageProps {
  isHomePage: boolean; // ✅ Boolean prop to control animation
}

export default function LandingImage({ isHomePage }: LandingImageProps) {
  const images = [
    "../LogoAssets/3.png",
    "../LogoAssets/4.png",
    "../LogoAssets/5.png",
    "../LogoAssets/6.png",
    "../LogoAssets/7.png",
    "../LogoAssets/8.png",
    "../LogoAssets/2.png",
  ];

  const [visible, setVisible] = useState(Array(images.length).fill(false));

  useEffect(() => {
    if (isHomePage) {
      images.forEach((_, index) => {
        setTimeout(() => {
          setVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, (index + 1) * 200);
      });
    } else {
      // Instantly make all images visible if isHomePage is false
      setVisible(Array(images.length).fill(true));
    }
  }, [isHomePage, images]);

  return (
    <div className="relative w-[512px] h-[512px] flex items-center justify-center">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Title ${index + 2}`}
          width={512}
          height={512}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
          style={{
            opacity: visible[index] ? 1 : 0, // Controls visibility
            transition: isHomePage ? "opacity 1s ease-in-out" : "none", // Remove animation if not home page
          }}
        />
      ))}
    </div>
  );
}
