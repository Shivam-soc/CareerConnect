import CompanySearch from "./CompanySearch";

function CompanyHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Trusted Companies
        </span>

        <h1 className="mt-6 text-5xl font-bold text-slate-900">
          Explore Top Companies
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Find verified companies, discover open positions,
          and apply with confidence.
        </p>

        <div className="mx-auto mt-10 max-w-3xl">
          <CompanySearch />
        </div>

      </div>

    </section>
  );
}

export default CompanyHero;