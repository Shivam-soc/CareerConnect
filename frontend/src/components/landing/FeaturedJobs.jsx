import { useState } from "react";
import JobCard from "../jobs/JobCard";

function FeaturedJobs({ search = "" }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const jobs = [
    {
      id: 1,
      company: "Google",
      title: "Frontend Developer",
      location: "Bangalore",
      salary: "₹22 LPA",
      experience: "2-4 Years",
      type: "Full Time",
      rating: 4.9,
      posted: "2 days ago",
      verified: true,
      skills: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      company: "Microsoft",
      title: "Backend Developer",
      location: "Hyderabad",
      salary: "₹18 LPA",
      experience: "1-3 Years",
      type: "Remote",
      rating: 4.8,
      posted: "1 day ago",
      verified: true,
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      company: "Adobe",
      title: "Software Engineer",
      location: "Pune",
      salary: "₹20 LPA",
      experience: "0-2 Years",
      type: "Hybrid",
      rating: 4.7,
      posted: "5 days ago",
      verified: true,
      skills: ["Java", "Spring Boot", "SQL"],
    },
  ];

  const filters = [
    "All",
    "Full Time",
    "Remote",
    "Hybrid",
    "Internship",
    "Fresher",
  ];

  const keyword = search.trim().toLowerCase();

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword);

    const matchesFilter =
      selectedFilter === "All" ||
      job.type === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">

        <div>

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Jobs
          </h2>

          <p className="mt-2 text-slate-500">
            Discover opportunities from the world's top companies.
          </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          View All Jobs →
        </button>

      </div>

      {/* Filters */}

      <div className="mb-10 flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition

            ${
              selectedFilter === filter
                ? "bg-blue-600 text-white shadow-md"
                : "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

      {/* Job Cards */}

      {filteredJobs.length > 0 ? (

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredJobs.map((job) => (

            <JobCard
              key={job.id}
              {...job}
            />

          ))}

        </div>

      ) : (

        <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">

          <h3 className="text-2xl font-bold">
            No Jobs Found
          </h3>

          <p className="mt-2 text-slate-500">
            Try another search or filter.
          </p>

        </div>

      )}

    </section>
  );
}

export default FeaturedJobs;