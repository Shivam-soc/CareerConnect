import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import jobs from "../../data/jobs";
import JobCard from "../jobs/JobCard";
import SectionHeading from "../ui/SectionHeading";

function FeaturedJobs({ search = "" }) {
  const keyword = search.toLowerCase();

  const featuredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword);

      return matchesSearch;
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 6);

  return (
    <section className="bg-[#F8FAF8] py-20 lg:py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Featured Opportunities"
          title="Jobs You'll Love"
          subtitle="Handpicked opportunities from India's fastest growing startups and top technology companies."
          action={
            <Link
              to="/jobs"
              className="group hidden items-center gap-2 text-sm font-semibold text-[#2E8B78] transition-all hover:text-[#236D5E] md:inline-flex"
            >
              View All Jobs

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          }
        />

        {featuredJobs.length > 0 ? (

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {featuredJobs.map((job, index) => (

              <motion.div
                key={job.id}
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
              No matching jobs found
            </h3>

            <p className="mt-3 text-slate-500">
              Try searching with another job title, company or location.
            </p>

          </div>

        )}

        <div className="mt-12 flex justify-center md:hidden">

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:text-[#2E8B78]"
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