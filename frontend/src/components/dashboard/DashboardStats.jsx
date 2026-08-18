import {
  FaBriefcase,
  FaBookmark,
  FaCalendarCheck,
  FaUserCheck,
} from "react-icons/fa";

const stats = [
  {
    title: "Applications",
    value: "18",
    change: "+4 this week",
    icon: <FaBriefcase />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Saved Jobs",
    value: "12",
    change: "+2 this week",
    icon: <FaBookmark />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Interviews",
    value: "3",
    change: "Tomorrow",
    icon: <FaCalendarCheck />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Profile Score",
    value: "92%",
    change: "Excellent",
    icon: <FaUserCheck />,
    color: "bg-orange-100 text-orange-600",
  },
];

function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm font-medium text-green-600">
                {stat.change}
              </p>

            </div>

            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                text-2xl
                ${stat.color}
              `}
            >
              {stat.icon}
            </div>

          </div>

        </div>

      ))}

    </section>
  );
}

export default DashboardStats;