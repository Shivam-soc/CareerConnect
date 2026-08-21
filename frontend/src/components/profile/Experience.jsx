import { Briefcase } from "lucide-react";
import mockUser from "../../data/mockUser";

function Experience() {
  const { experience } = mockUser;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Experience
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Internships and professional experience.
          </p>

        </div>

        <div className="rounded-xl bg-[#E8F7F3] p-3">

          <Briefcase
            size={20}
            className="text-[#2E8B78]"
          />

        </div>

      </div>

      {/* Content */}

      <div className="mt-6 space-y-6">

        {experience.length > 0 ? (
          experience.map((item, index) => (

            <div
              key={index}
              className="border-l-2 border-[#2E8B78] pl-5"
            >

              <h3 className="text-base font-semibold text-slate-900">
                {item.role}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {item.company}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {item.duration}
              </p>

              {item.description && (
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              )}

            </div>

          ))
        ) : (

          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

            <p className="font-medium text-slate-700">
              No experience added yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add internships, freelance work or leadership roles to strengthen your profile.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Experience;
