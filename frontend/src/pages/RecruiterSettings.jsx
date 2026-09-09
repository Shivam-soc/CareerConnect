import DashboardLayout from "../components/layout/DashboardLayout";

function RecruiterSettings() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Recruiter Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account settings.
        </p>

        <div className="mt-8">
          <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
            Change Password
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default RecruiterSettings;