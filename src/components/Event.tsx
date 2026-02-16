import { motion } from "framer-motion";

interface EventProps {
  eventName: string;
  eventDescription: string;
  date: string;
  img: string;
}

export default function Event({ eventName, eventDescription, date, img }: EventProps) {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg border-t-4 border-[#940600] bg-white w-80 flex flex-col gap-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Event Image */}
      <img src={img} alt={eventName} className="w-full h-40 object-cover rounded-lg shadow-sm" />

      {/* Event Content */}
      <div className="text-gray-800">
        <h2 className="text-2xl font-bold">{eventName}</h2>
        <p className="mt-2 text-sm text-gray-600">{eventDescription}</p>
        <p className="mt-2 text-xs font-semibold text-gray-500">{date}</p>
      </div>
    </motion.div>
  );
}
