import ApplicantRow from "./ApplicantRow";

function ApplicantsTable({
  applications,
  loading,
  refresh,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center">
        <p className="text-slate-500">
          Loading applicants...
        </p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <h3 className="text-xl font-semibold text-slate-900">
          No Applications Yet
        </h3>

        <p className="mt-2 text-slate-500">
          Applicants will appear here once students apply for this job.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr className="text-left text-sm font-semibold text-slate-600">

              <th className="px-6 py-4">
                Applicant
              </th>

              <th className="px-6 py-4">
                Resume
              </th>

              <th className="px-6 py-4">
                Applied On
              </th>

              <th className="px-6 py-4">
                Status
              </th>

              <th className="px-6 py-4 text-center">
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