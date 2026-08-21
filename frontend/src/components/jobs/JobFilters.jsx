import { RotateCcw } from "lucide-react";

function JobFilters({
  employmentTypes,
  setEmploymentTypes,
  salary,
  setSalary,
  skills,
  setSkills,
}) {
  const jobTypes = [
    "Full Time",
    "Internship",
    "Part Time",
    "Remote",
  ];

  const skillList = [
    "React",
    "Node.js",
    "Java",
    "Python",
    "SQL",
    "AI",
    "Cloud",
    "VLSI",
  ];

  const toggleEmployment = (type) => {
    if (employmentTypes.includes(type)) {
      setEmploymentTypes(
        employmentTypes.filter((t) => t !== type)
      );
    } else {
      setEmploymentTypes([...employmentTypes, type]);
    }
  };

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const clearFilters = () => {
    setEmploymentTypes([]);
    setSalary(50);
    setSkills([]);
  };

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-slate-900">
          Filters
        </h2>

        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-sm font-medium text-[#2E8B78] transition hover:opacity-80"
        >
          <RotateCcw size={15} />
          Clear
        </button>

      </div>

      {/* Employment */}

      <div className="mt-8">

        <h3 className="mb-4 font-semibold text-slate-800">
          Employment Type
        </h3>

        <div className="space-y-3">

          {jobTypes.map((type) => (

            <label
              key={type}
              className="flex cursor-pointer items-center gap-3"
            >

              <input
                type="checkbox"
                checked={employmentTypes.includes(type)}
                onChange={() => toggleEmployment(type)}
                className="h-4 w-4 accent-[#2E8B78]"
              />

              <span className="text-slate-600">
                {type}
              </span>

            </label>

          ))}

        </div>

      </div>

      {/* Salary */}

      <div className="mt-8">

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-semibold text-slate-800">
            Salary
          </h3>

          <span className="rounded-full bg-[#E8F7F3] px-3 py-1 text-sm font-semibold text-[#2E8B78]">

            ₹{salary} LPA

          </span>

        </div>

        <input
          type="range"
          min={1}
          max={50}
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full accent-[#2E8B78]"
        />

      </div>

      {/* Skills */}

      <div className="mt-8">

        <h3 className="mb-4 font-semibold text-slate-800">
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">

          {skillList.map((skill) => {

            const active = skills.includes(skill);

            return (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "border-[#2E8B78] bg-[#E8F7F3] text-[#2E8B78]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#2E8B78]"
                }`}
              >
                {skill}
              </button>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default JobFilters;