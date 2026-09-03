import { useAuth } from "../../context/AuthContext";
import { FaDownload, FaUpload } from "react-icons/fa";

function ResumeCard() {
  const { user } = useAuth();

  const resume = user?.resume;

  const fileName = resume
    ? resume.split("/").pop()
    : "";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Resume
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your latest uploaded resume.
        </p>
      </div>

      {resume ? (
        <>
          {/* Resume Info */}

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">

            <p className="truncate text-sm font-medium text-slate-900">
              {fileName}
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Resume uploaded successfully
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-6 flex gap-3">

            <a
              href={`http://localhost:5000/${resume}`}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                rounded-xl
                border
                border-slate-200
                py-2.5
                text-center
                text-sm
                font-medium
                text-slate-700
                transition
                hover:bg-slate-50
              "
            >
              <span className="flex items-center justify-center gap-2">
                <FaDownload size={13} />
                View Resume
              </span>
            </a>

            <button
              className="
                flex-1
                rounded-xl
                bg-[#2E8B78]
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:opacity-90
              "
            >
              <span className="flex items-center justify-center gap-2">
                <FaUpload size={13} />
                Replace
              </span>
            </button>

          </div>
        </>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

          <p className="font-medium text-slate-700">
            No resume uploaded
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Upload your resume to apply for jobs faster.
          </p>

          <button
            className="
              mt-5
              rounded-xl
              bg-[#2E8B78]
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            <span className="flex items-center gap-2">
              <FaUpload size={13} />
              Upload Resume
            </span>
          </button>

        </div>
      )}

    </section>
  );
}

export default ResumeCard;