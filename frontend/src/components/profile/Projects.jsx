import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function Projects() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Projects
        </h2>

        <p className="mt-1 text-slate-500">
          Academic and personal projects showcasing technical skills.
        </p>

      </div>

      <div className="space-y-6">

        {mockUser.projects.map((project) => (

          <div
            key={project.id}
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

            {/* Top */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                    <FaCode />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>

                    <span
                      className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status}
                    </span>

                  </div>

                </div>

                <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                  {project.description}
                </p>

              </div>

              {/* Buttons */}

              <div className="flex gap-3">

                <a
                  href={project.github}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    font-medium
                    hover:bg-slate-100
                  "
                >
                  <FaGithub />

                  GitHub

                </a>

                <a
                  href={project.demo}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    font-medium
                    text-white
                    hover:bg-blue-700
                  "
                >
                  <FaExternalLinkAlt />

                  Live Demo

                </a>

              </div>

            </div>

            {/* Tech Stack */}

            <div className="mt-6 flex flex-wrap gap-3">

              {project.technologies.map((tech) => (

                <span
                  key={tech}
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
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;