import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

const openJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹22 LPA",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Hyderabad",
    salary: "₹20 LPA",
    type: "Hybrid",
  },
  {
    id: 3,
    title: "Cloud Engineer",
    location: "Pune",
    salary: "₹24 LPA",
    type: "Remote",
  },
  {
    id: 4,
    title: "Data Scientist",
    location: "Bangalore",
    salary: "₹26 LPA",
    type: "Full Time",
  },
];

function CompanyJobs() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Open Positions
          </h2>

          <p className="mt-2 text-slate-500">
            Current opportunities available at Google.
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
          {openJobs.length} Jobs
        </span>

      </div>

      <div className="space-y-5">

        {openJobs.map((job) => (

          <div
            key={job.id}
            className="flex flex-col gap-6 rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg lg:flex-row lg:items-center lg:justify-between"
          >

            <div>

              <h3 className="text-2xl font-semibold">
                {job.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-5 text-slate-600">

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {job.location}
                </span>

                <span className="flex items-center gap-2">
                  <FaMoneyBillWave />
                  {job.salary}
                </span>

                <span className="flex items-center gap-2">
                  <FaBriefcase />
                  {job.type}
                </span>

              </div>

            </div>

            <Link
              to={`/jobs/${job.id}`}
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              View Job
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CompanyJobs;