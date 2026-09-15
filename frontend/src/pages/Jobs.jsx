import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();

  /* ========================================
     SEARCH FROM URL
  ========================================= */

  const urlSearch = searchParams.get("search") || "";

  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState(urlSearch);
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
  const [error, setError] = useState("");

  /* ========================================
     QUICK FILTERS
  ========================================= */

  const quickFilters = [
    "Internship",
    "Remote",
    "Fresher",
    "React",
    "AI",
    "Cloud",
    "VLSI",
  ];

  /* ========================================
     SYNC URL SEARCH → STATE
  ========================================= */

  useEffect(() => {
    setSearch(urlSearch);
    setCurrentPage(1);
  }, [urlSearch]);

  /* ========================================
     FETCH JOBS
  ========================================= */

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
      setError("");

      const response = await getJobs({
        search,
        location,
        experience: experience === "All" ? "" : experience,
        employmentType:
          employmentTypes.length > 0
            ? employmentTypes[0]
            : "",
        page: currentPage,
        limit: JOBS_PER_PAGE,
        sort: sortBy,
      });

      setJobs(response.data?.jobs || []);

      setTotalJobs(
        response.data?.pagination?.totalJobs || 0
      );

      setTotalPages(
        response.data?.pagination?.totalPages || 1
      );
    } catch (error) {
      console.error("Failed to load jobs:", error);

      setJobs([]);

      setTotalJobs(0);
      setTotalPages(1);

      setError(
        error.response?.data?.message ||
          "Failed to load jobs."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ========================================
     SEARCH INPUT
     Keep URL synchronized
  ========================================= */

  const handleSearchChange = (value) => {
    setSearch(value);

    setCurrentPage(1);

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  };

  /* ========================================
     FILTER PAGE RESET
  ========================================= */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    location,
    experience,
    employmentTypes,
    sortBy,
  ]);

  /* ========================================
     ERROR SCREEN
  ========================================= */

  if (error) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-[#F8FAF8] px-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900">
              Something went wrong
            </h2>

            <p className="mt-2 text-red-500">
              {error}
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full min-w-0 overflow-hidden bg-[#F8FAF8]">
        {/* ========================================
            HERO
        ========================================= */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          {/* Grid background */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg,#0f172a 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow */}

          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#2E8B78]/10 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />

          <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            {/* Heading */}

            <div className="text-center">
              <span className="inline-flex rounded-full bg-[#E8F7F3] px-5 py-2 text-sm font-semibold text-[#2E8B78]">
                Explore Opportunities
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Find Your Dream Job
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Browse verified opportunities from India's
                top companies.
              </p>
            </div>

            {/* Search */}

            <div className="mx-auto mt-8 max-w-6xl">
              <JobSearch
                search={search}
                setSearch={handleSearchChange}
                location={location}
                setLocation={setLocation}
                experience={experience}
                setExperience={setExperience}
              />
            </div>

            {/* Quick filters */}

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
                          handleSearchChange(
                            search === item ? "" : item
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

        {/* ========================================
            JOB RESULTS
        ========================================= */}

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* Filters */}

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

            {/* Results */}

            <div className="min-w-0">
              {/* Results heading */}

              <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {totalJobs} Jobs Found
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 sm:text-base">
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

              {/* Loading */}

              {loading ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {Array.from({ length: JOBS_PER_PAGE }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6"
                      >
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-xl bg-slate-200" />

                          <div className="flex-1">
                            <div className="h-4 w-2/3 rounded bg-slate-200" />

                            <div className="mt-2 h-3 w-1/2 rounded bg-slate-100" />
                          </div>
                        </div>

                        <div className="mt-6 h-5 w-4/5 rounded bg-slate-200" />

                        <div className="mt-4 h-3 w-full rounded bg-slate-100" />

                        <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />

                        <div className="mt-6 h-10 rounded-xl bg-slate-100" />
                      </div>
                    )
                  )}
                </div>
              ) : jobs.length > 0 ? (
                <JobList jobs={jobs} />
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">
                    No jobs found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try changing your search or filters.
                  </p>
                </div>
              )}

              {/* Pagination */}

              {!loading && totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Jobs;