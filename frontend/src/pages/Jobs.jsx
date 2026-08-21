import { useState, useMemo, useEffect } from "react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import JobSearch from "../components/jobs/JobSearch";
import JobFilters from "../components/jobs/JobFilters";
import JobList from "../components/jobs/JobList";
import Pagination from "../components/jobs/Pagination";
import SortDropdown from "../components/jobs/SortDropdown";

import Badge from "../components/ui/Badge";

import jobsData from "../data/jobs";

const JOBS_PER_PAGE = 6;

function Jobs() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("All");

  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [salary, setSalary] = useState(50);
  const [skills, setSkills] = useState([]);

  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const quickFilters = [
    "Internship",
    "Remote",
    "Fresher",
    "React",
    "AI",
    "Cloud",
    "VLSI",
  ];

  const filteredJobs = useMemo(() => {

    let data = [...jobsData];

    // Search

    if (search.trim()) {

      const keyword = search.toLowerCase();

      data = data.filter((job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.category.toLowerCase().includes(keyword) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(keyword)
        )
      );

    }

    // Location

    if (location.trim()) {

      data = data.filter((job) =>
        job.location
          .toLowerCase()
          .includes(location.toLowerCase())
      );

    }

    // Experience

    if (
      experience !== "All" &&
      experience !== "Experience"
    ) {

      data = data.filter(
        (job) => job.experience === experience
      );

    }

    // Employment Type

    if (employmentTypes.length > 0) {

      data = data.filter((job) =>
        employmentTypes.includes(job.type)
      );

    }

    // Salary

    data = data.filter((job) => {

      const value = parseInt(
        job.salary.replace(/\D/g, "")
      );

      return value <= salary;

    });

    // Skills

    if (skills.length > 0) {

      data = data.filter((job) =>
        skills.some((skill) =>
          job.skills.includes(skill)
        )
      );

    }

    // Sorting

    switch (sortBy) {

      case "salary-high":

        data.sort(
          (a, b) =>
            parseInt(b.salary.replace(/\D/g, "")) -
            parseInt(a.salary.replace(/\D/g, ""))
        );

        break;

      case "salary-low":

        data.sort(
          (a, b) =>
            parseInt(a.salary.replace(/\D/g, "")) -
            parseInt(b.salary.replace(/\D/g, ""))
        );

        break;

      case "company":

        data.sort((a, b) =>
          a.company.localeCompare(b.company)
        );

        break;

      case "rating":

        data.sort((a, b) => b.rating - a.rating);

        break;

      default:

        break;
    }

    return data;

  }, [
    search,
    location,
    experience,
    employmentTypes,
    salary,
    skills,
    sortBy,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    location,
    experience,
    employmentTypes,
    salary,
    skills,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredJobs.length / JOBS_PER_PAGE
  );

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAF8]">

        {/* Hero */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-white">

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg,#0f172a 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#2E8B78]/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-10 lg:py-12">

            <div className="text-center">

              <span className="inline-flex rounded-full bg-[#E8F7F3] px-5 py-2 text-sm font-semibold text-[#2E8B78]">

                Explore Opportunities

              </span>

              <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">

                Find Your Dream Job

              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">

                Browse thousands of verified opportunities from India's top companies.

              </p>

            </div>

            <div className="mx-auto mt-8 max-w-6xl">

              <JobSearch
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                experience={experience}
                setExperience={setExperience}
              />

            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

             {quickFilters.map((item) => {

               const active =
                search === item ||
                skills.includes(item) ||
                employmentTypes.includes(item) ||
                experience === item;

               return (

                <Badge
                  key={item}
                  variant={active ? "primary" : "gray"}
                  onClick={() => {

                    switch (item) {

                     case "Remote":

                      if (employmentTypes.includes("Remote")) {

                        setEmploymentTypes([]);

                      } else {

                        setEmploymentTypes(["Remote"]);

                      }

                      break;

                     case "Internship":

                      if (employmentTypes.includes("Internship")) {

                        setEmploymentTypes([]);

                      } else {

                        setEmploymentTypes(["Internship"]);

                      }

                       break;

                     case "Fresher":

                      setExperience(
                        experience === "Fresher"
                         ? "All"
                         : "Fresher"
                     );

                     break;

                  default:

                    setSearch(
                      search === item
                       ? ""
                       : item
                    );

                }

              }}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >

              {item}

            </Badge>

          );

        })}

            </div>

          </div>

        </section>

        {/* Jobs */}

        <section className="mx-auto max-w-7xl px-6 py-10">

          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">

            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <JobFilters
                employmentTypes={employmentTypes}
                setEmploymentTypes={setEmploymentTypes}
                salary={salary}
                setSalary={setSalary}
                skills={skills}
                setSkills={setSkills}
              />

            </aside>

            <div>

              <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-slate-900">

                    {filteredJobs.length} Jobs Found

                  </h2>

                  <p className="mt-2 text-slate-500">

                    Verified opportunities updated daily.

                  </p>

                </div>

                <div className="w-full md:w-60">

                  <SortDropdown
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                  />

                </div>

              </div>

              <JobList jobs={paginatedJobs} />

              <div className="mt-12 flex justify-center">

                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Jobs;