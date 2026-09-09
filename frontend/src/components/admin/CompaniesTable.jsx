import CompanyRow from "./CompanyRow";

function CompaniesTable({
  companies,
  loading,
  refresh,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        Loading companies...
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        No companies found.
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
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Industry
              </th>

              <th className="px-6 py-4 text-left">
                Location
              </th>

              <th className="px-6 py-4 text-left">
                Recruiter
              </th>

              <th className="px-6 py-4 text-left">
                Created
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <CompanyRow
                key={company._id}
                company={company}
                refresh={refresh}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default CompaniesTable;