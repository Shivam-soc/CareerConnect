import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMyApplications } from "../../api/applicationApi";

function UpcomingInterviews() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      setLoading(true);

      const response = await getMyApplications();

      const interviewApplications =
        response.data.applications.filter(
          (application) =>
            application.status === "Interview"
        );

      setInterviews(interviewApplications);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Upcoming Interviews
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Applications that have reached the interview stage.
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
      ) : interviews.length === 0 ? (
        <div className="p-8 text-center text-slate-500">
          No interview invitations yet.
        </div>
      ) : (
        <div>
          {interviews.map((application, index) => (
            <div
              key={application._id}
              className={`px-6 py-5 transition hover:bg-slate-50 ${
                index !== interviews.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <h3 className="font-medium text-slate-900">
                {application.job?.company?.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {application.job?.title}
              </p>

              <div className="mt-4 flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-[#2E8B78]">
                    Interview Stage
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Recruiter will contact you soon.
                  </p>
                </div>

                <Link
                  to={`/jobs/${application.job?._id}`}
                  className="
                    rounded-lg
                    border
                    border-slate-300
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition
                    hover:border-[#2E8B78]
                    hover:text-[#2E8B78]
                  "
                >
                  View Job
                </Link>

              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default UpcomingInterviews;