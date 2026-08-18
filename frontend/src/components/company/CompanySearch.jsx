import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function CompanySearch() {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-xl">

      <div className="grid gap-4 md:grid-cols-4">

        <div className="flex items-center gap-3 rounded-2xl border p-4">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-3 rounded-2xl border p-4">
          <FaMapMarkerAlt className="text-slate-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>

        <select className="rounded-2xl border p-4 outline-none">
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Automobile</option>
        </select>

        <button className="rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
          Search
        </button>

      </div>

    </div>
  );
}

export default CompanySearch;