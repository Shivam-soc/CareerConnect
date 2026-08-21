import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Target,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Companies",
    description:
      "Every company is carefully reviewed so you can apply with confidence.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description:
      "Apply faster with a seamless application experience across companies.",
  },
  {
    icon: Target,
    title: "Smart Job Matching",
    description:
      "Personalized recommendations based on your skills and career goals.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Discover internships and full-time opportunities to accelerate your career.",
  },
];

function WhyCareerConnect() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#2E8B78]/5 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          align="center"
          eyebrow="Why CareerConnect"
          title="Everything you need to build your career"
          subtitle="Designed for students and professionals looking for internships and full-time opportunities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <Card
                  className="group relative h-full overflow-hidden text-center"
                >

                  {/* Top Accent */}

                  <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-[#2E8B78] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Icon */}

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F7F3] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">

                    <Icon
                      size={30}
                      className="text-[#2E8B78]"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#2E8B78]">

                    {feature.title}

                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-500">

                    {feature.description}

                  </p>

                  {/* Learn More */}

                  <div className="mt-8 flex justify-center">

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#2E8B78] opacity-0 transition-all duration-300 group-hover:opacity-100">

                      Learn More

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </Card>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyCareerConnect;