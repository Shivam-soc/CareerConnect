import { Code2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Skills() {
  const { user } = useAuth();

  const skills = user?.skills || [];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-900">
            Skills
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Technologies and tools you work with.
          </p>

        </div>

        <div className="rounded-xl bg-[#E8F7F3] p-3">
          <Code2
            size={20}
            className="text-[#2E8B78]"
          />
        </div>

      </div>

      {/* Skills */}

      <div className="mt-6">

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-3">

            {skills.map((skill, index) => (
              <span
                key={index}
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
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

            <p className="font-medium text-slate-700">
              No skills added yet.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add your technical and professional skills to improve your profile.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Skills;