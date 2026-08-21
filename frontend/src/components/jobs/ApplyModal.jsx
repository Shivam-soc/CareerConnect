import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Upload,
  CheckCircle2,
  FileText,
} from "lucide-react";

function ApplyModal({
  open,
  onClose,
  job,
}) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  if (!job) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResume = (e) => {
    setForm((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative w-full max-w-xl rounded-[32px] bg-white p-8 shadow-2xl"
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-xl p-2 transition hover:bg-slate-100"
            >
              <X size={20} />
            </button>

            {submitted ? (

              <div className="py-10 text-center">

                <CheckCircle2
                  size={70}
                  className="mx-auto text-green-500"
                />

                <h2 className="mt-6 text-3xl font-bold">

                  Application Submitted

                </h2>

                <p className="mt-3 text-slate-500">

                  Your application has been sent successfully.

                </p>

              </div>

            ) : (

              <>
                {/* Header */}

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-slate-50">

                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-10 w-10 object-contain"
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">

                      Apply for {job.title}

                    </h2>

                    <p className="text-slate-500">

                      {job.company}

                    </p>

                  </div>

                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <input
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-[#2E8B78]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-[#2E8B78]"
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-[#2E8B78]"
                  />

                  {/* Resume */}

                  <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 p-6 transition hover:border-[#2E8B78]">

                    <Upload size={20} />

                    <span>

                      {form.resume
                        ? form.resume.name
                        : "Upload Resume (PDF)"}

                    </span>

                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResume}
                      hidden
                    />

                  </label>

                  <textarea
                    rows={5}
                    name="coverLetter"
                    placeholder="Cover Letter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-[#2E8B78]"
                  />

                  <div className="flex gap-4">

                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 rounded-2xl border border-slate-300 py-4 font-semibold transition hover:bg-slate-100"
                    >

                      Cancel

                    </button>

                    <button
                      type="submit"
                      className="flex-1 rounded-2xl bg-[#2E8B78] py-4 font-semibold text-white transition hover:bg-[#236D5E]"
                    >

                      Submit Application

                    </button>

                  </div>

                </form>
              </>

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default ApplyModal;