import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Clock3,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function HeroJobCard({ job }) {
  if (!job) {
    return (
      <div className="flex h-[500px] w-full max-w-md animate-pulse items-center justify-center rounded-[32px] border border-slate-200 bg-white shadow-2xl">
        <p className="text-slate-500">Loading featured job...</p>
      </div>
    );
  }

  const postedDate = job.createdAt
    ? new Date(job.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Recently";

  const deadline = job.deadline
    ? new Date(job.deadline).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Open Until Filled";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
        rotate: -2,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
        rotate: [-2, -1, -2],
      }}
      transition={{
        opacity: {
          duration: 0.6,
        },
        x: {
          duration: 0.6,
        },
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
        y: -12,
        rotate: 0,
        scale: 1.02,
      }}
      className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-[#F5FCFA] p-7 shadow-2xl"
    >
      {/* Glow */}

      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#2E8B78]/10 blur-3xl" />

      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            {job.company?.logo ? (
              <img
                src={job.company.logo}
                alt={job.company.name}
                className="h-10 w-10 object-contain"
              />
            ) : (
              <span className="text-2xl font-bold text-[#2E8B78]">
                {job.company?.name?.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-bold text-slate-900">
                {job.company?.name}
              </h3>

              <BadgeCheck
                size={16}
                className="text-blue-500"
              />
            </div>

            <p className="text-sm text-slate-500">
              {job.company?.website
                ?.replace("https://", "")
                .replace("http://", "") || job.company?.location}
            </p>

            <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
              <Clock3 size={12} />
              Posted {postedDate}
            </div>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            job.status === "Open"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {job.status}
        </span>
      </div>

      {/* Featured */}

      <div className="mt-6 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
        ⭐ Featured Opportunity
      </div>

      {/* Title */}

      <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
        {job.title}
      </h2>

      {/* Description */}

      <p className="mt-4 line-clamp-2 text-sm leading-7 text-slate-600">
        {job.description}
      </p>

      {/* Meta */}

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
          <MapPin size={15} />
          {job.location}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
          <Briefcase size={15} />
          {job.employmentType}
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
          👨‍💻 {job.experience}
        </span>
      </div>

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-2">
        {job.skills?.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#E8F7F3] px-3 py-1 text-xs font-semibold text-[#2E8B78]"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary + Deadline */}

      <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-slate-50 p-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            CTC Offered
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#2E8B78]">
            {job.salary}
          </h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Apply Before
          </p>

          <h3 className="mt-1 font-semibold text-slate-900">
            {deadline}
          </h3>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Join one of India's fastest growing companies.
        </p>

        <Link to={`/jobs/${job._id}`}>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex items-center gap-2 rounded-2xl bg-[#2E8B78] px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-[#236D5E]"
          >
            View Job

            <ArrowUpRight size={18} />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default HeroJobCard;