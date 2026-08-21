import { useState } from "react";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import TopHiringCompanies from "../components/landing/TopHiringCompanies";
import FeaturedJobs from "../components/landing/FeaturedJobs";
import WhyCareerConnect from "../components/landing/WhyCareerConnect";
import CtaBand from "../components/landing/CtaBand";
import Footer from "../components/landing/Footer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <main className="bg-[#F8FAF8]">

        <Hero
          search={search}
          setSearch={setSearch}
        />

        {/* Divider */}

        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <TopHiringCompanies />

        <FeaturedJobs
          search={search}
        />

        <WhyCareerConnect />

        

        <CtaBand />

      </main>

      <Footer />
    </>
  );
}

export default Home;