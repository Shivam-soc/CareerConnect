import DashboardLayout from "../components/layout/DashboardLayout";
import JobForm from "../components/jobs/JobForm";

function EditJob() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Edit Job
        </h1>

        <p className="mt-2 text-slate-500">
          Update your existing job posting.
        </p>
      </div>

      <JobForm mode="edit" />
    </DashboardLayout>
  );
}

export default EditJob;