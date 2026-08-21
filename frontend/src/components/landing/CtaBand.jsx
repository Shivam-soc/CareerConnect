import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF8] py-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#2E8B78]/10 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-[170px]" />

      </div>

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-white px-8 py-16 shadow-xl transition-all duration-500 hover:shadow-2xl lg:px-14 lg:py-20"
        >

          {/* Animated Top Border */}

          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2E8B78] via-emerald-300 to-[#2E8B78]" />

          {/* Floating Dots */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute left-10 top-10 h-3 w-3 rounded-full bg-[#2E8B78]/40"
          />

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute right-12 top-16 h-4 w-4 rounded-full bg-emerald-300"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 h-2.5 w-2.5 rounded-full bg-[#2E8B78]"
          />

          {/* Content */}

          <div className="mx-auto max-w-3xl text-center">

            <Badge
              variant="primary"
              size="md"
              className="mx-auto w-fit gap-2"
            >
              <Sparkles size={15} />
              Join CareerConnect Today
            </Badge>

            <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">

              Ready to find your
              <br />
              next opportunity?

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

              Join thousands of students discovering internships,
              placements and full-time opportunities from top companies.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link to="/register">

                <Button
                  size="lg"
                  className="group hover:-translate-y-1 hover:shadow-xl"
                >

                  Get Started

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Button>

              </Link>

              <Link to="/jobs">

                <Button
                  variant="secondary"
                  size="lg"
                  className="hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3]"
                >

                  Browse Jobs

                </Button>

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CtaBand;