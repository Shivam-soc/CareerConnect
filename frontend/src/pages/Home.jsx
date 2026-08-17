import { useState } from "react";

import Hero from "../components/landing/Hero";
import TrustedCompanies from "../components/landing/TrustedCompanies";
import FeaturedJobs from "../components/landing/FeaturedJobs";
import Categories from "../components/landing/Categories";
import Testimonials from "../components/landing/Testimonials";
import Newsletter from "../components/landing/Newsletter";
import Stats from "../components/landing/Stats";
import Footer from "../components/landing/Footer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <main>

      <Hero
        search={search}
        setSearch={setSearch}
      />

      <TrustedCompanies />

      <FeaturedJobs search={search} />

      <Categories />

      <Testimonials />

      <Newsletter />

      <Stats />

      <Footer />

    </main>
  );
}

export default Home;