import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function SocialLinksSection({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2E8B78] focus:ring-2 focus:ring-[#2E8B78]/10";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Social Links
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Add your professional profiles.
        </p>
      </div>

      <div className="mt-8 grid gap-6">

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <FaGithub />
            GitHub
          </label>

          <input
            type="url"
            name="github"
            placeholder="https://github.com/username"
            value={formData.socialLinks.github}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <FaLinkedin className="text-[#0A66C2]" />
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={formData.socialLinks.linkedin}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <FaGlobe className="text-[#2E8B78]" />
            Portfolio
          </label>

          <input
            type="url"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={formData.socialLinks.portfolio}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <SiLeetcode />
            LeetCode
          </label>

          <input
            type="url"
            name="leetcode"
            placeholder="https://leetcode.com/username"
            value={formData.socialLinks.leetcode}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium">
            <SiGeeksforgeeks className="text-green-600" />
            GeeksforGeeks
          </label>

          <input
            type="url"
            name="geeksforgeeks"
            placeholder="https://geeksforgeeks.org/user/username"
            value={formData.socialLinks.geeksforgeeks}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

      </div>
    </section>
  );
}

export default SocialLinksSection;