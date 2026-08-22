import {
  MapPin,
  IndianRupee,
  Clock3,
  BookmarkMinus,
  ArrowRight,
} from "lucide-react";

function SavedJobCard({ job }) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#2E8B78]
        hover:shadow-md
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-6">

        <div>

          <h3 className="text-xl font-semibold text-slate-900">
            {job.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#2E8B78]">
            {job.company}
          </p>

        </div>

        <button
          className="
            rounded-xl
            border
            border-slate-200
            p-2.5
            text-slate-500
            transition
            hover:border-red-200
            hover:bg-red-50
            hover:text-red-600
          "
        >
          <BookmarkMinus size={18} />
        </button>

      </div>

      {/* Job Details */}

      <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-500">

        <div className="flex items-center gap-2">

          <MapPin size={16} />

          <span>{job.location}</span>

        </div>

        <div className="flex items-center gap-2">

          <IndianRupee size={16} />

          <span>{job.salary}</span>

        </div>

        <div className="flex items-center gap-2">

          <Clock3 size={16} />

          <span>{job.posted}</span>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {job.type}
        </span>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#2E8B78]
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          Apply Now

          <ArrowRight size={16} />

        </button>

      </div>

    </article>
  );
}

export default SavedJobCard;