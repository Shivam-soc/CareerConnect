import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getJobs } from "../../api/jobApi";

function RecommendedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const response = await getJobs();

      // Show only the first 5 jobs
      setJobs(response.data.jobs.slice(0, 5));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recommended Jobs
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest jobs available for you.
          </p>
        </div>

        <Link
          to="/jobs"
          className="text-sm font-medium text-[#2E8B78] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Loading */}

      {loading ? (
        <div className="p-8 text-center text-slate-500">
          Loading jobs...
        </div>
      ) : jobs.length === 0 ? (
        <div className="p-8 text-center text-slate-500">
          No jobs available.
        </div>
      ) : (
        <div>
          {jobs.map((job, index) => (
            <div
              key={job._id}
              className={`flex items-center justify-between px-6 py-5 transition hover:bg-slate-50 ${
                index !== jobs.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div>
                <h3 className="font-medium text-slate-900">
                  {job.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {job.company?.name}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">
                  {job.salary}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {job.location}
                </p>

                <Link
                  to={`/jobs/${job._id}`}
                  className="
                    mt-3
                    inline-block
                    rounded-lg
                    border
                    border-slate-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition
                    hover:border-[#2E8B78]
                    hover:text-[#2E8B78]
                  "
                >
                  View Job
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecommendedJobs;