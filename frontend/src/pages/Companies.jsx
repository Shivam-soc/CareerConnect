import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import CompanyHero from "../components/company/CompanyHero";
import CompanyGrid from "../components/company/CompanyGrid";

function Companies() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAF8]">

        <CompanyHero />

        <section className="mx-auto max-w-7xl px-6 py-10">

          <div className="mb-10">

            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Featured Companies
            </h2>

            <p className="mt-3 text-lg text-slate-500">
              Explore verified companies hiring across India.
            </p>

          </div>

          <CompanyGrid />

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Companies;