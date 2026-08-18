import {
  FaCheckCircle,
  FaCircle,
  FaArrowRight,
} from "react-icons/fa";

const tasks = [
  {
    title: "Upload Resume",
    completed: true,
  },
  {
    title: "Add Skills",
    completed: true,
  },
  {
    title: "Complete Education",
    completed: true,
  },
  {
    title: "Upload Profile Photo",
    completed: false,
  },
  {
    title: "Verify Email",
    completed: false,
  },
];

function ProfileCompletion() {
  const completed = tasks.filter(task => task.completed).length;
  const percentage = Math.round((completed / tasks.length) * 100);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Profile Completion
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Complete your profile to get better job recommendations.
        </p>

      </div>

      {/* Progress */}

      <div className="mb-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium text-slate-700">
            Progress
          </span>

          <span className="font-bold text-blue-600">
            {percentage}%
          </span>

        </div>

        <div className="h-3 w-full rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>

        </div>

      </div>

      {/* Checklist */}

      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task.title}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
          >

            <div className="flex items-center gap-3">

              {task.completed ? (

                <FaCheckCircle className="text-green-500" />

              ) : (

                <FaCircle className="text-slate-300" />

              )}

              <span
                className={
                  task.completed
                    ? "text-slate-700"
                    : "text-slate-500"
                }
              >
                {task.title}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Button */}

      <button
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
        "
      >
        Complete Profile

        <FaArrowRight />

      </button>

    </section>
  );
}

export default ProfileCompletion;