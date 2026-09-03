import { Briefcase, Plus, Trash2 } from "lucide-react";

function ExperienceSection({ formData, setFormData }) {
  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (index, field, value) => {
    const updated = [...formData.experience];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      experience: updated,
    }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Experience
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add your internships and work experience.
          </p>

        </div>

        <button
          type="button"
          onClick={addExperience}
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-4 py-2 text-white hover:bg-[#256f61]"
        >
          <Plus size={18} />
          Add Experience
        </button>

      </div>

      {formData.experience.length === 0 && (

        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <Briefcase
            size={40}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 text-slate-500">
            No experience added yet.
          </p>

        </div>

      )}

      <div className="mt-6 space-y-6">

        {formData.experience.map((exp, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-200 p-6"
          >

            <div className="mb-5 flex items-center justify-between">

              <h3 className="font-semibold">
                Experience #{index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Job Role
                </label>

                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) =>
                    handleChange(index, "role", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Company
                </label>

                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    handleChange(index, "company", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Duration
                </label>

                <input
                  type="text"
                  placeholder="Jan 2025 - Jun 2025"
                  value={exp.duration}
                  onChange={(e) =>
                    handleChange(index, "duration", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2E8B78]"
                />

              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                rows={4}
                value={exp.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
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

export default ExperienceSection;