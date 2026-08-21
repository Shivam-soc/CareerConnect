import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Applied to Google",
    description: "Frontend Developer",
    time: "Today",
  },
  {
    id: 2,
    title: "Adobe shortlisted your profile",
    description: "Software Engineer",
    time: "Yesterday",
  },
  {
    id: 3,
    title: "Saved Microsoft job",
    description: "React Developer",
    time: "2 days ago",
  },
  {
    id: 4,
    title: "Interview scheduled with Amazon",
    description: "SDE Intern",
    time: "5 days ago",
  },
];

function ActivityTimeline() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Your latest activity across CareerConnect.
          </p>
        </div>
        <Link
          to="/applications"
          className="text-sm font-medium text-[#2E8B78] transition-all hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Activity */}
      <div>
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`cursor-pointer px-6 py-5 transition-colors duration-200 hover:bg-slate-50 ${
              index !== activities.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-900">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs text-slate-400">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityTimeline;