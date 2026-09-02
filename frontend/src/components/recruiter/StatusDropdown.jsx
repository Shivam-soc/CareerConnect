import { useState } from "react";
import { updateApplicationStatus } from "../../api/applicationApi";

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

    setStatus(newStatus);

    try {
      setLoading(true);

      await updateApplicationStatus(
        application._id,
        newStatus
      );

      if (refresh) {
        refresh();
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update application status."
      );

      setStatus(application.status);
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