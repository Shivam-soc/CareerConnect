import google from "../../assets/logos/google.svg";
import {
  FaCheckCircle,
  FaGlobe,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

function CompanyOverview() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-6">

          <img
            src={google}
            alt="Google"
            className="h-24 w-24 rounded-3xl bg-slate-100 p-4"
          />

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-4xl font-bold">
                Google
              </h1>

              <FaCheckCircle className="text-green-500" />

            </div>

            <p className="mt-2 text-lg text-slate-500">
              Technology Company
            </p>

            <div className="mt-5 flex flex-wrap gap-6 text-slate-600">

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Bangalore
              </span>

              <span className="flex items-center gap-2">
                <FaUsers />
                180,000+ Employees
              </span>

            </div>

          </div>

        </div>

        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FaGlobe className="mr-2 inline" />
          Visit Website
        </a>

      </div>

    </section>
  );
}

export default CompanyOverview;