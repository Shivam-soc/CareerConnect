import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookmark,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

function JobOverview() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md">

      {/* Back */}
        <Link
            to="/jobs"
            className="mb-6 flex items-center gap-2 text-blue-600 transition hover:underline"
        >
            <FaArrowLeft />
            Back to Jobs
        </Link>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white">
            G
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-4xl font-bold">
                Frontend Developer
              </h1>

              <FaCheckCircle className="text-green-500" />

            </div>

            <h2 className="mt-2 text-xl font-semibold text-slate-600">
              Google
            </h2>

            <div className="mt-5 flex flex-wrap gap-6 text-slate-600">

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Bangalore
              </span>

              <span className="flex items-center gap-2">
                <FaMoneyBillWave />
                ₹22 LPA
              </span>

              <span className="flex items-center gap-2">
                <FaBriefcase />
                Full Time
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                Posted 2 days ago
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-4">

          <button className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100">
            <FaBookmark />
          </button>

          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
            Apply Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default JobOverview;
