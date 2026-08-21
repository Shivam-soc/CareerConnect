import { useMemo, useState } from "react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import JobCard from "../components/jobs/JobCard";

import SearchInput from "../components/ui/SearchInput";
import EmptyState from "../components/ui/EmptyState";
import SectionHeading from "../components/ui/SectionHeading";

import jobs from "../data/jobs";

function SavedJobs() {
  const [search, setSearch] = useState("");

  const savedJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.saved &&
        (
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.location.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <SectionHeading
            title="Saved Jobs"
            subtitle="Jobs you've bookmarked for later."
          />

          <div className="mb-8">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search saved jobs..."
            />
          </div>

          {savedJobs.length === 0 ? (
            <EmptyState
              title="No Saved Jobs"
              description="You haven't saved any jobs yet."
            />
          ) : (
            <div className="space-y-6">
              {savedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}
            </div>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default SavedJobs;