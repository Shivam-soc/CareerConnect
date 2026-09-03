import { FolderGit2, Plus, Trash2, X } from "lucide-react";

function ProjectsSection({ formData, setFormData }) {
  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          description: "",
          technologies: [],
          github: "",
          demo: "",
          status: "Completed",
        },
      ],
    }));
  };

  const removeProject = (index) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (index, field, value) => {
    const updated = [...formData.projects];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      projects: updated,
    }));
  };

  const addTechnology = (projectIndex, tech) => {
    if (!tech.trim()) return;

    const updated = [...formData.projects];

    if (
      updated[projectIndex].technologies.includes(
        tech.trim()
      )
    )
      return;

    updated[projectIndex].technologies.push(tech.trim());

    setFormData((prev) => ({
      ...prev,
      projects: updated,
    }));
  };

  const removeTechnology = (
    projectIndex,
    techIndex
  ) => {
    const updated = [...formData.projects];

    updated[projectIndex].technologies.splice(
      techIndex,
      1
    );

    setFormData((prev) => ({
      ...prev,
      projects: updated,
    }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showcase your best projects.
          </p>

        </div>

        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-4 py-2 text-white hover:bg-[#256f61]"
        >
          <Plus size={18} />
          Add Project
        </button>

      </div>

      {formData.projects.length === 0 && (

        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">

          <FolderGit2
            size={40}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 text-slate-500">
            No projects added yet.
          </p>

        </div>

      )}

      <div className="mt-6 space-y-6">

        {formData.projects.map((project, index) => (

          <ProjectCard
            key={index}
            project={project}
            index={index}
            handleChange={handleChange}
            removeProject={removeProject}
            addTechnology={addTechnology}
            removeTechnology={removeTechnology}
          />

        ))}

      </div>

    </section>
  );
}

function ProjectCard({
  project,
  index,
  handleChange,
  removeProject,
  addTechnology,
  removeTechnology,
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-6">

      <div className="mb-5 flex items-center justify-between">

        <h3 className="font-semibold">
          Project #{index + 1}
        </h3>

        <button
          type="button"
          onClick={() => removeProject(index)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Project Title
          </label>

          <input
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <select
            value={project.status}
            onChange={(e) =>
              handleChange(index, "status", e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option>Completed</option>
            <option>In Progress</option>
          </select>

        </div>

      </div>

      <div className="mt-5">

        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          value={project.description}
          onChange={(e) =>
            handleChange(
              index,
              "description",
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />

      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">

        <input
          placeholder="GitHub URL"
          value={project.github}
          onChange={(e) =>
            handleChange(index, "github", e.target.value)
          }
          className="rounded-xl border border-slate-300 px-4 py-3"
        />

        <input
          placeholder="Live Demo URL"
          value={project.demo}
          onChange={(e) =>
            handleChange(index, "demo", e.target.value)
          }
          className="rounded-xl border border-slate-300 px-4 py-3"
        />

      </div>

      <div className="mt-6">

        <label className="mb-3 block text-sm font-medium">
          Technologies
        </label>

        <div className="mb-4 flex flex-wrap gap-2">

          {project.technologies.map((tech, i) => (

            <span
              key={i}
              className="flex items-center gap-2 rounded-full bg-[#E8F7F3] px-3 py-1 text-sm text-[#2E8B78]"
            >
              {tech}

              <button
                type="button"
                onClick={() =>
                  removeTechnology(index, i)
                }
              >
                <X size={14} />
              </button>

            </span>

          ))}

        </div>

        <input
          placeholder="Press Enter to add technology"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTechnology(index, e.target.value);
              e.target.value = "";
            }
          }}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />

      </div>

    </div>
  );
}

export default ProjectsSection;