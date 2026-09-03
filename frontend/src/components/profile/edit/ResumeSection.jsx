import { useRef } from "react";
import { FileText, Upload, Download, Trash2 } from "lucide-react";

function ResumeSection({ formData, setFormData }) {
  const fileInputRef = useRef(null);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">

      <div>

        <h2 className="text-xl font-semibold text-slate-900">
          Resume
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Upload your latest resume in PDF format.
        </p>

      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-6">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-[#E8F7F3] p-4">
            <FileText
              className="text-[#2E8B78]"
              size={28}
            />
          </div>

          <div className="flex-1">

            <h3 className="font-semibold text-slate-900">

              {formData.resume
                ? formData.resume.name || "Resume Uploaded"
                : "No Resume Uploaded"}

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              {formData.resume
                ? "Ready to upload"
                : "PDF, DOC or DOCX (Max 5 MB)"}

            </p>

          </div>

        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          hidden
          onChange={handleResumeChange}
        />

        <div className="mt-6 flex flex-wrap gap-3">

          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-5 py-3 text-white hover:bg-[#256f61]"
          >
            <Upload size={18} />
            Upload Resume
          </button>

          {formData.resume && (

            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  resume: "",
                }))
              }
              className="flex items-center gap-2 rounded-xl border border-red-300 px-5 py-3 text-red-600 hover:bg-red-50"
            >
              <Trash2 size={18} />
              Remove
            </button>

          )}

          {typeof formData.resume === "string" &&
            formData.resume && (

              <a
                href={formData.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-50"
              >
                <Download size={18} />
                View Resume
              </a>

          )}

        </div>

      </div>

    </section>
  );
}

export default ResumeSection;