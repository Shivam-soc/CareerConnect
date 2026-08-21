import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

function HeroJobCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-2, -1, -2],
      }}
      transition={{
        opacity: { duration: 0.7 },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        y: -14,
        rotate: 0,
        scale: 1.02,
      }}
      className="relative w-full max-w-md rounded-[30px] border border-slate-200 bg-white p-6 shadow-2xl"
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2E8B78]/10 blur-3xl" />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <img
              src="/logos/google.svg"
              alt=""
              className="h-8"
            />

          </div>

          <div>

            <h4 className="font-semibold text-slate-900">
              Google
            </h4>

            <p className="text-sm text-slate-500">
              Bengaluru
            </p>

          </div>

        </div>

        <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Hiring
        </div>

      </div>

      {/* Title */}

      <h2 className="mt-7 text-2xl font-bold text-slate-900">
        Frontend Engineer
      </h2>

      {/* Meta */}

      <div className="mt-5 flex flex-wrap gap-3">

        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">

          <MapPin size={15} />

          Bangalore

        </span>

        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">

          <Briefcase size={15} />

          Full Time

        </span>

      </div>

      {/* Salary */}

      <div className="mt-7 flex items-end justify-between">

        <div>

          <p className="text-sm text-slate-500">
            Salary
          </p>

          <h3 className="text-3xl font-bold text-[#2E8B78]">
            ₹22 LPA
          </h3>

        </div>

        <motion.button
          whileHover={{
            x: 4,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E8B78] text-white"
        >
          <ArrowUpRight size={20} />
        </motion.button>

      </div>
    </motion.div>
  );
}

export default HeroJobCard;