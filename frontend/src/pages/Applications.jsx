import DashboardLayout from "../components/layout/DashboardLayout";

import ApplicationsHeader from "../components/applications/ApplicationsHeader";
import ApplicationsStats from "../components/applications/ApplicationsStats";
import ApplicationsFilters from "../components/applications/ApplicationsFilters";
import ApplicationsList from "../components/applications/ApplicationsList";

function Applications() {
  return (
    <DashboardLayout>

      {/* Header */}

      <ApplicationsHeader />

      {/* Statistics */}

      <div className="mt-6">
        <ApplicationsStats />
      </div>

      {/* Search & Filters */}

      <div className="mt-6">
        <ApplicationsFilters />
      </div>

      {/* Applications List */}

      <div className="mt-6">
        <ApplicationsList />
      </div>

    </DashboardLayout>
  );
}

export default Applications;