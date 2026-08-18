import { FaArrowRight } from "react-icons/fa";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    applied: "15 Aug 2026",
    status: "Under Review",
  },
  {
    id: 2,
    company: "Adobe",
    role: "Software Engineer Intern",
    applied: "12 Aug 2026",
    status: "Interview",
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Backend Developer",
    applied: "10 Aug 2026",
    status: "Applied",
  },
  {
    id: 4,
    company: "Amazon",
    role: "SDE Intern",
    applied: "08 Aug 2026",
    status: "Rejected",
  },
];

const badgeStyles = {
  Applied: "bg-blue-100 text-blue-700",
  "Under Review": "bg-yellow-100 text-yellow-700",
  Interview: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

function RecentApplications() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your latest job applications.
          </p>

        </div>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

              <th className="pb-4 font-medium">Company</th>

              <th className="pb-4 font-medium">Role</th>

              <th className="pb-4 font-medium">Applied</th>

              <th className="pb-4 font-medium">Status</th>

              <th className="pb-4 text-right font-medium">Action</th>

            </tr>

          </thead>

          <tbody>

            {applications.map((job) => (

              <tr
                key={job.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >

                <td className="py-5 font-semibold text-slate-900">
                  {job.company}
                </td>

                <td className="py-5 text-slate-600">
                  {job.role}
                </td>

                <td className="py-5 text-slate-500">
                  {job.applied}
                </td>

                <td className="py-5">

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      ${badgeStyles[job.status]}
                    `}
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
                      border-slate-300
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                      transition
                      hover:border-blue-500
                      hover:text-blue-600
                    "
                  >
                    View

                    <FaArrowRight className="text-xs" />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default RecentApplications;