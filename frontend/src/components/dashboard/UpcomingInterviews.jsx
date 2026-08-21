import { Link } from "react-router-dom";

const interviews = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    date: "24 Aug 2026",
    time: "10:30 AM",
    mode: "Online",
  },
  {
    id: 2,
    company: "Adobe",
    role: "Software Engineer",
    date: "28 Aug 2026",
    time: "02:00 PM",
    mode: "On-site",
  },
];

function UpcomingInterviews() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Upcoming Interviews
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Your scheduled interviews.
          </p>
        </div>
        <Link
          to="/applications"
          className="text-sm font-medium text-[#2E8B78] transition-all hover:underline"
        >
          View All
        </Link>
      </div>

      {/* List */}
      <div>
        {interviews.map((item, index) => (
          <div
            key={item.id}
            className={`cursor-pointer px-6 py-5 transition-colors duration-200 hover:bg-slate-50 ${
              index !== interviews.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <h3 className="font-medium text-slate-900">{item.company}</h3>
            <p className="mt-1 text-sm text-slate-500">{item.role}</p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-900">{item.date}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {item.time} • {item.mode}
                </p>
              </div>

              <button
                className="
                  rounded-lg
                  border
                  border-slate-300
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  hover:border-[#2E8B78]
                  hover:bg-slate-50
                  hover:text-[#2E8B78]
                  active:scale-95
                "
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingInterviews;