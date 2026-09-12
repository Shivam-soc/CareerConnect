import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getJobs } from "../../api/jobApi";

import JobCard from "../jobs/JobCard";
import SectionHeading from "../ui/SectionHeading";

function FeaturedJobs({ search = "" }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, [search]);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const response = await getJobs({
        search,
        limit: 6,
        sort: "latest",
      });

      setJobs(response.data.jobs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8FAF8] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Featured Opportunities"
          title="Latest Jobs"
          subtitle="Explore the newest opportunities from top recruiters."
          action={
            <Link
              to="/jobs"
              className="group hidden items-center gap-2 text-sm font-semibold text-[#2E8B78] transition hover:text-[#236D5E] md:inline-flex"
            >
              View All Jobs

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          }
        />

        {loading ? (
          <div className="mt-16 flex justify-center">
            <p className="text-slate-500">
              Loading latest jobs...
            </p>
          </div>
        ) : jobs.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-[32px] border border-dashed border-slate-300 bg-white p-14 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              No Jobs Available
            </h3>

            <p className="mt-3 text-slate-500">
              Recruiters haven't posted any jobs yet.
            </p>
          </div>
        )}

        <div className="mt-12 flex justify-center md:hidden">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:text-[#2E8B78]"
          >
            View All Jobs

            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;