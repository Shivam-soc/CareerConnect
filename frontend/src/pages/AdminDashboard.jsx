import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Users,
  Building2,
  Briefcase,
  FileText,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,548",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Companies",
      value: "428",
      icon: Building2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Active Jobs",
      value: "1,264",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Applications",
      value: "18,742",
      icon: FileText,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <DashboardLayout>

      {/* Header */}

      <section className="mb-6">

        <h1 className="text-3xl font-semibold text-slate-900">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage users, companies, jobs and platform analytics.
        </p>

      </section>

      {/* Stats */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    {stat.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
                >
                  <Icon size={24} />
                </div>

              </div>

            </div>

          );
        })}

      </section>

      {/* Management */}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        {/* Users */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            User Management
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            View, suspend or remove registered users.
          </p>

          <button className="mt-6 rounded-xl bg-[#2E8B78] px-5 py-2.5 text-sm font-medium text-white">
            Manage Users
          </button>

        </div>

        {/* Companies */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h2 className="text-lg font-semibold text-slate-900">
            Company Management
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Verify recruiters and manage company accounts.
          </p>

          <button className="mt-6 rounded-xl bg-[#2E8B78] px-5 py-2.5 text-sm font-medium text-white">
            Manage Companies
          </button>

        </div>

      </div>

      {/* Analytics */}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex items-center gap-3">

            <TrendingUp className="text-[#2E8B78]" />

            <h2 className="text-lg font-semibold">
              Platform Analytics
            </h2>

          </div>

          <ul className="mt-6 space-y-4 text-sm text-slate-600">

            <li>• 2,400 new users this month</li>

            <li>• 182 new jobs posted this week</li>

            <li>• 93% recruiter verification rate</li>

            <li>• 7,420 applications submitted</li>

          </ul>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-[#2E8B78]" />

            <h2 className="text-lg font-semibold">
              Admin Actions
            </h2>

          </div>

          <div className="mt-6 grid gap-4">

            <button className="rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
              Approve Recruiters
            </button>

            <button className="rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
              Review Reported Jobs
            </button>

            <button className="rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
              View Platform Logs
            </button>

            <button className="rounded-xl border border-slate-200 py-3 hover:bg-slate-50">
              System Settings
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;