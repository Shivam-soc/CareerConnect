import {
  FaUsers,
  FaBriefcase,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";

function CompanyStats({ company }) {
  if (!company) return null;

  const stats = [
    {
      icon: <FaUsers className="text-3xl text-[#2E8B78]" />,
      value: company.size || "N/A",
      label: "Employees",
    },
    {
      icon: <FaBriefcase className="text-3xl text-[#2E8B78]" />,
      value: company.totalJobs || "0",
      label: "Open Jobs",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#2E8B78]" />,
      value: company.offices || "N/A",
      label: "Offices",
    },
    {
      icon: <FaGlobe className="text-3xl text-[#2E8B78]" />,
      value: company.countries || "N/A",
      label: "Countries",
    },
  ];

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          Company Statistics
        </h2>

        <p className="mt-2 text-slate-500">
          A quick overview of {company.name}.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:shadow-lg"
          >
            <div className="flex justify-center">
              {stat.icon}
            </div>

            <h3 className="mt-5 text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default CompanyStats;