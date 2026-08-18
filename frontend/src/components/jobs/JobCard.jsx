import {Link} from "react-router-dom";
import {
  FaBookmark,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

function JobCard({
  company,
  title,
  location,
  salary,
  type,
  experience,
  rating,
  posted,
  skills = [],
  verified = false,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ...">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          {/* Company Logo */}

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white shadow">
            {company.charAt(0)}
          </div>

          <div>

            <div className="flex items-center gap-2">

              <h3 className="text-lg font-bold">
                {company}
              </h3>

              {verified && (
                <FaCheckCircle className="text-green-500" />
              )}

            </div>

            <p className="text-sm text-slate-500">
              Verified Company
            </p>

          </div>

        </div>

        <button className="rounded-full p-2 transition hover:bg-slate-100">
          <FaBookmark className="text-slate-500 group-hover:text-blue-600" />
        </button>

      </div>

      {/* Job Title */}

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      {/* Rating */}

      <div className="mt-3 flex items-center gap-2">

        <FaStar className="text-yellow-400" />

        <span className="font-semibold">
          {rating}
        </span>

      </div>

      {/* Information */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-slate-600">
          <FaMapMarkerAlt />
          {location}
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FaMoneyBillWave />
          {salary}
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FaBriefcase />
          {type}
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FaClock />
          {experience}
        </div>

      </div>

      {/* Skills */}

      <div className="mt-6 flex flex-wrap gap-2">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {posted}
        </span>

        <Link
          to={`/jobs/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default JobCard;