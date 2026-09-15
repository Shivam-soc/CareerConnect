import { useEffect, useState } from "react";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import TopHiringCompanies from "../components/landing/TopHiringCompanies";
import FeaturedJobs from "../components/landing/FeaturedJobs";
import WhyCareerConnect from "../components/landing/WhyCareerConnect";
import CtaBand from "../components/landing/CtaBand";
import Footer from "../components/landing/Footer";

import { getJobs } from "../api/jobApi";

function Home() {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchHomeJobs = async () => {
      try {
        setLoadingJobs(true);
        setJobsError("");

        const response = await getJobs({
          search: "",
          limit: 6,
          sort: "latest",
        });

        if (!cancelled) {
          setJobs(response.data?.jobs || []);
        }
      } catch (error) {
        console.error("Failed to load homepage jobs:", error);

        if (!cancelled) {
          setJobs([]);
          setJobsError(
            error.response?.data?.message ||
              "Unable to load jobs right now."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingJobs(false);
        }
      }
    };

    fetchHomeJobs();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full min-w-0 overflow-hidden bg-[#F8FAF8]">
        {/* Hero */}
        <Hero
          search={search}
          setSearch={setSearch}
          featuredJob={jobs[0] || null}
          loading={loadingJobs}
        />

        {/* Divider */}
        <div className="mx-auto my-2 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:my-4" />

        {/* Top Hiring Companies */}
        <TopHiringCompanies />

        {/* Featured Jobs */}
        <FeaturedJobs
          jobs={jobs}
          loading={loadingJobs}
          error={jobsError}
        />

        {/* Why CareerConnect */}
        <WhyCareerConnect />

        {/* CTA */}
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}

export default Home;