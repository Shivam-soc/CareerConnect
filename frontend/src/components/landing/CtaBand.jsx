import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function CtaBand() {
  return (
    <section className="w-full overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-slate-950 px-6 py-12 sm:rounded-[36px] sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-16 lg:py-20"
        >
          {/* Background decoration */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="pointer-events-none absolute right-10 top-10 hidden h-24 w-24 rounded-full border border-white/10 lg:block" />

          <div className="pointer-events-none absolute bottom-10 right-32 hidden h-10 w-10 rounded-full border border-emerald-400/20 lg:block" />

          {/* Content */}

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
            {/* Left content */}

            <div>
              {/* Badge */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Start Your Career Journey
              </div>

              {/* Heading */}

              <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to find your
                <span className="block text-emerald-400">
                  next opportunity?
                </span>
              </h2>

              {/* Description */}

              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Discover jobs, connect with companies, and take the next step
                toward your career with CareerConnect.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/jobs"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 sm:w-auto"
                >
                  <BriefcaseBusiness className="h-4 w-4" />

                  Explore Jobs

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:w-auto"
                >
                  <Users className="h-4 w-4" />

                  Create Account
                </Link>
              </div>
            </div>

            {/* Right visual */}

            <div className="relative mx-auto hidden w-full max-w-sm lg:block">
              {/* Main card */}

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl"
              >
                {/* Card header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      CareerConnect
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      Your career starts here
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                </div>

                {/* Stats */}

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">22+</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Live Jobs
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-white">15+</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Companies
                    </p>
                  </div>
                </div>

                {/* Checklist */}

                <div className="mt-5 space-y-3">
                  {[
                    "Discover relevant jobs",
                    "Apply with confidence",
                    "Track your applications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom progress */}

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      Career progress
                    </span>

                    <span className="font-semibold text-emerald-400">
                      Getting started
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: 0.5,
                      }}
                      className="h-full rounded-full bg-emerald-400"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CtaBand;