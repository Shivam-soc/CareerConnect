import mockApplications from "../../data/mockApplications";
import ApplicationCard from "./ApplicationCard";

function ApplicationsList() {
  return (
    <section className="mt-6">

      {mockApplications.length > 0 ? (

        <div className="space-y-5">

          {mockApplications.map((application) => (

            <ApplicationCard
              key={application.id}
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