function PersonalInfo() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Avatar */}

      <div className="flex flex-col items-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F7F3] text-3xl font-bold text-[#2E8B78]">
          SK
        </div>

        <h2 className="mt-4 text-xl font-semibold text-slate-900">
          Shivam Kumar
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Electronics & Telecommunication Student
        </p>

        <span className="mt-3 rounded-full bg-[#E8F7F3] px-3 py-1 text-xs font-medium text-[#2E8B78]">
          Open to Opportunities
        </span>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-slate-200" />

      {/* Details */}

      <div className="space-y-5">

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Email
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800">
            shivam@example.com
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Phone
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800">
            +91 98765 43210
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Location
          </p>

          <p className="mt-1 text-sm font-medium text-slate-800">
            Pune, Maharashtra
          </p>
        </div>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-slate-200" />

      {/* Profile Completion */}

      <div>

        <div className="flex items-center justify-between">

          <p className="text-sm font-medium text-slate-700">
            Profile Completion
          </p>

          <span className="text-sm font-semibold text-[#2E8B78]">
            82%
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-[#2E8B78]"
            style={{ width: "82%" }}
          />

        </div>

      </div>

    </section>
  );
}

export default PersonalInfo;