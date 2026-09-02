import { useEffect, useState } from "react";

import CompanyCard from "./CompanyCard";

import { getCompanies } from "../../api/companyApi";

function CompanyGrid() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();

      setCompanies(response.data.companies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        Loading companies...
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        No companies found.
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {companies.map((company) => (
        <CompanyCard
          key={company._id}
          company={company}
        />
      ))}
    </div>
  );
}

export default CompanyGrid;