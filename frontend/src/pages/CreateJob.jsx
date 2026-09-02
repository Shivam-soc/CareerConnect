import DashboardLayout from "../components/layout/DashboardLayout";
import CreateJobForm from "../components/jobs/CreateJobForm";

function CreateJob() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Create New Job
        </h1>

        <p className="mt-2 text-slate-500">
          Fill in the details below to publish a new job opening.
        </p>
      </div>

      <CreateJobForm />
    </DashboardLayout>
  );
}

export default CreateJob;