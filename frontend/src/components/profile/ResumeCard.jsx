import {
  FaFilePdf,
  FaDownload,
  FaUpload,
  FaCheckCircle,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function ResumeCard() {
  const { resume } = mockUser;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Resume
        </h2>

        <p className="mt-1 text-slate-500">
          Keep your resume updated to improve your chances of getting shortlisted.
        </p>

      </div>

      {/* Resume Card */}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">

              <FaFilePdf size={28} />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-slate-900">
                {resume.fileName}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Uploaded on {resume.uploadedOn}
              </p>

              <p className="text-sm text-slate-500">
                File Size • {resume.fileSize}
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-3">

            <button
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                font-medium
                hover:bg-slate-100
              "
            >
              <FaDownload />

              Download

            </button>

            <button
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
              <FaUpload />

              Replace Resume

            </button>

          </div>

        </div>

      </div>

      {/* ATS Score */}

      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="flex items-center gap-2 text-lg font-semibold text-green-700">

              <FaCheckCircle />

              ATS Resume Score

            </h3>

            <p className="mt-2 text-sm text-green-600">
              Your resume is optimized for applicant tracking systems.
            </p>

          </div>

          <div className="text-right">

            <h2 className="text-4xl font-bold text-green-700">
              {resume.atsScore}%
            </h2>

          </div>

        </div>

        <div className="mt-5 h-3 rounded-full bg-green-200">

          <div
            className="h-3 rounded-full bg-green-600"
            style={{
              width: `${resume.atsScore}%`,
            }}
          ></div>

        </div>

      </div>

    </section>
  );
}

export default ResumeCard;