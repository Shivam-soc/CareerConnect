import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplications from "../components/dashboard/RecentApplications";
import RecommendedJobs from "../components/dashboard/RecommendedJobs";
import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Welcome */}

      <section className="mb-6">

        <h2 className="text-3xl font-semibold text-slate-900">
          Good Afternoon, Shivam
        </h2>

        <p className="mt-1 text-slate-500">
          Here's your job search overview.
        </p>

      </section>

      {/* Stats */}

      <DashboardStats />

      {/* Row 1 */}

      <section className="mt-6 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentApplications />
        </div>

        <UpcomingInterviews />

      </section>

      {/* Row 2 */}

      <section className="mt-6 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecommendedJobs />
        </div>

        <ProfileCompletion />

      </section>

      {/* Row 3 */}

      <section className="mt-6">

        <ActivityTimeline />

      </section>

    </DashboardLayout>
  );
}

export default Dashboard;