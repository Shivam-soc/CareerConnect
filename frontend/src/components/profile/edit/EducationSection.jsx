import { Plus, Trash2, GraduationCap } from "lucide-react";

function EducationSection({ formData, setFormData }) {
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          college: "",
          year: "",
          cgpa: "",
        },
      ],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (index, field, value) => {
    const updated = [...formData.education];

    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      education: updated,
    }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Education
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add your educational qualifications.
          </p>

        </div>

        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-4 py-2 text-white transition hover:bg-[#256f61]"
        >
          <Plus size={18} />
          Add Education
        </button>

      </div>

      {formData.education.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <GraduationCap
            className="mx-auto text-slate-400"
            size={40}
          />

          <p className="mt-3 text-slate-500">
            No education added yet.
          </p>

        </div>
      )}

      <div className="mt-6 space-y-6">

        {formData.education.map((edu, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-200 p-6"
          >

            <div className="mb-5 flex items-center justify-between">

              <h3 className="font-semibold text-slate-800">
                Education #{index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Degree
                </label>

                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "degree",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#2E8B78] outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  College
                </label>

                <input
                  type="text"
                  value={edu.college}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "college",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#2E8B78] outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Passing Year
                </label>

                <input
                  type="text"
                  value={edu.year}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "year",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#2E8B78] outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium">
                  CGPA
                </label>

                <input
                  type="text"
                  value={edu.cgpa}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "cgpa",
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#2E8B78] outline-none"
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default EducationSection;