import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { useAuth } from "../../context/AuthContext";

function SocialLinks() {
  const { user } = useAuth();

  const social = user?.socialLinks || {};

  const links = [
    {
      title: "LinkedIn",
      url: social.linkedin,
      icon: <FaLinkedin size={18} className="text-[#0A66C2]" />,
    },
    {
      title: "GitHub",
      url: social.github,
      icon: <FaGithub size={18} className="text-slate-800" />,
    },
    {
      title: "Portfolio",
      url: social.portfolio,
      icon: <FaGlobe size={18} className="text-[#2E8B78]" />,
    },
    {
      title: "LeetCode",
      url: social.leetcode,
      icon: <SiLeetcode size={18} className="text-orange-500" />,
    },
    {
      title: "GeeksforGeeks",
      url: social.geeksforgeeks,
      icon: <SiGeeksforgeeks size={18} className="text-green-600" />,
    },
  ];

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

        {links.map((link) => (
          <div key={link.title}>
            {link.url ? (
              <a
                href={link.url}
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
                  {link.icon}

                  <span className="text-sm font-medium text-slate-700">
                    {link.title}
                  </span>
                </div>

                <span className="text-xs text-slate-400">
                  Visit
                </span>
              </a>
            ) : (
              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-dashed
                  border-slate-200
                  px-4
                  py-3
                  bg-slate-50
                "
              >
                <div className="flex items-center gap-3">
                  {link.icon}

                  <span className="text-sm text-slate-600">
                    {link.title}
                  </span>
                </div>

                <span className="text-xs text-slate-400">
                  Not Added
                </span>
              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  );
}

export default SocialLinks;