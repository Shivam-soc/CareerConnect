import { useState } from "react";
import {
  Bookmark,
  Share2,
  Building2,
  MapPin,
  IndianRupee,
  Briefcase,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

function ApplySection({
  job,
  onApply,
}) {
  if (!job) return null;

  const [saved, setSaved] = useState(false);

  const postedDate = new Date(job.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Job link copied!");
    } catch {
      alert("Unable to copy link.");
    }
  };

  return (
    <div className="sticky top-24 rounded-[30px] border border-slate-200 bg-white p-7 shadow-lg">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F7F3]">
          <Building2
            size={22}
            className="text-[#2E8B78]"
          />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            Quick Overview
          </h3>

          <p className="text-sm text-slate-500">
            Everything you need
          </p>
        </div>

      </div>

      {/* Information */}

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <Building2
            size={18}
            className="text-[#2E8B78]"
          />
          <span>{job.company?.name}</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin
            size={18}
            className="text-[#2E8B78]"
          />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <IndianRupee
            size={18}
            className="text-[#2E8B78]"
          />
          <span>{job.salary}</span>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase
            size={18}
            className="text-[#2E8B78]"
          />
          <span>{job.employmentType}</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3
            size={18}
            className="text-[#2E8B78]"
          />
          <span>{job.experience}</span>
        </div>

        <div className="flex items-center gap-3">
          <Users
            size={18}
            className="text-[#2E8B78]"
          />
          <span>34 Applicants</span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2
            size={18}
            className="text-[#22C55E]"
          />
          <span>Status: {job.status}</span>
        </div>

      </div>

      {/* Posted */}

      <div className="mt-8 rounded-2xl bg-[#F8FAF8] p-4">

        <p className="text-sm text-slate-500">
          Posted
        </p>

        <p className="mt-1 font-semibold text-slate-900">
          {postedDate}
        </p>

      </div>

      {/* Apply */}

      <button
        onClick={onApply}
        className="mt-8 w-full rounded-2xl bg-[#2E8B78] py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#236D5E] hover:shadow-xl"
      >
        Apply Now
      </button>

      {/* Save & Share */}

      <div className="mt-4 grid grid-cols-2 gap-3">

        <button
          onClick={() => setSaved(!saved)}
          className={`flex items-center justify-center gap-2 rounded-2xl border py-3 font-medium transition-all duration-300 ${
            saved
              ? "border-[#2E8B78] bg-[#E8F7F3] text-[#2E8B78]"
              : "border-slate-200 hover:border-[#2E8B78]"
          }`}
        >
          <Bookmark size={18} />
          {saved ? "Saved" : "Save"}
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 font-medium transition-all duration-300 hover:border-[#2E8B78] hover:text-[#2E8B78]"
        >
          <Share2 size={18} />
          Share
        </button>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-[#2E8B78]/20 bg-[#E8F7F3] p-4">

        <p className="text-sm font-semibold text-[#2E8B78]">
          ✓ Verified Opportunity
        </p>

        <p className="mt-1 text-sm text-slate-600">
          Apply early to increase your chances of getting shortlisted.
        </p>

      </div>

    </div>
  );
}

export default ApplySection;