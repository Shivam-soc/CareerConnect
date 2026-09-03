import { Link } from "react-router-dom";

const statusColor = {
  Applied: "bg-slate-100 text-slate-700",
  "Under Review": "bg-amber-100 text-amber-700",
  Shortlisted: "bg-blue-100 text-blue-700",
  Interview: "bg-purple-100 text-purple-700",
  Selected: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

function RecentApplications({ applications = [] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
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
          className="text-sm font-medium text-[#2E8B78] hover:underline"
        >
          View All
        </Link>
      </div>

      {applications.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No applications yet.
        </div>
      ) : (
        applications.map((application, index) => (
          <div
            key={application._id}
            className={`flex items-center justify-between px-6 py-5 hover:bg-slate-50 ${
              index !== applications.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div>
              <h3 className="font-medium text-slate-900">
                {application.job?.company?.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {application.job?.title}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  statusColor[application.status]
                }`}
              >
                {application.status}
              </span>

              <p className="mt-2 text-xs text-slate-400">
                {new Date(application.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default RecentApplications;