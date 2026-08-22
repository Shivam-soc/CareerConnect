import { useMemo, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import SavedJobsHeader from "../components/savedJobs/SavedJobsHeader";
import SavedJobsFilters from "../components/savedJobs/SavedJobsFilters";
import SavedJobsList from "../components/savedJobs/SavedJobsList";

import jobs from "../data/jobs";

function SavedJobs() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const savedJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        job.type === filter;

      return job.saved && matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <DashboardLayout>

      <SavedJobsHeader />

      <div className="mt-6">
        <SavedJobsFilters
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div className="mt-6">
        <SavedJobsList jobs={savedJobs} />
      </div>

    </DashboardLayout>
  );
}

export default SavedJobs;