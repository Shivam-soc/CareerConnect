import { Search } from "lucide-react";

const filters = [
  "All",
  "Applied",
  "Under Review",
  "Interview",
  "Offer",
  "Rejected",
];

function ApplicationsFilters() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search company or role..."
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
            outline-none
            transition
            focus:border-[#2E8B78]
            focus:bg-white
            focus:ring-2
            focus:ring-[#2E8B78]/10
          "
        />

      </div>

      {/* Filters */}

      <div className="mt-5 flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button
            key={filter}
            className={`
              rounded-xl
              px-4
              py-2
              text-sm
              font-medium
              transition
              ${
                filter === "All"
                  ? "bg-[#2E8B78] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            {filter}
          </button>

        ))}

      </div>

    </section>
  );
}

export default ApplicationsFilters;