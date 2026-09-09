import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardCards from "../components/admin/DashboardCards";
import RecentUsers from "../components/admin/RecentUsers";
import RecentJobs from "../components/admin/RecentJobs";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-slate-500">
          Monitor platform statistics.
        </p>
      </div>

      <DashboardCards />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RecentUsers />
        <RecentJobs />
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;