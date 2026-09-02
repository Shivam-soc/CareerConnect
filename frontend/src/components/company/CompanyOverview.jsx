import {
  FaCheckCircle,
  FaGlobe,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

function CompanyOverview({ company }) {
  if (!company) return null;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          {company.logo ? (
            <img
              src={company.logo}
              alt={company.name}
              className="h-24 w-24 rounded-3xl bg-slate-100 p-4 object-contain"
            />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-100 text-4xl font-bold text-[#2E8B78]">
              {company.name?.charAt(0)}
            </div>
          )}

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-4xl font-bold">
                {company.name}
              </h1>

              <FaCheckCircle className="text-green-500" />

            </div>

            <p className="mt-2 text-lg text-slate-500">
              {company.industry}
            </p>

            <div className="mt-5 flex flex-wrap gap-6 text-slate-600">

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                {company.location}
              </span>

              <span className="flex items-center gap-2">
                <FaUsers />
                {company.size || "Not Available"}
              </span>

            </div>

          </div>

        </div>

        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-[#2E8B78] px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#236D5E] hover:shadow-lg"
        >
          <FaGlobe className="mr-2" />
          Visit Website
        </a>

      </div>

    </section>
  );
}

export default CompanyOverview;