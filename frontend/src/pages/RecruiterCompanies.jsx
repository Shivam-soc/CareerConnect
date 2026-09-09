import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";
import {
  getRecruiterCompanies,
  deleteCompany,
} from "../api/companyApi";

function RecruiterCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.data.companies || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this company?")) return;

    try {
      await deleteCompany(id);

      setCompanies((prev) =>
        prev.filter((company) => company._id !== id)
      );

      alert("Company deleted.");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Unable to delete company."
      );
    }
  };

  return (
    <DashboardLayout>
      <section className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            My Companies
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your companies.
          </p>
        </div>

        <Link
          to="/recruiter/companies/create"
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 font-semibold text-white hover:bg-[#236D5E]"
        >
          <Plus size={18} />
          Create Company
        </Link>
      </section>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        {loading ? (
          <p>Loading...</p>
        ) : companies.length === 0 ? (
          <p>No companies found.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-4 text-left">Company</th>
                <th className="pb-4 text-left">Industry</th>
                <th className="pb-4 text-left">Location</th>
                <th className="pb-4 text-left">Website</th>
                <th className="pb-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company) => (
                <tr
                  key={company._id}
                  className="border-b border-slate-100"
                >
                  <td className="py-5 font-semibold">
                    {company.name}
                  </td>

                  <td>{company.industry}</td>

                  <td>{company.location}</td>

                  <td>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#2E8B78]"
                    >
                      Visit
                    </a>
                  </td>

                  <td>
                    <div className="flex justify-end gap-3">
                      <Link
                        to={`/recruiter/companies/${company._id}/edit`}
                        className="rounded-lg border p-2 hover:border-blue-500 hover:text-blue-600"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(company._id)
                        }
                        className="rounded-lg border p-2 hover:border-red-500 hover:text-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default RecruiterCompanies;