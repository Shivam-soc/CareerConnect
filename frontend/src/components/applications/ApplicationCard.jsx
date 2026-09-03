import { Link } from "react-router-dom";
import {
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

function ApplicationCard({ application }) {
  const job = application?.job;

  // If job has been deleted
  if (!job) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <h3 className="text-lg font-semibold text-red-600">
          Job Not Available
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          The job you applied for is no longer available.
        </p>

        <div className="mt-4">
          <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium">
            {application.status}
          </span>
        </div>
      </div>
    );
  }

  const company = job.company || {};

  const statusStyles = {
    Applied: "bg-slate-100 text-slate-700",
    "Under Review": "bg-blue-100 text-blue-700",
    Shortlisted: "bg-purple-100 text-purple-700",
    Interview: "bg-amber-100 text-amber-700",
    Selected: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#2E8B78] hover:shadow-sm">

      {/* Top */}

      <div className="flex items-start justify-between gap-6">

        <div className="flex items-center gap-4">

          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="h-14 w-14 rounded-xl border object-cover"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F7F3] text-xl font-bold text-[#2E8B78]">
              {company.name?.charAt(0) || "C"}
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {job.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-[#2E8B78]">
              {company.name || "Company"}
            </p>
          </div>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusStyles[application.status] ||
            "bg-slate-100 text-slate-700"
          }`}
        >
          {application.status}
        </span>

      </div>

      {/* Details */}

      <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          Applied{" "}
          {new Date(application.createdAt).toLocaleDateString()}
        </div>

        <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {job.employmentType}
        </span>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">

        <p className="text-sm text-slate-500">
          Track your application status.
        </p>

        <Link
          to={`/jobs/${job._id}`}
          className="flex items-center gap-2 text-sm font-medium text-[#2E8B78] transition hover:gap-3"
        >
          View Job
          <ArrowRight size={16} />
        </Link>

      </div>

    </div>
  );
}

export default ApplicationCard;