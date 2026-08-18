import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function Experience() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Experience
        </h2>

        <p className="mt-1 text-slate-500">
          Internships, projects and professional experience.
        </p>

      </div>

      <div className="space-y-6">

        {mockUser.experience.map((exp, index) => (

          <div
            key={index}
            className="
              rounded-2xl
              border
              border-slate-200
              p-6
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-md
            "
          >

            <div className="flex items-start justify-between">

              {/* Left */}

              <div className="flex gap-5">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                  "
                >
                  <FaBriefcase size={22} />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {exp.role}
                  </h3>

                  <p className="mt-2 font-medium text-slate-700">
                    {exp.company}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                      <FaCalendarAlt />

                      {exp.duration}

                    </span>

                    <span className="flex items-center gap-2">

                      <FaMapMarkerAlt />

                      Remote

                    </span>

                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    Worked on designing and developing scalable web
                    applications using React, Node.js, Express and
                    MongoDB while following modern UI/UX practices and
                    clean architecture.
                  </p>

                </div>

              </div>

              {/* Badge */}

              <span
                className="
                  rounded-full
                  bg-green-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-green-700
                "
              >
                Current
              </span>

            </div>

            {/* Skills */}

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
              ].map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-slate-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

            {/* Footer */}

            <div className="mt-6 flex justify-end">

              <button
                className="
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-blue-600
                  hover:text-blue-700
                "
              >
                View Details

                <FaArrowRight className="text-sm" />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;