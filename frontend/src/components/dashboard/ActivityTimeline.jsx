import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMyApplications } from "../../api/applicationApi";

function ActivityTimeline() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      setLoading(true);

      const response = await getMyApplications();

      setActivities(response.data.applications);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityTitle = (application) => {
    switch (application.status) {
      case "Applied":
        return `Applied to ${application.job?.company?.name}`;

      case "Under Review":
        return `${application.job?.company?.name} is reviewing your application`;

      case "Shortlisted":
        return `${application.job?.company?.name} shortlisted you`;

      case "Interview":
        return `Interview round for ${application.job?.company?.name}`;

      case "Selected":
        return `Congratulations! Selected at ${application.job?.company?.name}`;

      case "Rejected":
        return `Application rejected by ${application.job?.company?.name}`;

      default:
        return application.job?.company?.name;
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates on your applications.
          </p>
        </div>

        <Link
          to="/applications"
          className="text-sm font-medium text-[#2E8B78] hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Body */}

      {loading ? (
        <div className="p-8 text-center text-slate-500">
          Loading...
        </div>
      ) : activities.length === 0 ? (
        <div className="p-8 text-center text-slate-500">
          No recent activity.
        </div>
      ) : (
        <div>
          {activities.slice(0, 5).map((application, index) => (
            <div
              key={application._id}
              className={`px-6 py-5 transition hover:bg-slate-50 ${
                index !== Math.min(activities.length, 5) - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-medium text-slate-900">
                    {getActivityTitle(application)}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {application.job?.title}
                  </p>
                </div>

                <span className="text-xs text-slate-400">
                  {new Date(
                    application.updatedAt
                  ).toLocaleDateString()}
                </span>

              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default ActivityTimeline;