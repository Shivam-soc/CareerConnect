import CompanySearch from "./CompanySearch";

function CompanyHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg,#0f172a 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blur Effects */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#2E8B78]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:py-12">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-[#E8F7F3] px-5 py-2 text-sm font-semibold text-[#2E8B78]">
            Trusted Companies
          </span>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
            Explore Top Companies
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Find verified companies, discover open positions, and apply with confidence.
          </p>

        </div>

        <div className="mx-auto mt-8 max-w-5xl">
          <CompanySearch />
        </div>

      </div>

    </section>
  );
}

export default CompanyHero;