import {
  FaBookmark,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";

const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    role: "Frontend Developer",
    location: "Bangalore",
    salary: "₹22 LPA",
    type: "Full Time",
  },
  {
    id: 2,
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    role: "Software Engineer Intern",
    location: "Noida",
    salary: "₹12 LPA",
    type: "Internship",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    role: "Backend Developer",
    location: "Hyderabad",
    salary: "₹26 LPA",
    type: "Full Time",
  },
];

function RecommendedJobs() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Recommended Jobs
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Jobs matching your profile
          </p>

        </div>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All
        </button>

      </div>

      {/* Cards */}

      <div className="space-y-5">

        {jobs.map((job) => (

          <div
            key={job.id}
            className="
              flex
              items-center
              justify-between
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

            {/* Left */}

            <div className="flex items-center gap-5">

              <img
                src={job.logo}
                alt={job.company}
                className="h-14 w-14 rounded-xl border border-slate-200 bg-white p-2"
              />

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {job.role}
                </h3>

                <p className="mt-1 font-medium text-slate-600">
                  {job.company}
                </p>

                <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-500">

                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    {job.salary}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock />
                    {job.type}
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

              <button
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  hover:bg-slate-100
                "
              >
                <FaBookmark />
              </button>

              <button
                className="
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Apply
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecommendedJobs;