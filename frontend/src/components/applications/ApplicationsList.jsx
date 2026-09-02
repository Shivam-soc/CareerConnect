import { useEffect, useState } from "react";
import { getMyApplications } from "../../api/applicationApi";
import ApplicationCard from "./ApplicationCard";

function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);

      const response = await getMyApplications();

      setApplications(response.data.applications);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
          {applications.map((application) => (
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