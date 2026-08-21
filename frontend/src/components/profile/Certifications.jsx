import { Award } from "lucide-react";
import mockUser from "../../data/mockUser";

function Certifications() {
  const { certifications } = mockUser;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Certifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Professional certifications and achievements.
          </p>

        </div>

        <div className="rounded-xl bg-[#E8F7F3] p-3">

          <Award
            size={20}
            className="text-[#2E8B78]"
          />

        </div>

      </div>

      {/* List */}

      <div className="mt-6 space-y-4">

        {certifications.map((certificate) => (

          <div
            key={certificate.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-slate-200
              p-4
              transition
              hover:border-[#2E8B78]
            "
          >

            <div>

              <h3 className="text-base font-semibold text-slate-900">
                {certificate.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {certificate.organization}
              </p>

            </div>

            <span className="text-sm text-slate-400">
              {certificate.year}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;