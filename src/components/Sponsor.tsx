import { motion } from "framer-motion";

interface SponsorProps {
  sponsorName: string;
  sponsorDescription: string;
  img: string;
}

export default function Sponsor({ sponsorName, sponsorDescription, img }: SponsorProps) {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg border-t-4 border-[#940600] bg-white w-80 flex flex-col gap-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Sponsor Logo */}
      <img src={img} alt={sponsorName} className="w-full h-40 object-contain rounded-lg shadow-sm" />

      {/* Sponsor Content */}
      <div className="text-gray-800">
        <h2 className="text-2xl font-bold">{sponsorName}</h2>
        <p className="mt-2 text-sm text-gray-600">{sponsorDescription}</p>
      </div>
    </motion.div>
  );
}
