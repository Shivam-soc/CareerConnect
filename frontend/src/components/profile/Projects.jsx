import { ArrowUpRight } from "lucide-react";
import mockUser from "../../data/mockUser";

function Projects() {
  const { projects } = mockUser;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Projects
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Showcase your best work and technical skills.
        </p>
      </div>

      {/* Projects */}
      <div className="mt-6 space-y-5">

        {projects.map((project) => (

          <div
            key={project.id}
            className="rounded-xl border border-slate-200 p-5 transition hover:border-[#2E8B78]"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="flex-1">

                <h3 className="text-base font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>

              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-[#2E8B78]"
                >
                  <ArrowUpRight size={18} />
                </a>
              )}

            </div>

            {/* Status */}

            <div className="mt-4">

              <span className="rounded-full bg-[#E8F7F3] px-3 py-1 text-xs font-medium text-[#2E8B78]">
                {project.status}
              </span>

            </div>

            {/* Technologies */}

            {project.technologies?.length > 0 && (

              <div className="mt-5 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;