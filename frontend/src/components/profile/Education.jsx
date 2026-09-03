import { GraduationCap } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Education() {
  const { user } = useAuth();

  const education = Array.isArray(user?.education)
    ? user.education[0]
    : user?.education;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Education
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Academic qualifications.
          </p>
        </div>

        <div className="rounded-xl bg-[#E8F7F3] p-3">
          <GraduationCap
            size={20}
            className="text-[#2E8B78]"
          />
        </div>

      </div>

      {/* Body */}

      {!education ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No education information added yet.
        </div>
      ) : (
        <div className="mt-6">

          <h3 className="text-base font-semibold text-slate-900">
            {education.degree || "-"}
          </h3>

          <p className="mt-1 text-slate-600">
            {education.college || "-"}
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                CGPA
              </p>

              <p className="mt-1 font-medium text-slate-800">
                {education.cgpa || "-"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Duration
              </p>

              <p className="mt-1 font-medium text-slate-800">
                {education.duration || "-"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Status
              </p>

              <p className="mt-1 font-medium text-[#2E8B78]">
                {education.status || "-"}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Education;