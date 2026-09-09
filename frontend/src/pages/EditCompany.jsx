import DashboardLayout from "../components/layout/DashboardLayout";
import CompanyForm from "../components/company/CompanyForm";

function EditCompany() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Edit Company
        </h1>

        <p className="mt-2 text-slate-500">
          Update your company information.
        </p>
      </div>

      <CompanyForm mode="edit" />
    </DashboardLayout>
  );
}

export default EditCompany;