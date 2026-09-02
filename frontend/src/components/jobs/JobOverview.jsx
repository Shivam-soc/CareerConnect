import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock3,
  IndianRupee,
  Bookmark,
  Share2,
} from "lucide-react";

function JobOverview({ job }) {
  if (!job) return null;

  const postedDate = new Date(job.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">

      {/* Back */}

      <Link
        to="/jobs"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#2E8B78]"
      >
        <ArrowLeft size={17} />
        Back to Jobs
      </Link>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">

        {/* Company Logo */}

        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden">

          {job.company?.logo ? (
            <img
              src={job.company.logo}
              alt={job.company.name}
              className="h-14 w-14 object-contain"
            />
          ) : (
            <span className="text-3xl font-bold text-[#2E8B78]">
              {job.company?.name?.charAt(0)}
            </span>
          )}

        </div>

        {/* Content */}

        <div className="flex-1">

          {/* Company */}

          <div className="flex flex-wrap items-center gap-3">

            <h2 className="text-lg font-semibold text-slate-700">
              {job.company?.name}
            </h2>

          </div>

          {/* Job Title */}

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            {job.title}
          </h1>

          {/* Meta */}

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
              <MapPin size={16} />
              {job.location}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
              <Briefcase size={16} />
              {job.experience}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm">
              <Clock3 size={16} />
              {postedDate}
            </span>

            <span className="flex items-center gap-2 rounded-full bg-[#E8F7F3] px-4 py-2 text-sm font-semibold text-[#2E8B78]">
              <IndianRupee size={16} />
              {job.salary}
            </span>

            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm">
              {job.employmentType}
            </span>

          </div>

          {/* Skills */}

          <div className="mt-8 flex flex-wrap gap-3">

            {job.skills?.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition hover:border-[#2E8B78] hover:bg-[#E8F7F3]"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Actions */}

        <div className="flex gap-3 lg:flex-col">

          <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium transition hover:border-[#2E8B78] hover:text-[#2E8B78]">
            <Bookmark size={18} />
            Save
          </button>

          <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium transition hover:border-[#2E8B78] hover:text-[#2E8B78]">
            <Share2 size={18} />
            Share
          </button>

        </div>

      </div>

    </section>
  );
}

export default JobOverview;