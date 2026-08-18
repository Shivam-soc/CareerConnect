import {
  FaUsers,
  FaBriefcase,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    value: "180K+",
    label: "Employees",
  },
  {
    icon: <FaBriefcase className="text-4xl text-green-600" />,
    value: "45",
    label: "Open Jobs",
  },
  {
    icon: <FaBuilding className="text-4xl text-purple-600" />,
    value: "70+",
    label: "Offices",
  },
  {
    icon: <FaGlobe className="text-4xl text-orange-600" />,
    value: "50+",
    label: "Countries",
  },
];

function CompanyStats() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
          Company Statistics
        </h2>

        <p className="mt-2 text-slate-500">
          A quick overview of Google's global presence.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat) => (

          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >

            <div className="flex justify-center">
              {stat.icon}
            </div>

            <h3 className="mt-5 text-4xl font-bold text-slate-900">
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