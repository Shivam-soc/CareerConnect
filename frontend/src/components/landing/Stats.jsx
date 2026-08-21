import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";

import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  {
    icon: <FaBriefcase />,
    value: 1500,
    suffix: "+",
    title: "Active Jobs",
  },
  {
    icon: <FaBuilding />,
    value: 800,
    suffix: "+",
    title: "Companies",
  },
  {
    icon: <FaUserGraduate />,
    value: 25000,
    suffix: "+",
    title: "Students",
  },
  {
    icon: <FaStar />,
    value: 95,
    suffix: "%",
    title: "Hiring Rate",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF8] py-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#2E8B78]/5 blur-[120px]" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          align="center"
          eyebrow="By The Numbers"
          title="CareerConnect in Numbers"
          subtitle="Thousands of students trust our platform to launch their careers."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#2E8B78] hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F7F3] text-2xl text-[#2E8B78] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">

                {item.icon}

              </div>

              <h3 className="text-5xl font-extrabold tracking-tight text-slate-900">

                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                />

              </h3>

              <p className="mt-3 text-base font-medium text-slate-500">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;