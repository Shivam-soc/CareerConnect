import { FaDownload, FaUpload } from "react-icons/fa";
import mockUser from "../../data/mockUser";

function ResumeCard() {
  const { resume } = mockUser;

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

      {/* Resume */}

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">

        <p className="truncate text-sm font-medium text-slate-900">
          {resume.fileName}
        </p>

        <p className="mt-2 text-xs text-slate-500">
          {resume.fileSize}
        </p>

        <p className="text-xs text-slate-500">
          Updated {resume.uploadedOn}
        </p>

      </div>

      {/* ATS */}

      <div className="mt-5">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-600">
            ATS Score
          </span>

          <span className="text-sm font-semibold text-[#2E8B78]">
            {resume.atsScore}%
          </span>

        </div>

        <div className="mt-3 h-2 rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-[#2E8B78]"
            style={{
              width: `${resume.atsScore}%`,
            }}
          />

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex gap-3">

        <button
          className="
            flex-1
            rounded-xl
            border
            border-slate-200
            py-2.5
            text-sm
            font-medium
            text-slate-700
            transition
            hover:bg-slate-50
          "
        >
          <span className="flex items-center justify-center gap-2">
            <FaDownload size={13} />
            Download
          </span>
        </button>

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

    </section>
  );
}

export default ResumeCard;