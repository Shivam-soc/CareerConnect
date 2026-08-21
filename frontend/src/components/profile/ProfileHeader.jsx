import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <section className="mb-6 flex items-start justify-between">

      <div>

        <h1 className="text-3xl font-semibold text-slate-900">
          Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your personal information, resume and career profile.
        </p>

      </div>

      <Link
        to="/profile/edit"
        className="
          rounded-xl
          bg-[#2E8B78]
          px-5
          py-2.5
          text-sm
          font-medium
          text-white
          transition
          hover:opacity-90
        "
      >
        Edit Profile
      </Link>

    </section>
  );
}

export default ProfileHeader;