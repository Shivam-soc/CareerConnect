import DashboardLayout from "../components/layout/DashboardLayout";
import RecruiterProfileForm from "../components/recruiter/RecruiterProfileForm";

function RecruiterProfile() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Recruiter Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information and recruiter profile.
        </p>
      </div>

      <RecruiterProfileForm />
    </DashboardLayout>
  );
}

export default RecruiterProfile;