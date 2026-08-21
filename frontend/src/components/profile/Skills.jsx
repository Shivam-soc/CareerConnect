import mockUser from "../../data/mockUser";

function Skills() {
  const { skills } = mockUser;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div>

        <h2 className="text-lg font-semibold text-slate-900">
          Skills
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Technologies and tools you work with.
        </p>

      </div>

      {/* Categories */}

      <div className="mt-6 space-y-6">

        {Object.entries(skills).map(([category,items]) => (

          <div key={category}>

            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">

              {items.map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:border-[#2E8B78]
                    hover:text-[#2E8B78]
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;