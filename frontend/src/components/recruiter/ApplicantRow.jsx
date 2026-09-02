import { ExternalLink } from "lucide-react";
import StatusDropdown from "./StatusDropdown";

function ApplicantRow({
  application,
  refresh,
}) {
  return (
    <tr className="border-t border-slate-200">
      {/* Candidate */}

      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-slate-900">
            {application.student?.fullName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {application.student?.email}
          </p>
        </div>
      </td>

      {/* Resume */}

      <td className="px-6 py-5">
        {application.resume ? (
          <a
            href={application.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2E8B78] hover:underline"
          >
            View Resume

            <ExternalLink size={16} />
          </a>
        ) : (
          <span className="text-slate-400">
            Not Uploaded
          </span>
        )}
      </td>

      {/* Cover Letter */}

      <td className="px-6 py-5 max-w-xs">
        <p className="line-clamp-2 text-sm text-slate-600">
          {application.coverLetter || "No Cover Letter"}
        </p>
      </td>

      {/* Status */}

      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold
          ${
            application.status === "Applied"
              ? "bg-slate-100 text-slate-700"
              : application.status === "Under Review"
              ? "bg-blue-100 text-blue-700"
              : application.status === "Shortlisted"
              ? "bg-yellow-100 text-yellow-700"
              : application.status === "Interview"
              ? "bg-purple-100 text-purple-700"
              : application.status === "Selected"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {application.status}
        </span>
      </td>

      {/* Action */}

      <td className="px-6 py-5 text-right">
        <StatusDropdown
          application={application}
          refresh={refresh}
        />
      </td>
    </tr>
  );
}

export default ApplicantRow;