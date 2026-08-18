import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import CompanyOverview from "../components/company/CompanyOverview";
import CompanyAbout from "../components/company/CompanyAbout";
import CompanyBenefits from "../components/company/CompanyBenefits";
import CompanyJobs from "../components/company/CompanyJobs";
import CompanyReviews from "../components/company/CompanyReviews";
import SimilarCompanies from "../components/company/SimilarCompanies";
import CompanyStats from "../components/company/CompanyStats";

function CompanyDetails() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 py-10">

        <div className="mx-auto max-w-7xl space-y-8 px-6">

          <CompanyOverview />

          <CompanyAbout />

          <CompanyBenefits />

          <CompanyStats />

          <CompanyJobs />

          <CompanyReviews />

          <SimilarCompanies />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default CompanyDetails;