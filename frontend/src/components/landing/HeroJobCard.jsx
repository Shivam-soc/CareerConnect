import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Clock3,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

function HeroJobCard({ job, loading = false }) {
  /* --------------------------------
     LOADING STATE
  --------------------------------- */

  if (loading) {
    return (
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl sm:rounded-[32px] sm:p-7">
        <div className="animate-pulse">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 gap-4">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-200 sm:h-16 sm:w-16" />

              <div className="min-w-0">
                <div className="h-4 w-28 rounded bg-slate-200" />
                <div className="mt-2 h-3 w-36 rounded bg-slate-100" />
                <div className="mt-2 h-3 w-24 rounded bg-slate-100" />
              </div>
            </div>

            <div className="h-7 w-16 shrink-0 rounded-full bg-slate-200" />
          </div>

          {/* Featured badge */}
          <div className="mt-6 h-6 w-36 rounded-full bg-slate-200" />

          {/* Title */}
          <div className="mt-5 space-y-3">
            <div className="h-7 w-4/5 rounded-lg bg-slate-200" />
            <div className="h-7 w-3/5 rounded-lg bg-slate-200" />
          </div>

          {/* Description */}
          <div className="mt-5 space-y-2">
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="h-3 w-11/12 rounded bg-slate-100" />
            <div className="h-3 w-3/4 rounded bg-slate-100" />
          </div>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-2">
            <div className="h-9 w-28 rounded-full bg-slate-100" />
            <div className="h-9 w-28 rounded-full bg-slate-100" />
            <div className="h-9 w-24 rounded-full bg-slate-100" />
          </div>

          {/* Skills */}
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-16 rounded-full bg-slate-100" />
            <div className="h-7 w-20 rounded-full bg-slate-100" />
            <div className="h-7 w-14 rounded-full bg-slate-100" />
          </div>

          {/* Salary */}
          <div className="mt-7 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 sm:gap-6 sm:p-5">
            <div>
              <div className="h-3 w-20 rounded bg-slate-200" />
              <div className="mt-2 h-6 w-24 rounded bg-slate-200" />
            </div>

            <div>
              <div className="h-3 w-20 rounded bg-slate-200" />
              <div className="mt-2 h-5 w-24 rounded bg-slate-200" />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-7 flex items-center justify-between gap-4">
            <div className="h-3 w-36 rounded bg-slate-100" />
            <div className="h-11 w-28 rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  /* --------------------------------
     EMPTY STATE
  --------------------------------- */

  if (!job) {
    return (
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:rounded-[32px] sm:p-8">
        <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F7F3] text-[#2E8B78]">
            <Briefcase size={28} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900">
            Explore your next opportunity
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Browse the latest internships, placements and full-time
            opportunities on CareerConnect.
          </p>

          <Link
            to="/jobs"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#236D5E]"
          >
            Browse Jobs
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  /* --------------------------------
     DATA
  --------------------------------- */

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

  const companyName = job.company?.name || "Company";

  const companyInitial = companyName
    .charAt(0)
    .toUpperCase();

  const skills = Array.isArray(job.skills)
    ? job.skills.slice(0, 3)
    : [];

  const status = job.status || "Open";

  const isOpen =
    status.toLowerCase() === "open";

  /* --------------------------------
     CARD
  --------------------------------- */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-white to-[#F5FCFA] p-5 shadow-xl shadow-slate-900/10 sm:rounded-[32px] sm:p-7"
    >
      {/* Decorative glow */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2E8B78]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl" />

      {/* --------------------------------
          HEADER
      --------------------------------- */}

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3 sm:gap-4">
          {/* Company Logo */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-16 sm:w-16">
            {job.company?.logo ? (
              <img
                src={job.company.logo}
                alt={`${companyName} logo`}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                loading="lazy"
              />
            ) : (
              <span className="text-xl font-bold text-[#2E8B78] sm:text-2xl">
                {companyInitial}
              </span>
            )}
          </div>

          {/* Company information */}

          <div className="min-w-0 pt-1">
            <div className="flex min-w-0 items-center gap-1.5">
              <h3 className="truncate text-sm font-bold text-slate-900 sm:text-base">
                {companyName}
              </h3>

              <BadgeCheck
                size={16}
                className="shrink-0 text-blue-500"
              />
            </div>

            <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
              {job.company?.location ||
                job.location ||
                "India"}
            </p>

            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400 sm:text-xs">
              <Clock3 size={12} />
              <span>Posted {postedDate}</span>
            </div>
          </div>
        </div>

        {/* Status */}

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold sm:px-3 sm:text-xs ${
            isOpen
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* --------------------------------
          FEATURED BADGE
      --------------------------------- */}

      <div className="relative mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#E8F7F3] px-3 py-1.5 text-[11px] font-bold text-[#2E8B78] sm:text-xs">
        ⭐ Featured Opportunity
      </div>

      {/* --------------------------------
          TITLE
      --------------------------------- */}

      <h2 className="relative mt-4 line-clamp-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
        {job.title}
      </h2>

      {/* --------------------------------
          DESCRIPTION
      --------------------------------- */}

      <p className="relative mt-3 line-clamp-3 text-sm leading-6 text-slate-600 sm:leading-7">
        {job.description ||
          "Discover this exciting career opportunity and take the next step in your professional journey."}
      </p>

      {/* --------------------------------
          JOB META
      --------------------------------- */}

      <div className="relative mt-5 flex flex-wrap gap-2">
        {job.location && (
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            <MapPin
              size={14}
              className="shrink-0"
            />

            <span className="truncate">
              {job.location}
            </span>
          </span>
        )}

        {job.employmentType && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            <Briefcase
              size={14}
              className="shrink-0"
            />

            {job.employmentType}
          </span>
        )}

        {job.experience && (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            👨‍💻 {job.experience}
          </span>
        )}
      </div>

      {/* --------------------------------
          SKILLS
      --------------------------------- */}

      {skills.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#E8F7F3] px-3 py-1.5 text-[11px] font-semibold text-[#2E8B78] sm:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* --------------------------------
          SALARY + DEADLINE
      --------------------------------- */}

      <div className="relative mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 sm:gap-6 sm:p-5">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            CTC Offered
          </p>

          <h3 className="mt-1 truncate text-lg font-extrabold text-[#2E8B78] sm:text-2xl">
            {job.salary || "Not disclosed"}
          </h3>
        </div>

        <div className="min-w-0 border-l border-slate-200 pl-3 sm:pl-6">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
            Apply Before
          </p>

          <h3 className="mt-1 truncate text-sm font-bold text-slate-900 sm:text-base">
            {deadline}
          </h3>
        </div>
      </div>

      {/* --------------------------------
          FOOTER
      --------------------------------- */}

      <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500 sm:max-w-[220px] sm:text-sm">
          Take the next step toward your career goals.
        </p>

        <Link
          to={`/jobs/${job._id}`}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#2E8B78]/20 transition hover:bg-[#236D5E] hover:shadow-lg active:scale-[0.98] sm:w-auto"
        >
          View Job
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.div>
  );
}

export default HeroJobCard;