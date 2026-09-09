import ApplicationRow from "./ApplicationRow";

function ApplicationsTable({
  applications,
  loading,
  refresh,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        Loading applications...
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        No applications found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr>

              <th className="px-6 py-4 text-left">
                Student
              </th>

              <th className="px-6 py-4 text-left">
                Job
              </th>

              <th className="px-6 py-4 text-left">
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Recruiter
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Applied On
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <ApplicationRow
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

export default ApplicationsTable;