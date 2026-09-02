import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

import { getJobs } from "../../api/jobApi";

function CompanyJobs({ company }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (company?._id) {
      fetchJobs();
    }
  }, [company]);

  const fetchJobs = async () => {
    try {
      const response = await getJobs({
        company: company._id,
      });

      setJobs(response.data.jobs);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!company) return null;

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Open Positions
          </h2>

          <p className="mt-2 text-slate-500">
            Current opportunities available at {company.name}.
          </p>
        </div>

        <span className="rounded-full bg-[#E8F7F3] px-4 py-2 font-semibold text-[#2E8B78]">
          {jobs.length} Jobs
        </span>

      </div>

      {loading ? (
        <div className="py-10 text-center">
          Loading jobs...
        </div>
      ) : jobs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 py-10 text-center text-slate-500">
          No open positions available.
        </div>
      ) : (
        <div className="space-y-5">

          {jobs.map((job) => (

            <div
              key={job._id}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-[#F8FAF8] p-6 transition-all duration-300 hover:border-[#2E8B78] hover:shadow-lg lg:flex-row lg:items-center lg:justify-between"
            >

              <div>

                <h3 className="text-2xl font-semibold text-slate-900">
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
                    {job.employmentType}
                  </span>

                </div>

              </div>

              <Link
                to={`/jobs/${job._id}`}
                className="rounded-2xl bg-[#2E8B78] px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#236D5E] hover:shadow-xl"
              >
                View Job
              </Link>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}

export default CompanyJobs;