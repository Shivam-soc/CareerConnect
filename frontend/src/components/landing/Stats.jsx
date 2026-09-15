import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      value: "22+",
      label: "Live Jobs",
      description: "Fresh opportunities",
      icon: BriefcaseBusiness,
    },
    {
      value: "15+",
      label: "Companies",
      description: "Hiring on CareerConnect",
      icon: Building2,
    },
    {
      value: "43+",
      label: "Applications",
      description: "Candidates connected",
      icon: GraduationCap,
    },
    {
      value: "24/7",
      label: "Career Access",
      description: "Find opportunities anytime",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#F8FAF8] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group min-w-0 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:rounded-3xl sm:p-6"
              >
                {/* Icon */}

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Number */}

                <div className="truncate text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>

                {/* Label */}

                <p className="mt-1 truncate text-sm font-semibold text-slate-700 sm:text-base">
                  {stat.label}
                </p>

                {/* Description */}

                <p className="mt-1 hidden text-xs leading-5 text-slate-400 sm:block">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;