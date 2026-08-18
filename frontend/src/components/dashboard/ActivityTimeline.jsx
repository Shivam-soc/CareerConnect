import {
  FaBriefcase,
  FaBookmark,
  FaUserEdit,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    icon: <FaBriefcase />,
    title: "Applied for Frontend Developer",
    company: "Google",
    time: "2 hours ago",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: <FaBookmark />,
    title: "Saved Software Engineer Intern",
    company: "Adobe",
    time: "Yesterday",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    icon: <FaUserEdit />,
    title: "Updated Resume",
    company: "Career Profile",
    time: "2 days ago",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "Interview Scheduled",
    company: "Microsoft",
    time: "3 days ago",
    color: "bg-orange-100 text-orange-600",
  },
];

function ActivityTimeline() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your latest actions on CareerConnect.
        </p>

      </div>

      {/* Timeline */}

      <div className="space-y-6">

        {activities.map((activity, index) => (

          <div
            key={activity.id}
            className="relative flex gap-4"
          >

            {/* Vertical Line */}

            {index !== activities.length - 1 && (

              <div className="absolute left-6 top-14 h-full w-px bg-slate-200"></div>

            )}

            {/* Icon */}

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${activity.color}`}
            >
              {activity.icon}
            </div>

            {/* Content */}

            <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4">

              <h3 className="font-semibold text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {activity.company}
              </p>

              <span className="mt-2 inline-block text-xs text-slate-500">
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