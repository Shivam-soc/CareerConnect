import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaUser,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function PersonalInfo() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Personal Information
        </h2>

        <p className="mt-1 text-slate-500">
          Your personal details and professional summary.
        </p>

      </div>

      {/* About */}

      <div className="mb-8 rounded-2xl bg-slate-50 p-5">

        <h3 className="mb-3 text-lg font-semibold text-slate-900">
          About
        </h3>

        <p className="leading-7 text-slate-600">
          {mockUser.about}
        </p>

      </div>

      {/* Information Grid */}

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <FaUser className="text-blue-600" />

            <span className="font-medium text-slate-500">
              Full Name
            </span>

          </div>

          <p className="mt-3 text-lg font-semibold text-slate-900">
            {mockUser.name}
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <FaEnvelope className="text-blue-600" />

            <span className="font-medium text-slate-500">
              Email
            </span>

          </div>

          <p className="mt-3 text-lg font-semibold text-slate-900">
            {mockUser.email}
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <FaPhone className="text-blue-600" />

            <span className="font-medium text-slate-500">
              Phone
            </span>

          </div>

          <p className="mt-3 text-lg font-semibold text-slate-900">
            {mockUser.phone}
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <FaMapMarkerAlt className="text-blue-600" />

            <span className="font-medium text-slate-500">
              Location
            </span>

          </div>

          <p className="mt-3 text-lg font-semibold text-slate-900">
            {mockUser.location}
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5 md:col-span-2">

          <div className="flex items-center gap-3">

            <FaGraduationCap className="text-blue-600" />

            <span className="font-medium text-slate-500">
              Education
            </span>

          </div>

          <div className="mt-4">

            <h4 className="text-lg font-semibold text-slate-900">
              {mockUser.education[0].degree}
            </h4>

            <p className="mt-2 text-slate-600">
              {mockUser.education[0].college}
            </p>

            <p className="mt-2 text-slate-500">
              {mockUser.education[0].year}
            </p>

            <span className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              CGPA : {mockUser.education[0].cgpa}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PersonalInfo;