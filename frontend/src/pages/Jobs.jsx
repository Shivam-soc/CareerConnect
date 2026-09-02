import { useState, useEffect, useMemo } from "react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import JobSearch from "../components/jobs/JobSearch";
import JobFilters from "../components/jobs/JobFilters";
import JobList from "../components/jobs/JobList";
import Pagination from "../components/jobs/Pagination";
import SortDropdown from "../components/jobs/SortDropdown";

import Badge from "../components/ui/Badge";

import { getJobs } from "../api/jobApi";

const JOBS_PER_PAGE = 6;

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("All");

  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [salary, setSalary] = useState(50);
  const [skills, setSkills] = useState([]);

  const [sortBy, setSortBy] = useState("latest");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalJobs, setTotalJobs] = useState(0);

  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const quickFilters = [
    "Internship",
    "Remote",
    "Fresher",
    "React",
    "AI",
    "Cloud",
    "VLSI",
  ];

  useEffect(() => {
    fetchJobs();
  }, [
    search,
    location,
    experience,
    employmentTypes,
    sortBy,
    currentPage,
  ]);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const response = await getJobs({
        search,
        location,
        experience:
          experience === "All"
            ? ""
            : experience,
        employmentType:
          employmentTypes.length > 0
            ? employmentTypes[0]
            : "",
        page: currentPage,
        limit: JOBS_PER_PAGE,
        sort: sortBy,
      });

      setJobs(response.data.jobs || []);

      setTotalJobs(response.data.totalJobs || 0);

      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        "Failed to load jobs."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    location,
    experience,
    employmentTypes,
    sortBy,
  ]);

  if (error) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAF8] flex items-center justify-center">
        <p className="text-lg text-red-500">
          {error}
        </p>
      </main>
      <Footer />
    </>
  );
}

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
                employmentTypes.includes(item) ||
                experience === item;

              return (
                <Badge
                  key={item}
                  variant={active ? "primary" : "gray"}
                  className="cursor-pointer"
                  onClick={() => {

                    switch (item) {

                      case "Remote":

                        setEmploymentTypes(
                          employmentTypes.includes("Remote")
                            ? []
                            : ["Remote"]
                        );

                        break;

                      case "Internship":

                        setEmploymentTypes(
                          employmentTypes.includes("Internship")
                            ? []
                            : ["Internship"]
                        );

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
                  {totalJobs} Jobs Found
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

            {loading ? (

              <div className="py-20 text-center">
                <p className="text-lg font-medium text-salte-500">
                  Loading jobs. . .
                </p>

              </div>

            ) : (

              <JobList jobs={jobs} />

            )}

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
 )
};

export default Jobs;