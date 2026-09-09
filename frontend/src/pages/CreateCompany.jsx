import DashboardLayout from "../components/layout/DashboardLayout";
import CompanyForm from "../components/company/CompanyForm";

function CreateCompany() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Create Company
        </h1>

        <p className="mt-2 text-slate-500">
          Add a company before posting jobs.
        </p>
      </div>

      <CompanyForm mode="create" />
    </DashboardLayout>
  );
}

export default CreateCompany;