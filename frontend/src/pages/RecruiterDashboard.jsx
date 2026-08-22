import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  Plus,
  Eye,
} from "lucide-react";

function RecruiterDashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Applications",
      value: "284",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Candidates Hired",
      value: "36",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Hiring Rate",
      value: "82%",
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      applicants: 42,
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Developer",
      applicants: 31,
      status: "Active",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      applicants: 18,
      status: "Closed",
    },
  ];

  return (
    <DashboardLayout>

      {/* Header */}

      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-3xl font-semibold text-slate-900">
            Recruiter Dashboard
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage job postings, review applications and monitor hiring activity.
          </p>

        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-[#2E8B78]
            px-5
            py-3
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          <Plus size={18} />

          Post New Job

        </button>

      </section>

      {/* Stats */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>

              </div>

            </div>

          );
        })}

      </section>

      {/* Recent Job Posts */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold text-slate-900">
              Recent Job Posts
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your latest job listings.
            </p>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

                <th className="pb-3">Job Title</th>

                <th className="pb-3">Applicants</th>

                <th className="pb-3">Status</th>

                <th className="pb-3 text-right">Action</th>

              </tr>

            </thead>

            <tbody>

              {jobs.map((job) => (

                <tr
                  key={job.id}
                  className="border-b border-slate-100"
                >

                  <td className="py-5 font-medium text-slate-900">
                    {job.title}
                  </td>

                  <td className="py-5 text-slate-600">
                    {job.applicants}
                  </td>

                  <td className="py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        job.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {job.status}
                    </span>

                  </td>

                  <td className="py-5 text-right">

                    <button
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-slate-200
                        px-4
                        py-2
                        text-sm
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <Eye size={16} />

                      View Applicants

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </DashboardLayout>
  );
}

export default RecruiterDashboard;