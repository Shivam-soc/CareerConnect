import { useState } from "react";

function JobFilters() {
  const [salary, setSalary] = useState(15);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Filters
      </h2>

      {/* Employment Type */}

      <div className="mb-8">

        <h3 className="mb-3 font-semibold text-slate-700">
          Employment Type
        </h3>

        <div className="space-y-3">

          {[
            "Full Time",
            "Internship",
            "Part Time",
            "Remote",
          ].map((type) => (

            <label
              key={type}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
              />

              <span>{type}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Experience */}

      <div className="mb-8">

        <h3 className="mb-3 font-semibold text-slate-700">
          Experience
        </h3>

        <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-blue-500">

          <option>All</option>
          <option>Fresher</option>
          <option>1–3 Years</option>
          <option>3–5 Years</option>
          <option>5+ Years</option>

        </select>

      </div>

      {/* Salary */}

      <div className="mb-8">

        <h3 className="mb-3 font-semibold text-slate-700">
          Salary (LPA)
        </h3>

        <input
          type="range"
          min="1"
          max="50"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full accent-blue-600"
        />

        <p className="mt-2 text-sm text-slate-500">
          Up to ₹{salary} LPA
        </p>

      </div>

      {/* Skills */}

      <div>

        <h3 className="mb-3 font-semibold text-slate-700">
          Popular Skills
        </h3>

        <div className="flex flex-wrap gap-2">

          {[
            "React",
            "Node",
            "Java",
            "Python",
            "SQL",
            "AI",
          ].map((skill) => (

            <button
              key={skill}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
            >
              {skill}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default JobFilters;