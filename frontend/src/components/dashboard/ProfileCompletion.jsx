import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function ProfileCompletion() {
  const { user } = useAuth();

  const tasks = useMemo(
    () => [
      {
        title: "Profile Photo",
        completed: !!user?.profilePicture,
      },
      {
        title: "Resume Uploaded",
        completed: !!user?.resume,
      },
      {
        title: "Phone Number",
        completed: !!user?.phone,
      },
      {
        title: "Skills Added",
        completed:
          Array.isArray(user?.skills) &&
          user.skills.length > 0,
      },
      {
        title: "Education Added",
        completed:
          Array.isArray(user?.education) &&
          user.education.length > 0,
      },
      {
        title: "Email Verified",
        completed: !!user?.email,
      },
    ],
    [user]
  );

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const percentage = Math.round(
    (completed / tasks.length) * 100
  );

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 200);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">

      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-lg font-semibold text-slate-900">
          Profile Completion
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete your profile to improve visibility to recruiters.
        </p>

      </div>

      {/* Body */}

      <div className="p-6">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Completion
            </p>

            <h3 className="mt-2 text-4xl font-bold text-slate-900">
              {percentage}%
            </h3>
          </div>

        </div>

        {/* Progress */}

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">

          <div
            className="h-full rounded-full bg-[#2E8B78] transition-all duration-700"
            style={{ width: `${width}%` }}
          />

        </div>

        {/* Checklist */}

        <div className="mt-6 space-y-3">

          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex items-center justify-between rounded-lg p-1 hover:bg-slate-50"
            >
              <p className="text-sm text-slate-700">
                {task.title}
              </p>

              <span
                className={`text-xs font-semibold ${
                  task.completed
                    ? "text-green-600"
                    : "text-slate-400"
                }`}
              >
                {task.completed
                  ? "Completed"
                  : "Pending"}
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
            font-semibold
            transition
            hover:border-[#2E8B78]
            hover:text-[#2E8B78]
          "
        >
          Edit Profile
        </Link>

      </div>

    </section>
  );
}

export default ProfileCompletion;