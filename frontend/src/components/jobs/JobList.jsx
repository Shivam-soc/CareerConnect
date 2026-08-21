import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";

function JobList({ jobs }) {

  if (!jobs || jobs.length === 0) {
    return (
      <div className="rounded-[30px] border border-dashed border-slate-300 bg-white py-20 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F7F3] text-4xl">
          🔍
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          No Jobs Found
        </h2>

        <p className="mt-3 text-slate-500">
          Try changing your search or filters.
        </p>

      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">

      <motion.div
        layout
        className="grid gap-6 md:grid-cols-2"
      >

        {jobs.map((job) => (

          <motion.div
            key={job.id}
            layout
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <JobCard job={job} />

          </motion.div>

        ))}

      </motion.div>

    </AnimatePresence>
  );
}

export default JobList;