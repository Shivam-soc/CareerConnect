import {
  FaCalendarAlt,
  FaClock,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa";

const interviews = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    date: "20 Aug 2026",
    time: "10:00 AM",
    mode: "Online",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    id: 2,
    company: "Adobe",
    role: "Software Engineer Intern",
    date: "23 Aug 2026",
    time: "2:30 PM",
    mode: "Virtual",
    logo: "https://logo.clearbit.com/adobe.com",
  },
];

function UpcomingInterviews() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Interviews
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Don't miss your next interview.
          </p>

        </div>

      </div>

      {/* Interview Cards */}

      <div className="space-y-5">

        {interviews.map((item) => (

          <div
            key={item.id}
            className="
              rounded-2xl
              border
              border-slate-200
              p-5
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-md
            "
          >

            <div className="flex items-center gap-4">

              <img
                src={item.logo}
                alt={item.company}
                className="h-12 w-12 rounded-xl border border-slate-200 bg-white p-2"
              />

              <div>

                <h3 className="font-semibold text-slate-900">
                  {item.company}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>

              </div>

            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">

              <div className="flex items-center gap-3">

                <FaCalendarAlt className="text-blue-600" />

                {item.date}

              </div>

              <div className="flex items-center gap-3">

                <FaClock className="text-green-600" />

                {item.time}

              </div>

              <div className="flex items-center gap-3">

                <FaVideo className="text-purple-600" />

                {item.mode}

              </div>

            </div>

            <button
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              View Details

              <FaArrowRight className="text-sm" />

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default UpcomingInterviews;