import { MapPin, CalendarDays, ArrowRight } from "lucide-react";

function ApplicationCard({ application }) {

  const statusStyles = {
    Applied: "bg-slate-100 text-slate-700",
    "Under Review": "bg-blue-100 text-blue-700",
    Interview: "bg-amber-100 text-amber-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        transition
        hover:border-[#2E8B78]
      "
    >

      {/* Top */}

      <div className="flex items-start justify-between gap-6">

        <div>

          <h3 className="text-lg font-semibold text-slate-900">
            {application.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-[#2E8B78]">
            {application.company}
          </p>

        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
            ${statusStyles[application.status]}
          `}
        >
          {application.status}
        </span>

      </div>

      {/* Details */}

      <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">

        <div className="flex items-center gap-2">

          <MapPin size={16} />

          {application.location}

        </div>

        <div className="flex items-center gap-2">

          <CalendarDays size={16} />

          Applied {application.appliedDate}

        </div>

        <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {application.type}
        </span>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">

        <p className="text-sm text-slate-500">
          Track your application status.
        </p>

        <button
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#2E8B78]
            transition
            hover:gap-3
          "
        >
          View Details

          <ArrowRight size={16} />

        </button>

      </div>

    </div>
  );
}

export default ApplicationCard;