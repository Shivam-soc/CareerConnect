import { useEffect, useState } from "react";

import CompanyCard from "./CompanyCard";
import { getCompanies } from "../../api/companyApi";

function SimilarCompanies({ currentCompany }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentCompany?._id) {
      fetchCompanies();
    }
  }, [currentCompany]);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();

      const filteredCompanies = response.data.companies
        .filter((company) => company._id !== currentCompany._id)
        .slice(0, 4);

      setCompanies(filteredCompanies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!currentCompany) return null;

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Similar Companies
        </h2>

        <p className="mt-2 text-slate-500">
          Discover more companies hiring now.
        </p>

      </div>

      {loading ? (

        <div className="py-10 text-center text-slate-500">
          Loading companies...
        </div>

      ) : companies.length === 0 ? (

        <div className="rounded-2xl border border-dashed border-slate-300 py-10 text-center text-slate-500">
          No similar companies found.
        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {companies.map((company) => (
            <CompanyCard
              key={company._id}
              company={company}
            />
          ))}

        </div>

      )}

    </section>
  );
}

export default SimilarCompanies;