import { useState } from "react";
import { Search } from "lucide-react";

const filters = [
  "All",
  "Applied",
  "Under Review",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

function ApplicationsFilters({
  applications,
  setFilteredApplications,
}) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filterApplications = (text, status) => {
    let filtered = [...applications];

    // Search by Job Title or Company Name
    if (text.trim()) {
      filtered = filtered.filter((application) => {
        const job = application.job;

        if (!job) return false;

        return (
          job.title
            ?.toLowerCase()
            .includes(text.toLowerCase()) ||
          job.company?.name
            ?.toLowerCase()
            .includes(text.toLowerCase())
        );
      });
    }

    // Filter by Status
    if (status !== "All") {
      filtered = filtered.filter(
        (application) => application.status === status
      );
    }

    setFilteredApplications(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    filterApplications(value, activeFilter);
  };

  const handleFilter = (status) => {
    setActiveFilter(status);

    filterApplications(search, status);
  };

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
          onChange={handleSearch}
          placeholder="Search by company or job title..."
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
          "
        />

      </div>

      {/* Status Filters */}

      <div className="mt-5 flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-[#2E8B78] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

    </section>
  );
}

export default ApplicationsFilters;