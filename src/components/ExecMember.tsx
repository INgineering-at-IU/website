import { motion } from "framer-motion";

interface ExecMemberProps {
  name: string;
  position: string;
  grade: string;
  href: string;
  color: string;
}

export default function ExecMemberPage({
  name,
  position,
  href,
  color
}: ExecMemberProps) {
  return (
    <motion.div
      className={`h-screen w-screen ${color} flex items-center justify-around`}
      initial={{ opacity: 0, y: -20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
    >
      <div className="md:flex items-center gap-12">
        <div className="flex justify-around md:mb-0 mb-20">
          <img
            src={href}
            alt={`${name}'s image`}
            className="w-[16rem] h-[16rem] md:w-[32rem] md:h-[32rem] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="md:w-1/2 md:text-left text-center">
          <h2 className="text-4xl font-bold text-gray-800">{name}</h2>
          <h3 className="text-2xl text-gray-600 mt-2">{position}</h3>
        </div>
      </div>
    </motion.div>
  );
}
