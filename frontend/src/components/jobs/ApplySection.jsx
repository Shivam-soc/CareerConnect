import { useState } from "react";
import {
  FaBookmark,
  FaShareAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

function ApplySection() {

  const [saved, setSaved] = useState(false);

  return (
    <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm">

      <button
        onClick={() => alert("Application Submitted Successfully!")}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white"
      >
        Apply Now
      </button>

      <button
        onClick={() => setSaved(!saved)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-3"
      >
        <FaBookmark />
        {saved ? "Saved" : "Save Job"}
      </button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Job link copied!");
        }}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border py-3"
      >
        <FaShareAlt />
        Share Job
      </button>

    </div>
  );
}

export default ApplySection;