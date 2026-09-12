import { Trash2 } from "lucide-react";

import { deleteUser } from "../../api/adminApi";
import { toast } from "react-hot-toast";

function UserRow({
  user,
  refresh,
}) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Delete ${user.fullName}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(user._id);

      refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Unable to delete user."
      );
    }
  };

  return (
    <tr className="border-t border-slate-200">

      <td className="px-6 py-5 font-medium">
        {user.fullName}
      </td>

      <td className="px-6 py-5">
        {user.email}
      </td>

      <td className="px-6 py-5">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold
          ${
            user.role === "admin"
              ? "bg-red-100 text-red-700"
              : user.role === "recruiter"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {user.role}
        </span>

      </td>

      <td className="px-6 py-5">
        {new Date(user.createdAt).toLocaleDateString()}
      </td>

      <td className="px-6 py-5 text-center">

        <button
          onClick={handleDelete}
          className="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
        >
          <Trash2 size={18} />
        </button>

      </td>

    </tr>
  );
}

export default UserRow;