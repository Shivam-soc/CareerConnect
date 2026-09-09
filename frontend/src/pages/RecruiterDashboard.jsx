import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import {
  getRecruiterJobs, 
  deleteJob,
} from "../api/jobApi";
import { getRecruiterDashboard } from "../api/recruiterApi";

import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

function RecruiterDashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalJobs: 0,
    totalApplications: 0,
    recentApplications: [],
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

 const fetchDashboard = async () => {
  try {
    setLoading(true);

    const [dashboardRes, jobsRes] = await Promise.all([
      getRecruiterDashboard(),
      getRecruiterJobs(),
    ]);

    setDashboardData(dashboardRes.data.dashboard);
    setJobs(jobsRes.data.jobs);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  const handleDelete = async (jobId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this job?"
  );

  if (!confirmDelete) return;

  try {
    await deleteJob(jobId);

    setJobs((prev) =>
      prev.filter((job) => job._id !== jobId)
    );

    alert("Job deleted successfully.");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Unable to delete job."
    );
  }
};

const stats = useMemo(() => {
  const activeJobs = jobs.filter(
    (job) => job.status === "Open"
  ).length;

  return [
    {
      title: "Active Jobs",
      value: activeJobs,
      icon: Briefcase,
      color: "bg-[#E8F7F3] text-[#2E8B78]",
    },
    {
      title: "Total Jobs",
      value: dashboardData.totalJobs,
      icon: FileText,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Applications",
      value: dashboardData.totalApplications,
      icon: Users,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Open Jobs",
      value: activeJobs,
      icon: TrendingUp,
      color: "bg-lime-100 text-lime-600",
    },
  ];
}, [jobs, dashboardData]);

  return (
    <DashboardLayout>
      {/* Header */}

      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Recruiter Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your job postings and review applicants.
          </p>
        </div>

        <Link
          to="/recruiter/jobs/create"
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 font-semibold text-white transition hover:bg-[#236D5E]"
        >
          <Plus size={18} />
          Post New Job
        </Link>
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

      {/* Jobs Table */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            My Job Posts
          </h2>

          <p className="mt-1 text-slate-500">
            Manage all jobs posted by you.
          </p>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-500">
            Loading jobs...
          </div>
        ) : jobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">

            <Briefcase
              size={60}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              No Jobs Posted Yet
            </h3>

            <p className="mt-2 text-slate-500">
              Create your first job posting and start receiving applications.
            </p>

            <Link
              to="/recruiter/jobs/create"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2E8B78] px-6 py-3 font-semibold text-white transition hover:bg-[#236D5E]"
            >
              <Plus size={18} />
              Post Your First Job
            </Link>

          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

                  <th className="pb-4">Job</th>

                  <th className="pb-4">Company</th>

                  <th className="pb-4">Location</th>

                  <th className="pb-4">Posted</th>

                  <th className="pb-4">Status</th>

                  <th className="pb-4 text-right">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {jobs.map((job) => (

                  <tr
                    key={job._id}
                    className="border-b border-slate-100"
                  >

                    <td className="py-5">

                      <h3 className="font-semibold text-slate-900">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {job.employmentType} • {job.salary}
                      </p>

                    </td>

                    <td className="py-5">
                      {job.company?.name}
                    </td>

                    <td className="py-5">
                      {job.location}
                    </td>

                    <td className="py-5">
                      {new Date(
                        job.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          job.status === "Open"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {job.status}
                      </span>

                    </td>

                    <td className="py-5">

                      <div className="flex justify-end gap-3">

                        <Link
                          to={`/recruiter/jobs/${job._id}/applications`}
                          className="rounded-lg border border-slate-200 p-2 transition hover:border-[#2E8B78] hover:text-[#2E8B78]"
                          title="View Applicants"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          to={`/recruiter/jobs/${job._id}/edit`}
                          className="rounded-lg border border-slate-200 p-2 transition hover:border-blue-500 hover:text-blue-600"
                          title="Edit Job"
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          onClick={() => handleDelete(job._id)}
                          className="rounded-lg border border-slate-200 p-2 transition hover:border-red-500 hover:text-red-600"
                          title="Delete Job"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

      </section>

      {/* Recent Applications */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Applications
        </h2>

        <p className="mt-1 text-slate-500">
          Latest applications received for your jobs.
        </p>

        <div className="mt-6 space-y-4">
          {dashboardData.recentApplications.length === 0 ? (
            <p className="text-slate-500">
              No recent applications.
            </p>
          ) : (
            dashboardData.recentApplications.map((application) => (
              <div
                key={application._id}
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {application.student?.fullName}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {application.job?.title}
                  </p>

                  <p className="text-xs text-slate-400">
                    {new Date(application.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {application.status}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

    </DashboardLayout>
  );
}

export default RecruiterDashboard;