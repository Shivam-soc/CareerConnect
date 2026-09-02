function CompanyAbout({ company }) {
  if (!company) return null;

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        About {company.name}
      </h2>

      <p className="leading-8 text-slate-600">
        {company.description || "No company description available."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-5">
          <p className="text-sm text-slate-500">
            Industry
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {company.industry || "Not Available"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-5">
          <p className="text-sm text-slate-500">
            Founded
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {company.founded || "Not Available"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-5">
          <p className="text-sm text-slate-500">
            Company Size
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {company.size || "Not Available"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-5">
          <p className="text-sm text-slate-500">
            Headquarters
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {company.location || "Not Available"}
          </p>
        </div>

      </div>

    </section>
  );
}

export default CompanyAbout;