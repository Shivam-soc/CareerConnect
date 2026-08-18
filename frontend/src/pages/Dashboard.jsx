import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardStats from "../components/dashboard/DashboardStats";
import RecommendedJobs from "../components/dashboard/RecommendedJobs";
import RecentApplications from "../components/dashboard/RecentApplications";
import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";

function Dashboard() {
  return (
    <DashboardLayout>

      <DashboardStats />

      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecommendedJobs />
        </div>

        <UpcomingInterviews />

      </div>

      <div className="mt-8">
        <RecentApplications />
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ActivityTimeline />
        </div>

        <ProfileCompletion />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;