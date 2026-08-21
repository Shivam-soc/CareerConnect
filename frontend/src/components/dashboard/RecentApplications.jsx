import { Link } from "react-router-dom";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    status: "Under Review",
    applied: "2 days ago",
  },
  {
    id: 2,
    company: "Adobe",
    role: "Software Engineer",
    status: "Interview Scheduled",
    applied: "5 days ago",
  },
  {
    id: 3,
    company: "Microsoft",
    role: "React Developer",
    status: "Application Sent",
    applied: "1 week ago",
  },
];

const statusColor = {
  "Under Review": "bg-amber-100 text-amber-700",
  "Interview Scheduled": "bg-emerald-100 text-emerald-700",
  "Application Sent": "bg-slate-100 text-slate-700",
};

function RecentApplications() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Applications
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Track your latest applications.
          </p>
        </div>
        <Link
          to="/applications"
          className="text-sm font-medium text-[#2E8B78] transition-all hover:underline"
        >
          View All
        </Link>
      </div>

      {/* List */}
      <div>
        {applications.map((job, index) => (
          <div
            key={job.id}
            className={`flex cursor-pointer items-center justify-between px-6 py-5 transition-colors duration-200 hover:bg-slate-50 ${
              index !== applications.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div>
              <h3 className="font-medium text-slate-900">{job.company}</h3>
              <p className="mt-1 text-sm text-slate-500">{job.role}</p>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor[job.status]}`}
              >
                {job.status}
              </span>
              <p className="mt-2 text-xs text-slate-400">
                Applied {job.applied}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentApplications;