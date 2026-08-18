import JobCard from "./JobCard";
import jobs from "../../data/jobs";

function JobList() {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          {...job}
        />
      ))}
    </div>
  );
}

export default JobList;