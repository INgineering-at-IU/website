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
  grade,
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
      <div className="flex items-center gap-12">
        <div className="flex justify-around">
          <img
            src={href}
            alt={`${name}'s image`}
            className="w-[32rem] h-[32rem] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800">{name}</h2>
          <h3 className="text-2xl text-gray-600 mt-2">{position}</h3>
          <p className="mt-2 text-md text-gray-500">Grade: {grade}</p>
        </div>
      </div>
    </motion.div>
  );
}
