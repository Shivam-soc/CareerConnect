import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Projects() {
  const { user } = useAuth();

  const projects = user?.projects || [];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your best work and technical skills.
          </p>
        </div>

        <div className="rounded-xl bg-[#E8F7F3] p-3">
          <FolderGit2
            size={20}
            className="text-[#2E8B78]"
          />
        </div>

      </div>

      {/* Projects */}

      <div className="mt-6 space-y-5">

        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
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

              </div>

              {/* Technologies */}

              {project.technologies?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              )}

              {/* Links */}

              {(project.github || project.demo) && (
                <div className="mt-5 flex gap-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-[#2E8B78] hover:text-[#2E8B78]"
                    >
                      GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#2E8B78] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#236D5E]"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                </div>
              )}

            </div>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

            <p className="font-medium text-slate-700">
              No projects added yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add your academic, personal, or professional projects to showcase your skills.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Projects;