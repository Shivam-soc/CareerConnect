import { FiBriefcase, FiCheckCircle, FiFileText } from "react-icons/fi";

function AuthBanner() {
  const features = [
    {
      icon: <FiBriefcase size={17} />,
      title: "Verified Jobs",
      text: "Apply to trusted companies with confidence.",
    },
    {
      icon: <FiFileText size={17} />,
      title: "Resume Builder",
      text: "Create ATS-friendly resumes in minutes.",
    },
    {
      icon: <FiCheckCircle size={17} />,
      title: "One Click Apply",
      text: "Track every application from one dashboard.",
    },
  ];

  return (
    <section className="relative flex h-full flex-col justify-center overflow-hidden border-r border-slate-200 bg-slate-50 px-14">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#DDF4EC_0%,transparent_45%)] opacity-70" />

      <div className="relative z-10">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Career<span className="text-[#2E8B78]">Connect</span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
          Find internships, full-time jobs and career opportunities
          from trusted companies.
        </p>

        {/* Features */}
        <div className="mt-9 space-y-3.5">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-3.5 transition hover:border-[#2E8B78]/40 hover:shadow-md"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8F7F3] text-[#2E8B78]">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-9 border-t border-slate-200 pt-5">
          <p className="text-sm text-slate-500">
            Trusted by thousands of students and recruiters across India.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AuthBanner;
