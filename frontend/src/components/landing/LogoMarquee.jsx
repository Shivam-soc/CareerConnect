import { motion } from "framer-motion";

function LogoMarquee({ logos, reverse = false }) {
  const marquee = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">

      <motion.div
        className="flex gap-20"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marquee.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-20 w-36 flex-shrink-0 items-center justify-center"
          >
            <img
             src={logo}
             alt=""
             loading="lazy"
             draggable={false}
             className="h-10 max-w-[110px] object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F8FAF8] to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F8FAF8] to-transparent" />

    </div>
  );
}

export default LogoMarquee;