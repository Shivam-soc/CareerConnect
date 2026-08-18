import JobCard from "./JobCard";

const similarJobs = [
  {
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Hyderabad",
    salary: "₹18 LPA",
    type: "Full Time",
    experience: "2–4 Years",
    rating: "4.8",
    posted: "1 day ago",
    verified: true,
    skills: ["React", "TypeScript", "Azure"],
  },
  {
    company: "Adobe",
    title: "Software Engineer",
    location: "Noida",
    salary: "₹20 LPA",
    type: "Hybrid",
    experience: "Fresher",
    rating: "4.7",
    posted: "Today",
    verified: true,
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    company: "Amazon",
    title: "Cloud Engineer",
    location: "Pune",
    salary: "₹24 LPA",
    type: "Remote",
    experience: "2–5 Years",
    rating: "4.9",
    posted: "3 days ago",
    verified: true,
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

function SimilarJobs() {
  return (
    <section className="mt-16">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Similar Jobs
          </h2>

          <p className="mt-2 text-slate-500">
            Explore opportunities related to this role.
          </p>
        </div>

        <button className="rounded-xl border border-slate-300 px-5 py-2 transition hover:bg-slate-100">
          View All
        </button>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {similarJobs.map((job) => (
          <JobCard
            key={`${job.company}-${job.title}`}
            {...job}
          />
        ))}

      </div>

    </section>
  );
}

export default SimilarJobs;