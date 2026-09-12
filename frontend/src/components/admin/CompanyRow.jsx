import { Trash2 } from "lucide-react";
import { deleteCompany } from "../../api/adminApi";
import { toast } from "react-hot-toast";

function CompanyRow({
  company,
  refresh,
}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Delete ${company.name}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteCompany(company._id);

      toast.success("Company deleted successfully.");

      refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to delete company."
      );
    }
  };

  return (
    <tr className="border-t border-slate-200">

      {/* Company */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">

          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 w-10 rounded-lg object-cover border"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-500">
              {company.name.charAt(0)}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-slate-900">
              {company.name}
            </h3>

            <p className="text-sm text-slate-500">
              {company.website || "No Website"}
            </p>
          </div>

        </div>
      </td>

      {/* Industry */}
      <td className="px-6 py-5">
        {company.industry || "-"}
      </td>

      {/* Location */}
      <td className="px-6 py-5">
        {company.location || "-"}
      </td>

      {/* Recruiter */}
      <td className="px-6 py-5">
        <div>
          <p className="font-medium">
            {company.recruiter?.fullName}
          </p>

          <p className="text-sm text-slate-500">
            {company.recruiter?.email}
          </p>
        </div>
      </td>

      {/* Created */}
      <td className="px-6 py-5">
        {new Date(company.createdAt).toLocaleDateString()}
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

export default CompanyRow;