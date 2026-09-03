import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import ApplicationsHeader from "../components/applications/ApplicationsHeader";
import ApplicationsStats from "../components/applications/ApplicationsStats";
import ApplicationsFilters from "../components/applications/ApplicationsFilters";
import ApplicationsList from "../components/applications/ApplicationsList";

import { getMyApplications } from "../api/applicationApi";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const response = await getMyApplications();

      setApplications(response.data.applications);
      setFilteredApplications(response.data.applications);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}

      <ApplicationsHeader />

      {/* Statistics */}

      <div className="mt-6">
        <ApplicationsStats
          applications={applications}
        />
      </div>

      {/* Filters */}

      <div className="mt-6">
        <ApplicationsFilters
          applications={applications}
          setFilteredApplications={
            setFilteredApplications
          }
        />
      </div>

      {/* List */}

      <div className="mt-6">
        <ApplicationsList
          applications={filteredApplications}
          loading={loading}
        />
      </div>
    </DashboardLayout>
  );
}

export default Applications;