import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import JobsTable from "../components/admin/JobsTable";
import { getJobs } from "../api/adminApi";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const response = await getJobs();

      setJobs(response.data.jobs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Manage Jobs
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all jobs on the platform.
        </p>
      </div>

      <JobsTable
        jobs={jobs}
        loading={loading}
        refresh={fetchJobs}
      />
    </DashboardLayout>
  );
}

export default ManageJobs;