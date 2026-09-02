import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

import CompanyOverview from "../components/company/CompanyOverview";
import CompanyAbout from "../components/company/CompanyAbout";
import CompanyBenefits from "../components/company/CompanyBenefits";
import CompanyJobs from "../components/company/CompanyJobs";
import CompanyReviews from "../components/company/CompanyReviews";
import SimilarCompanies from "../components/company/SimilarCompanies";
import CompanyStats from "../components/company/CompanyStats";

import { getCompanyById } from "../api/companyApi";

function CompanyDetails() {
  const { id } = useParams();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCompany();
  }, [id]);

  const fetchCompany = async () => {
    try {
      const response = await getCompanyById(id);

      setCompany(response.data.company);
    } catch (error) {
      console.error(error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center bg-[#F8FAF8]">
          <h2 className="text-xl font-semibold">
            Loading Company...
          </h2>
        </main>

        <Footer />
      </>
    );
  }

  if (notFound || !company) {
    return <Navigate to="/companies" replace />;
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAF8] py-10">

        <div className="mx-auto max-w-7xl space-y-8 px-6">

          <CompanyOverview company={company} />

          <CompanyAbout company={company} />

          <CompanyBenefits company={company} />

          <CompanyStats company={company} />

          <CompanyJobs company={company} />

          <CompanyReviews company={company} />

          <SimilarCompanies currentCompany={company} />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default CompanyDetails;