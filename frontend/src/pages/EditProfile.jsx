import DashboardLayout from "../components/layout/DashboardLayout";
import ProfileForm from "../components/profile/edit/ProfileForm";

function EditProfile() {
  return (
    <DashboardLayout>

      <section className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Edit Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Keep your profile updated to increase your chances of getting hired.
        </p>
      </section>

      <ProfileForm />

    </DashboardLayout>
  );
}

export default EditProfile;