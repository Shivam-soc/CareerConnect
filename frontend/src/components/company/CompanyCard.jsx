import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

function CompanyCard({ company }) {
  if (!company) return null;

  return (
    <Link
      to={`/companies/${company._id}`}
      className="group block h-full"
    >
      <div className="flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78]/40 hover:shadow-xl">

        {/* Logo */}

        {company.logo ? (
          <img
            src={company.logo}
            alt={company.name}
            className="h-16 w-16 object-contain"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-[#E8F7F3] text-2xl font-bold text-[#2E8B78]">
            {company.name?.charAt(0)}
          </div>
        )}

        {/* Company Name */}

        <h2 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-[#2E8B78]">
          {company.name}
        </h2>

        {/* Industry */}

        <p className="mt-2 text-slate-500">
          {company.industry}
        </p>

        {/* Details */}

        <div className="mt-6 space-y-3 text-slate-600">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#2E8B78]" />
            {company.location}
          </div>

          <div className="flex items-center gap-2">
            <FaUsers className="text-[#2E8B78]" />
            {company.size || "Not Available"}
          </div>

        </div>

        <div className="flex-1" />

        {/* Button */}

        <button className="mt-6 w-full rounded-2xl bg-[#2E8B78] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#236D5E]">
          View Company
        </button>

      </div>
    </Link>
  );
}

export default CompanyCard;