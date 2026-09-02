import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function CompanySearch() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 shadow-xl">

      <div className="grid gap-4 md:grid-cols-4">

        {/* Search */}

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 px-4 transition-all duration-300 focus-within:border-[#2E8B78]">

          <FaSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Search companies..."
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />

        </div>

        {/* Location */}

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 px-4 transition-all duration-300 focus-within:border-[#2E8B78]">

          <FaMapMarkerAlt className="text-slate-400" />

          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent outline-none placeholder:text-slate-400"
          />

        </div>

        {/* Industry */}

        <select
          className="h-14 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition-all duration-300 focus:border-[#2E8B78]"
        >
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Automobile</option>
        </select>

        {/* Button */}

        <button
          className="h-14 rounded-2xl bg-[#2E8B78] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#236D5E] hover:shadow-lg"
        >
          Search
        </button>

      </div>

    </div>
  );
}

export default CompanySearch;