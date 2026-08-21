import {
  FileText,
  CheckCircle2,
  ClipboardList,
  Gift,
  Code2,
} from "lucide-react";

function CompanyInfo({ job }) {
  if (!job) return null;

  const {
    description,
    responsibilities = [],
    requirements = [],
    benefits = [],
    skills = [],
  } = job;

  return (
    <div className="space-y-8">

      {/* About */}

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <FileText
              size={22}
              className="text-[#2E8B78]"
            />

          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            About this Job
          </h2>

        </div>

        <p className="leading-8 text-slate-600">
          {description}
        </p>

      </section>

      {/* Responsibilities */}

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <ClipboardList
              size={22}
              className="text-[#2E8B78]"
            />

          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Responsibilities
          </h2>

        </div>

        <div className="space-y-4">

          {responsibilities.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-[#2E8B78]"
              />

              <p className="leading-7 text-slate-600">
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Requirements */}

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <CheckCircle2
              size={22}
              className="text-[#2E8B78]"
            />

          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Requirements
          </h2>

        </div>

        <div className="space-y-4">

          {requirements.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-[#2E8B78]"
              />

              <p className="leading-7 text-slate-600">
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Benefits */}

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <Gift
              size={22}
              className="text-[#2E8B78]"
            />

          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Benefits
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-5 transition-all duration-300 hover:border-[#2E8B78] hover:bg-[#E8F7F3]"
            >

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-[#2E8B78]"
                />

                <span className="font-medium text-slate-700">
                  {item}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Skills */}

      <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">

            <Code2
              size={22}
              className="text-[#2E8B78]"
            />

          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Required Skills
          </h2>

        </div>

        <div className="flex flex-wrap gap-3">

          {skills.map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:text-[#2E8B78]"
            >
              {skill}
            </span>

          ))}

        </div>

      </section>

    </div>
  );
}

export default CompanyInfo;