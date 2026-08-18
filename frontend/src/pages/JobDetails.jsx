import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import JobOverview from "../components/jobs/JobOverview";
import CompanyInfo from "../components/jobs/CompanyInfo";
import ApplySection from "../components/jobs/ApplySection";
import SimilarJobs from "../components/jobs/SimilarJobs";

function JobDetails() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-10">

        <div className="mx-auto max-w-7xl px-6">

          <JobOverview />

          <div className="mt-8 grid gap-8 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <CompanyInfo />
            </div>

            <div>
              <ApplySection />
            </div>

          </div>

          <div className="mt-12">
            <SimilarJobs />
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default JobDetails;