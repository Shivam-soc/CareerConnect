import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import ApplicationsTable from "../components/admin/ApplicationsTable";

import { getApplications } from "../api/adminApi";

function ManageApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const response = await getApplications();

      setApplications(response.data.applications);
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
          Manage Applications
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all job applications.
        </p>
      </div>

      <ApplicationsTable
        applications={applications}
        loading={loading}
        refresh={fetchApplications}
      />

    </DashboardLayout>
  );
}

export default ManageApplications;