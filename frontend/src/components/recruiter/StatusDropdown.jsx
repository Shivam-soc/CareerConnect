import { useState } from "react";
import { updateApplicationStatus } from "../../api/applicationApi";
import { toast } from "react-hot-toast";

function StatusDropdown({
  application,
  refresh,
}) {
  const [status, setStatus] = useState(application.status);
  const [loading, setLoading] = useState(false);

  const statuses = [
    "Applied",
    "Under Review",
    "Shortlisted",
    "Interview",
    "Selected",
    "Rejected",
  ];

const handleChange = async (e) => {
  const newStatus = e.target.value;

  try {
    setLoading(true);

    await updateApplicationStatus(
      application._id,
      newStatus
    );

    setStatus(newStatus);

    if (refresh) {
      await refresh();
    }

    toast.success("Application status updated successfully.");
  } catch (error) {
    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Failed to update application status."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <select
      value={status}
      disabled={loading}
      onChange={handleChange}
      className="
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        outline-none
        transition
        focus:border-[#2E8B78]
      "
    >
      {statuses.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}

export default StatusDropdown;