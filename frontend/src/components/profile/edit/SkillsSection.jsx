import { useState } from "react";
import { Plus, X } from "lucide-react";

function SkillsSection({ formData, setFormData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const value = skill.trim();

    if (!value) return;

    if (formData.skills.includes(value)) {
      setSkill("");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
    }));

    setSkill("");
  };

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Skills
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Add technologies and tools you're proficient in.
          </p>

        </div>

      </div>

      {/* Current Skills */}

      <div className="mt-6 flex flex-wrap gap-3">

        {formData.skills.length > 0 ? (
          formData.skills.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-[#E8F7F3] px-4 py-2 text-sm font-medium text-[#2E8B78]"
            >
              {item}

              <button
                type="button"
                onClick={() => removeSkill(index)}
              >
                <X size={16} />
              </button>

            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">
            No skills added yet.
          </p>
        )}

      </div>

      {/* Add Skill */}

      <div className="mt-8 flex gap-3">

        <input
          type="text"
          value={skill}
          placeholder="Add a skill"
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E8B78]"
        />

        <button
          type="button"
          onClick={addSkill}
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 font-medium text-white transition hover:bg-[#256f61]"
        >
          <Plus size={18} />

          Add

        </button>

      </div>

    </section>
  );
}

export default SkillsSection;