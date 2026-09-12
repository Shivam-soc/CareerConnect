import { Trash2 } from "lucide-react";
import { deleteJob } from "../../api/adminApi";
import { toast } from "react-hot-toast";

function JobRow({
  job,
  refresh,
}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Delete "${job.title}"?`
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(job._id);

      toast.success("Job deleted successfully.");

      refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Unable to delete job."
      );
    }
  };

  return (
    <tr className="border-t border-slate-200">

      {/* Job */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-slate-900">
            {job.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {job.employmentType} • {job.salary}
          </p>
        </div>
      </td>

      {/* Company */}
      <td className="px-6 py-5">
        {job.company?.name || "-"}
      </td>

      {/* Recruiter */}
      <td className="px-6 py-5">
        <div>
          <p className="font-medium">
            {job.postedBy?.fullName || "-"}
          </p>

          <p className="text-sm text-slate-500">
            {job.postedBy?.email}
          </p>
        </div>
      </td>

      {/* Location */}
      <td className="px-6 py-5">
        {job.location}
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            job.status === "Open"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {job.status}
        </span>
      </td>

      {/* Posted */}
      <td className="px-6 py-5">
        {new Date(job.createdAt).toLocaleDateString()}
      </td>

      {/* Action */}
      <td className="px-6 py-5 text-center">
        <button
          onClick={handleDelete}
          className="rounded-lg border border-red-200 p-2 text-red-600 transition hover:bg-red-50"
        >
          <Trash2 size={18} />
        </button>
      </td>

    </tr>
  );
}

export default JobRow;