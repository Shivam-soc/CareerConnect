import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

const icons = {
  Languages: <FaCode />,
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Database: <FaDatabase />,
  Tools: <FaTools />,
};

function Skills() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Skills
        </h2>

        <p className="mt-1 text-slate-500">
          Technologies and tools I'm comfortable working with.
        </p>

      </div>

      <div className="space-y-8">

        {Object.entries(mockUser.skills).map(([category, skills]) => (

          <div key={category}>

            <div className="mb-4 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                {icons[category]}

              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {category}
              </h3>

            </div>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:border-blue-400
                    hover:bg-blue-50
                    hover:text-blue-700
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