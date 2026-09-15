import { motion } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

import JobCard from "../jobs/JobCard";
import SectionHeading from "../ui/SectionHeading";

function FeaturedJobs({
  jobs = [],
  loading = false,
  error = "",
}) {
  return (
    <section className="w-full min-w-0 overflow-hidden bg-[#F8FAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <SectionHeading
          eyebrow="Featured Opportunities"
          title="Latest Jobs"
          subtitle="Explore the newest opportunities from top recruiters."
          action={
            <Link
              to="/jobs"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-md sm:inline-flex"
            >
              View All Jobs

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          }
        />

        {/* Loading */}

        {loading && (
          <div className="mt-10 grid min-w-0 gap-6 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-slate-200" />

                    <div className="min-w-0 flex-1">
                      <div className="h-4 w-2/3 rounded bg-slate-200" />
                      <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
                    </div>
                  </div>

                  <div className="mt-7 h-5 w-4/5 rounded bg-slate-200" />

                  <div className="mt-4 h-3 w-full rounded bg-slate-100" />
                  <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="h-10 rounded-xl bg-slate-100" />
                    <div className="h-10 rounded-xl bg-slate-100" />
                  </div>

                  <div className="mt-7 h-11 rounded-xl bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-amber-100 bg-amber-50 px-6 py-12 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
              <RefreshCw className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Jobs are taking a moment to load
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              You can browse all available opportunities while we reconnect
              to the job service.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Browse Jobs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Jobs */}

        {!loading && !error && jobs.length > 0 && (
          <div className="mt-10 grid min-w-0 gap-6 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.05, 0.25),
                }}
                className="min-w-0"
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty */}

        {!loading && !error && jobs.length === 0 && (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              No Jobs Available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Recruiters haven't posted any opportunities yet. Check back
              soon or explore the jobs page.
            </p>

            <Link
              to="/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Browse Jobs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* Mobile CTA */}

        <div className="mt-8 sm:hidden">
          <Link
            to="/jobs"
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:text-emerald-700"
          >
            View All Jobs

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;