import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import CompanyHero from "../components/company/CompanyHero";
import CompanyGrid from "../components/company/CompanyGrid";

function Companies() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">

        <CompanyHero />

        <section className="mx-auto max-w-7xl px-6 py-16">

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-slate-900">
              Featured Companies
            </h2>

            <p className="mt-3 text-slate-500">
              Explore verified companies hiring now.
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