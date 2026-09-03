import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

function ApplicationsHeader() {
  return (
    <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F7F3]">
          <Briefcase
            size={30}
            className="text-[#2E8B78]"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            My Applications
          </h1>

          <p className="mt-2 text-slate-500">
            Track every job you've applied for and monitor your hiring progress.
          </p>
        </div>

      </div>

      {/* Right */}

      <Link
        to="/jobs"
        className="
          inline-flex
          items-center
          rounded-xl
          bg-[#2E8B78]
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-[#236D5E]
        "
      >
        Browse More Jobs
      </Link>

    </section>
  );
}

export default ApplicationsHeader;