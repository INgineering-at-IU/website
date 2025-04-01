import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavbarPage() {
  return (
    <div className="md:w-[50vw] flex justify-center">
      <motion.ul
        className="text-5xl font-bold flex flex-col gap-y-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {[
          { name: "Home", href: "/" },
          { name: "Executive Board", href: "/exec" },
          { name: "Event Schedule", href: "/events" },
          { name: "Reach Out", href: "/join" },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="cursor-pointer text-white"
            whileHover={{
              scale: 1.05,
              color: "#dddddd",
              transition: { duration: 0.2 },
              translateY: -5,
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              },
            }}
          >
            <Link to={item.href} style={{ all: "unset" }}>
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
