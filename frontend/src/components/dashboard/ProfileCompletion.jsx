import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tasks = [
  { id: 1, title: "Upload Resume", completed: true },
  { id: 2, title: "Add Skills", completed: true },
  { id: 3, title: "Complete Education", completed: false },
  { id: 4, title: "Verify Email", completed: true },
];

const completedTasks = tasks.filter((task) => task.completed).length;
const percentage = Math.round((completedTasks / tasks.length) * 100);

function ProfileCompletion() {
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWidth(percentage);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Profile Completion
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Complete your profile to improve visibility.
        </p>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">Completion</p>
            <h3 className="mt-2 text-4xl font-semibold text-slate-900">
              {percentage}%
            </h3>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#2E8B78] transition-all duration-1000 ease-out"
            style={{ width: `${currentWidth}%` }}
          />
        </div>

        {/* Checklist */}
        <div className="mt-6 space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg p-1 transition-colors hover:bg-slate-50"
            >
              <p className="text-sm text-slate-700">{task.title}</p>
              <span
                className={`text-xs font-medium ${
                  task.completed ? "text-[#2E8B78]" : "text-slate-400"
                }`}
              >
                {task.completed ? "Done" : "Pending"}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/profile"
          className="
            mt-8
            block
            rounded-lg
            border
            border-slate-300
            py-3
            text-center
            text-sm
            font-medium
            transition-all
            hover:border-[#2E8B78]
            hover:bg-slate-50
            hover:text-[#2E8B78]
            active:scale-95
          "
        >
          Complete Profile
        </Link>
      </div>
    </section>
  );
}

export default ProfileCompletion;