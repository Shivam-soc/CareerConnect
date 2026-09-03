import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardStats from "../components/dashboard/DashboardStats";
import RecentApplications from "../components/dashboard/RecentApplications";
import RecommendedJobs from "../components/dashboard/RecommendedJobs";
import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";

import { getStudentDashboard } from "../api/studentApi";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getStudentDashboard();

      setDashboard(response.data.dashboard);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <p className="text-lg text-slate-500">
            Loading Dashboard...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome */}

      <section className="mb-6">
        <h2 className="text-3xl font-semibold text-slate-900">
          Good Afternoon, {user?.fullName}
        </h2>

        <p className="mt-1 text-slate-500">
          Here's your job search overview.
        </p>
      </section>

      {/* Dashboard Statistics */}

      <DashboardStats dashboard={dashboard} />

      {/* Recent Applications + Interviews */}

      <section className="mt-6 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentApplications
            applications={dashboard?.recentApplications || []}
          />
        </div>

        <UpcomingInterviews
          applications={dashboard?.recentApplications || []}
        />

      </section>

      {/* Recommended Jobs + Profile */}

      <section className="mt-6 grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecommendedJobs
            jobs={dashboard?.recommendedJobs || []}
          />
        </div>

        <ProfileCompletion user={user} />

      </section>

      {/* Activity */}

      <section className="mt-6">
        <ActivityTimeline
          applications={dashboard?.recentApplications || []}
        />
      </section>

    </DashboardLayout>
  );
}

export default Dashboard;