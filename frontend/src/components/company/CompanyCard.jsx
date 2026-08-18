import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

function CompanyCard({
  logo,
  name,
  industry,
  location,
  employees,
  jobs,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <img
        src={logo}
        alt={name}
        className="h-16 w-16 object-contain"
      />

      <h2 className="mt-5 text-2xl font-bold">
        {name}
      </h2>

      <p className="mt-2 text-slate-500">
        {industry}
      </p>

      <div className="mt-5 space-y-2 text-slate-600">

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <FaUsers />
          {employees}
        </div>

      </div>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
        {jobs} Open Jobs
      </button>

    </div>
  );
}

export default CompanyCard;