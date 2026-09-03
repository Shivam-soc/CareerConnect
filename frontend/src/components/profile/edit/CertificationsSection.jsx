import { Award, Plus, Trash2 } from "lucide-react";

function CertificationsSection({ formData, setFormData }) {
  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          title: "",
          organization: "",
          issueDate: "",
          credentialId: "",
          credentialUrl: "",
        },
      ],
    }));
  };

  const removeCertification = (index) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleChange = (index, field, value) => {
    const updated = [...formData.certifications];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      certifications: updated,
    }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Certifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add your certifications and achievements.
          </p>

        </div>

        <button
          type="button"
          onClick={addCertification}
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-4 py-2 text-white hover:bg-[#256f61]"
        >
          <Plus size={18} />
          Add Certification
        </button>

      </div>

      {formData.certifications.length === 0 && (

        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <Award
            size={40}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 text-slate-500">
            No certifications added yet.
          </p>

        </div>

      )}

      <div className="mt-6 space-y-6">

        {formData.certifications.map((certificate, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-200 p-6"
          >

            <div className="mb-5 flex items-center justify-between">

              <h3 className="font-semibold">
                Certification #{index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeCertification(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Title
                </label>

                <input
                  type="text"
                  value={certificate.title}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "title",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Organization
                </label>

                <input
                  type="text"
                  value={certificate.organization}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "organization",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Issue Date
                </label>

                <input
                  type="date"
                  value={certificate.issueDate}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "issueDate",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Credential ID
                </label>

                <input
                  type="text"
                  value={certificate.credentialId}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "credentialId",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium">
                Credential URL
              </label>

              <input
                type="url"
                placeholder="https://..."
                value={certificate.credentialUrl}
                onChange={(e) =>
                  handleChange(
                    index,
                    "credentialUrl",
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CertificationsSection;