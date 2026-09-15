import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Rocket,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function WhyCareerConnect() {
  const features = [
    {
      icon: Search,
      title: "Find the Right Opportunity",
      description:
        "Search and discover relevant jobs based on your skills, interests, and career goals.",
      points: ["Smart job discovery", "Easy search experience"],
    },
    {
      icon: Rocket,
      title: "Apply with Confidence",
      description:
        "Keep your applications organized and make your job search process simpler.",
      points: ["Simple applications", "Application tracking"],
    },
    {
      icon: ShieldCheck,
      title: "Trusted Opportunities",
      description:
        "Explore opportunities from companies and recruiters looking for talented candidates.",
      points: ["Verified platform", "Recruiter opportunities"],
    },
    {
      icon: BriefcaseBusiness,
      title: "Build Your Career",
      description:
        "Connect with opportunities that can help you take the next step in your professional journey.",
      points: ["Career-focused platform", "Growing opportunities"],
    },
  ];

  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Why CareerConnect
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="block text-emerald-600">
              move your career forward.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            CareerConnect brings job discovery, applications, and career
            opportunities together in one simple platform.
          </p>
        </div>

        {/* Feature cards */}

        <div className="mt-12 grid min-w-0 gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group flex min-w-0 flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl sm:p-7"
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                {/* Points */}

                <div className="mt-5 space-y-2.5">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex min-w-0 items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />

                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <Link
                  to="/jobs"
                  className="group/link mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                >
                  Explore jobs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyCareerConnect;