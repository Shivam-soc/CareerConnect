import { useEffect, useState } from "react";
import { getAdminDashboard } from "../../api/adminApi";

function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAdminDashboard();
      setJobs(response.data.dashboard.recentJobs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Recent Jobs
      </h2>

      <p className="mt-1 text-slate-500">
        Latest job postings
      </p>

      {loading ? (
        <div className="py-10 text-center text-slate-500">
          Loading...
        </div>
      ) : jobs.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No jobs found.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="rounded-xl border border-slate-100 p-4"
            >
              <h3 className="font-semibold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {job.company?.name}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Posted by {job.postedBy?.fullName}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {new Date(job.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentJobs;