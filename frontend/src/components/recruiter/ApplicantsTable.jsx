import ApplicantRow from "./ApplicantRow";

function ApplicantsTable({
  applications,
  loading,
  refresh,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <p className="text-slate-500">
          Loading applicants...
        </p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h2 className="text-xl font-semibold text-slate-900">
          No Applications Yet
        </h2>

        <p className="mt-2 text-slate-500">
          No students have applied for this job.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Candidate
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Resume
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Cover Letter
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <ApplicantRow
                key={application._id}
                application={application}
                refresh={refresh}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApplicantsTable;