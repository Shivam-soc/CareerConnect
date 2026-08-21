import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function SocialLinks() {
  const { social } = mockUser;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Header */}

      <div>

        <h2 className="text-lg font-semibold text-slate-900">
          Social Links
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Your professional profiles.
        </p>

      </div>

      {/* Links */}

      <div className="mt-5 space-y-3">

        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            transition
            hover:bg-slate-50
          "
        >
          <div className="flex items-center gap-3">

            <FaLinkedin
              size={18}
              className="text-[#0A66C2]"
            />

            <span className="text-sm font-medium text-slate-700">
              LinkedIn
            </span>

          </div>

          <span className="text-xs text-slate-400">
            Visit
          </span>

        </a>

        <a
          href={social.github}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            transition
            hover:bg-slate-50
          "
        >
          <div className="flex items-center gap-3">

            <FaGithub
              size={18}
              className="text-slate-800"
            />

            <span className="text-sm font-medium text-slate-700">
              GitHub
            </span>

          </div>

          <span className="text-xs text-slate-400">
            Visit
          </span>

        </a>

        <a
          href={social.portfolio}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            transition
            hover:bg-slate-50
          "
        >
          <div className="flex items-center gap-3">

            <FaGlobe
              size={18}
              className="text-[#2E8B78]"
            />

            <span className="text-sm font-medium text-slate-700">
              Portfolio
            </span>

          </div>

          <span className="text-xs text-slate-400">
            Visit
          </span>

        </a>

      </div>

    </section>
  );
}

export default SocialLinks;