import { Search } from "lucide-react";

const filters = [
  "All",
  "Internship",
  "Full Time",
  "Remote",
];

function SavedJobsFilters({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search saved jobs..."
          className="
            h-11
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            pl-11
            pr-4
            text-sm
            text-slate-800
            outline-none
            transition
            focus:border-[#2E8B78]
            focus:bg-white
            focus:ring-2
            focus:ring-[#2E8B78]/10
          "
        />

      </div>

      {/* Filter Pills */}

      <div className="mt-5 flex flex-wrap gap-3">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              filter === item
                ? "bg-[#2E8B78] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </section>
  );
}

export default SavedJobsFilters;