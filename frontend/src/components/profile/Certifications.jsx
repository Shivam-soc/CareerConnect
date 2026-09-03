import { Award, ExternalLink } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Certifications() {
  const { user } = useAuth();

  const certifications = user?.certifications || [];

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

        {certifications.length > 0 ? (
          certifications.map((certificate, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border
                border-slate-200
                p-5
                transition
                hover:border-[#2E8B78]
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-base font-semibold text-slate-900">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {certificate.organization}
                  </p>

                  {certificate.issueDate && (
                    <p className="mt-2 text-xs text-slate-400">
                      Issued: {certificate.issueDate}
                    </p>
                  )}

                  {certificate.credentialId && (
                    <p className="mt-1 text-xs text-slate-400">
                      Credential ID: {certificate.credentialId}
                    </p>
                  )}

                </div>

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2E8B78] hover:text-[#236D5E]"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}

              </div>

            </div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

            <p className="font-medium text-slate-700">
              No certifications added yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add certifications from Coursera, NPTEL, MATLAB, AWS, Cisco,
              Google, Microsoft, or other platforms to strengthen your profile.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Certifications;