import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import ApplyModal from "../components/jobs/ApplyModal";
import JobOverview from "../components/jobs/JobOverview";
import CompanyInfo from "../components/jobs/CompanyInfo";
import ApplySection from "../components/jobs/ApplySection";
import SimilarJobs from "../components/jobs/SimilarJobs";

import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const [openModal, setOpenModal] = useState(false);

  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  if (!job) {
    return <Navigate to="/jobs" replace />;
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAF8]">

        <section className="mx-auto max-w-7xl px-6 py-10">

          <JobOverview job={job} />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">

            {/* Left */}

            <div className="lg:col-span-2">

              <CompanyInfo job={job} />

            </div>

            {/* Right */}

            <div>

              <ApplySection
                job={job}
                onApply={() => setOpenModal(true)}
              />

            </div>

          </div>

          <div className="mt-16">

            <SimilarJobs currentJob={job} />

          </div>

        </section>

      </main>

      {/* Apply Modal */}

      <ApplyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        job={job}
      />

      <Footer />
    </>
  );
}

export default JobDetails;