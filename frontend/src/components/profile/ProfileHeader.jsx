import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaPen,
} from "react-icons/fa";

function ProfileHeader() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Cover */}

      <div className="relative h-56 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">

        <div className="absolute inset-0 bg-black/10"></div>

      </div>

      {/* Profile */}

      <div className="relative px-8 pb-8">

        {/* Avatar */}

        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex items-end gap-6">

            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="
                h-36
                w-36
                rounded-full
                border-4
                border-white
                object-cover
                shadow-lg
              "
            />

            <div className="pb-2">

              <h1 className="text-4xl font-bold text-slate-900">
                Shivam Kumar
              </h1>

              <p className="mt-2 text-lg text-slate-600">
                Electronics & Telecommunication Student
              </p>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  Pune, Maharashtra
                </span>

                <span className="flex items-center gap-2">
                  <FaEnvelope />
                  shivam@email.com
                </span>

                <span className="flex items-center gap-2">
                  <FaPhone />
                  +91 XXXXX XXXXX
                </span>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-3">

            <button
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                font-semibold
                transition
                hover:bg-slate-100
              "
            >
              <FaDownload />

              Resume

            </button>

            <button
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              <FaPen />

              Edit Profile

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProfileHeader;