import { Link } from "react-router-dom";

const jobs = [
  {
    id: 1,
    company: "Netflix",
    role: "Frontend Developer",
    location: "Remote",
    salary: "₹18 LPA",
  },
  {
    id: 2,
    company: "Adobe",
    role: "React Developer",
    location: "Noida",
    salary: "₹15 LPA",
  },
  {
    id: 3,
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore",
    salary: "₹28 LPA",
  },
];

function RecommendedJobs() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recommended Jobs
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Jobs matching your profile.
          </p>
        </div>
        <Link
          to="/jobs"
          className="text-sm font-medium text-[#2E8B78] transition-all hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Job List */}
      <div>
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={`flex cursor-pointer items-center justify-between px-6 py-5 transition-colors duration-200 hover:bg-slate-50 ${
              index !== jobs.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div>
              <h3 className="font-medium text-slate-900">{job.role}</h3>
              <p className="mt-1 text-sm text-slate-500">{job.company}</p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{job.salary}</p>
              <p className="mt-1 text-xs text-slate-400">{job.location}</p>
              <button
                className="
                  mt-3
                  rounded-lg
                  border
                  border-slate-300
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  hover:border-[#2E8B78]
                  hover:bg-slate-50
                  hover:text-[#2E8B78]
                  active:scale-95
                "
              >
                View Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedJobs;