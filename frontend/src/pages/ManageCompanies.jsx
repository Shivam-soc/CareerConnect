import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import CompaniesTable from "../components/admin/CompaniesTable";
import { getCompanies } from "../api/adminApi";

function ManageCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);

      const response = await getCompanies();

      setCompanies(response.data.companies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Manage Companies
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all registered companies.
        </p>
      </div>

      <CompaniesTable
        companies={companies}
        loading={loading}
        refresh={fetchCompanies}
      />
    </DashboardLayout>
  );
}

export default ManageCompanies;