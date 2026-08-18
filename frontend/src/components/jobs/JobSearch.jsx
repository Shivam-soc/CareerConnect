import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function JobSearch() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <div className="grid gap-4 md:grid-cols-4">

        {/* Job Title */}
        <div className="flex items-center rounded-2xl border border-slate-200 px-4">

          <FaSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>

        {/* Location */}
        <div className="flex items-center rounded-2xl border border-slate-200 px-4">

          <FaMapMarkerAlt className="text-slate-400" />

          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent p-4 outline-none"
          />

        </div>

        {/* Experience */}
        <div className="flex items-center rounded-2xl border border-slate-200 px-4">

          <FaBriefcase className="text-slate-400" />

          <select className="w-full bg-transparent p-4 outline-none">
            <option>Experience</option>
            <option>Fresher</option>
            <option>1–3 Years</option>
            <option>3–5 Years</option>
            <option>5+ Years</option>
          </select>

        </div>

        {/* Search Button */}
        <button className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">
          Search Jobs
        </button>

      </div>
    </div>
  );
}

export default JobSearch;