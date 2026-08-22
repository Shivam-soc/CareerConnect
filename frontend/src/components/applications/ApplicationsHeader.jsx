import { Link } from "react-router-dom";

function ApplicationsHeader() {
  return (
    <section className="mb-6 flex items-start justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-semibold text-slate-900">
          Applications
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Track your job applications and monitor every stage of your hiring journey.
        </p>

      </div>

      {/* Right */}

      <Link
        to="/jobs"
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
        Explore Jobs
      </Link>

    </section>
  );
}

export default ApplicationsHeader;