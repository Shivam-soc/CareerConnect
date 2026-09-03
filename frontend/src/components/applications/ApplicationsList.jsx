import ApplicationCard from "./ApplicationCard";

function ApplicationsList({
  applications = [],
  loading,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        Loading applications...
      </div>
    );
  }

  return (
    <section className="mt-6">
      {applications.length > 0 ? (
        <div className="space-y-5">
          {applications
            .filter((application) => application.job)
            .map((application) => (
              <ApplicationCard
                key={application._id}
                application={application}
              />
            ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h3 className="text-lg font-semibold text-slate-900">
            No applications yet
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Start applying for jobs to keep track of your application journey.
          </p>
        </div>
      )}
    </section>
  );
}

export default ApplicationsList;