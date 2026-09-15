import { motion } from "framer-motion";

function LogoMarquee({ logos = [], reverse = false }) {
  if (!logos.length) {
    return null;
  }

  const marquee = [...logos, ...logos];

  return (
    <div className="relative w-full min-w-0 overflow-hidden py-6 sm:py-7">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/50 blur-3xl" />

      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-white to-transparent sm:w-14 lg:w-20" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-white to-transparent sm:w-14 lg:w-20" />

      {/* Marquee */}
      <motion.div
        className="
          relative z-10
          flex w-max items-center
          gap-10
          sm:gap-14
          md:gap-16
          lg:gap-20
        "
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marquee.map((logo, index) => {
          // Supports both:
          // "/logos/google.svg"
          // and:
          // { src: "/logos/google.svg", scale: 1.1 }

          const src = typeof logo === "string" ? logo : logo.src;
          const scale = typeof logo === "string" ? 1 : logo.scale || 1;

          return (
            <div
              key={`${src}-${index}`}
              className="
                flex h-14 w-24 shrink-0
                items-center justify-center
                sm:h-16 sm:w-28
                md:h-18 md:w-32
              "
            >
              <img
                src={src}
                alt="Hiring company"
                loading="lazy"
                draggable={false}
                style={{
                  transform: `scale(${scale})`,
                }}
                className="
                  block
                  h-8
                  w-auto
                  max-w-[105px]
                  object-contain
                  opacity-70
                  transition-all
                  duration-300
                  hover:scale-[1.05]
                  hover:opacity-100
                  sm:h-9
                  sm:max-w-[115px]
                  md:h-10
                  md:max-w-[125px]
                "
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default LogoMarquee;