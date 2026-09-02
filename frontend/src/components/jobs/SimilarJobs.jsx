import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import JobCard from "./JobCard";
import { getJobs } from "../../api/jobApi";

function SimilarJobs({ currentJob }) {
  const [similarJobs, setSimilarJobs] = useState([]);

  useEffect(() => {
    if (!currentJob) return;

    const fetchSimilarJobs = async () => {
      try {
        const response = await getJobs();

        const jobs = response.data.jobs || [];

        const filteredJobs = jobs
          .filter((job) => {
            // Exclude current job
            if (job._id === currentJob._id) return false;

            // Match by shared skills
            return job.skills?.some((skill) =>
              currentJob.skills?.includes(skill)
            );
          })
          .slice(0, 3);

        setSimilarJobs(filteredJobs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSimilarJobs();
  }, [currentJob]);

  if (!currentJob) return null;

  return (
    <section className="mt-16">

      {/* Header */}

      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <BriefcaseBusiness
              size={24}
              className="text-[#2E8B78]"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Similar Opportunities
            </h2>

            <p className="mt-1 text-slate-500">
              Jobs matching your skills and interests.
            </p>

          </div>

        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold transition-all duration-300 hover:border-[#2E8B78] hover:text-[#2E8B78] hover:shadow-md"
        >
          View All Jobs

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />

        </Link>

      </div>

      {/* Cards */}

      {similarJobs.length > 0 ? (

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >

          {similarJobs.map((job, index) => (

            <motion.div
              key={job._id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >

              <JobCard job={job} />

            </motion.div>

          ))}

        </motion.div>

      ) : (

        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white py-16 text-center">

          <BriefcaseBusiness
            size={55}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-5 text-2xl font-bold text-slate-800">
            No Similar Jobs Found
          </h3>

          <p className="mt-3 text-slate-500">
            Explore all available opportunities instead.
          </p>

          <Link
            to="/jobs"
            className="mt-6 inline-flex rounded-xl bg-[#2E8B78] px-6 py-3 font-semibold text-white transition hover:bg-[#236D5E]"
          >
            Browse Jobs
          </Link>

        </div>

      )}

    </section>
  );
}

export default SimilarJobs;