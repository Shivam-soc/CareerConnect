import { Trash2, ExternalLink } from "lucide-react";
import { deleteApplication } from "../../api/adminApi";

function ApplicationRow({
  application,
  refresh,
}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await deleteApplication(application._id);

      alert("Application deleted successfully.");

      refresh();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Unable to delete application."
      );
    }
  };

  return (
    <tr className="border-t border-slate-200">

      {/* Student */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-slate-900">
            {application.student?.fullName}
          </h3>

          <p className="text-sm text-slate-500">
            {application.student?.email}
          </p>
        </div>
      </td>

      {/* Job */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-medium">
            {application.job?.title}
          </h3>

          <p className="text-sm text-slate-500">
            {application.job?.employmentType}
          </p>
        </div>
      </td>

      {/* Company */}
      <td className="px-6 py-5">
        {application.job?.company?.name || "-"}
      </td>

      {/* Recruiter */}
      <td className="px-6 py-5">
        <div>
          <p className="font-medium">
            {application.recruiter?.fullName}
          </p>

          <p className="text-sm text-slate-500">
            {application.recruiter?.email}
          </p>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
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

      {/* Applied Date */}
      <td className="px-6 py-5">
        {new Date(application.createdAt).toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex items-center justify-center gap-2">

          {application.resume && (
            <a
              href={application.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50"
              title="View Resume"
            >
              <ExternalLink size={18} />
            </a>
          )}

          <button
            onClick={handleDelete}
            className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
            title="Delete Application"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </td>

    </tr>
  );
}

export default ApplicationRow;