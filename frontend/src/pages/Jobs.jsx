import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import JobSearch from "../components/jobs/JobSearch";
import JobFilters from "../components/jobs/JobFilters";
import JobList from "../components/jobs/JobList";
import Pagination from "../components/jobs/Pagination";
import SortDropdown from "../components/jobs/SortDropdown";

function Jobs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">

        {/* Hero */}
        <section className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14">

            <div className="text-center">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Explore Opportunities
              </span>

              <h1 className="mt-6 text-5xl font-bold text-slate-900">
                Find Your Dream Job
              </h1>

              <p className="mt-4 text-lg text-slate-500">
                Browse thousands of verified jobs from top companies.
              </p>

            </div>

            <div className="mt-10">
              <JobSearch />
            </div>

          </div>
        </section>

        {/* Jobs Section */}
        <section className="mx-auto max-w-7xl px-6 py-12">

          <div className="grid gap-8 lg:grid-cols-4">

            {/* Sidebar */}
            <aside>
              <JobFilters />
            </aside>

            {/* Job List */}
            <div className="lg:col-span-3">

              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                <h2 className="text-xl font-bold text-slate-800">
                  Showing 120 Jobs
                </h2>

                <p className="text-slate-500">
                  Explore opportunities from top companies across various industries.
                </p>  

                </div>

              
                <SortDropdown />

              </div>

              <JobList />

              <div className="mt-10 flex justify-center">
                <Pagination />
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