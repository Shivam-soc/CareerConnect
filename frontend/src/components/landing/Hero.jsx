import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { getJobs } from "../../api/jobApi";

import Button from "../ui/Button";
import SearchInput from "../ui/SearchInput";
import Badge from "../ui/Badge";
import HeroJobCard from "./HeroJobCard";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

function Hero({ search, setSearch }) {
  const navigate = useNavigate();

  const [featuredJob, setFeaturedJob] = useState(null);

  useEffect(() => {
    const fetchFeaturedJob = async () => {
      try {
        const response = await getJobs({
          limit: 1,
          sort: "latest",
        });

        setFeaturedJob(response.data.jobs?.[0] || null);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeaturedJob();
  }, []);

  const handleSearch = () => {
    if (!search.trim()) return;

    navigate(`/jobs?search=${encodeURIComponent(search)}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAF8]">
      {/* Background Grid */}

      <div
        className="absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px,transparent 1px),linear-gradient(90deg,#0f172a 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#2E8B78]/10 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-100px] top-0 h-[430px] w-[430px] rounded-full bg-blue-300/10 blur-[180px]"
        />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2E8B78]/10 blur-[150px]" />
      </div>

      {/* Floating Dots */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-24 top-32 h-4 w-4 rounded-full bg-[#2E8B78]/60"
      />

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-40 top-44 h-3 w-3 rounded-full bg-blue-400/60"
      />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-[48%] top-20 h-2 w-2 rounded-full bg-[#2E8B78]"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <Badge
                variant="primary"
                size="md"
                className="w-fit gap-2"
              >
                <Sparkles size={15} />
                Trusted by 15,000+ Students
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl"
            >
              Find your next

              <span className="block text-[#2E8B78]">
                Dream Career
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
            >
              Discover internships, placements and full-time opportunities
              from India's leading startups and technology companies.
            </motion.p>

            {/* Search */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-10 rounded-2xl bg-white p-2 shadow-lg"
            >
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/jobs">
                <Button size="lg">
                  Explore Jobs
                </Button>
              </Link>

              <Link to="/companies">
                <Button
                  variant="secondary"
                  size="lg"
                >
                  Browse Companies
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              className="mt-12 flex gap-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#2E8B78]">
                  15K+
                </h3>
                <p className="text-sm text-slate-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2E8B78]">
                  1200+
                </h3>
                <p className="text-sm text-slate-500">
                  Jobs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#2E8B78]">
                  350+
                </h3>
                <p className="text-sm text-slate-500">
                  Companies
                </p>
              </div>
            </motion.div>

            {/* Popular Skills */}

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
              className="mt-10 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500"
            >
              Popular Searches
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.7}
              className="flex flex-wrap gap-3"
            >
              {[
                "React",
                "Node.js",
                "AI",
                "VLSI",
                "Cloud",
                "Java",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="gray"
                  size="md"
                  className="cursor-pointer transition hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3]"
                  onClick={() =>
                    navigate(`/jobs?search=${skill}`)
                  }
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full bg-[#2E8B78]/10 blur-[140px]" />
            </div>

            <HeroJobCard job={featuredJob} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;