import JobCard from "./JobCard";

const jobs = [
  {
    company: "Google",
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹22 LPA",
    type: "Full Time",
    experience: "1–3 Years",
    rating: "4.8",
    posted: "2 days ago",
    verified: true,
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    company: "Microsoft",
    title: "Backend Engineer",
    location: "Hyderabad",
    salary: "₹18 LPA",
    type: "Full Time",
    experience: "2–4 Years",
    rating: "4.7",
    posted: "1 day ago",
    verified: true,
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    company: "Adobe",
    title: "Software Engineer",
    location: "Noida",
    salary: "₹20 LPA",
    type: "Hybrid",
    experience: "Fresher",
    rating: "4.6",
    posted: "Today",
    verified: true,
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    company: "Amazon",
    title: "Cloud Engineer",
    location: "Pune",
    salary: "₹24 LPA",
    type: "Remote",
    experience: "2–5 Years",
    rating: "4.9",
    posted: "3 days ago",
    verified: true,
    skills: ["AWS", "Docker", "Kubernetes"],
  },
];

function JobList() {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard
          key={`${job.company}-${job.title}`}
          {...job}
        />
      ))}
    </div>
  );
}

export default JobList;