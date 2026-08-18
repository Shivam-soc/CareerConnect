import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import mockUser from "../../data/mockUser";

const links = [
  {
    title: "GitHub",
    icon: <FaGithub />,
    value: mockUser.social.github,
    color: "bg-slate-900 text-white",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    value: mockUser.social.linkedin,
    color: "bg-blue-600 text-white",
  },
  {
    title: "Portfolio",
    icon: <FaGlobe />,
    value: mockUser.social.portfolio,
    color: "bg-violet-600 text-white",
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode />,
    value: mockUser.social.leetcode,
    color: "bg-orange-500 text-white",
  },
  {
    title: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    value: mockUser.social.geeksforgeeks,
    color: "bg-green-600 text-white",
  },
];

function SocialLinks() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Social Links
        </h2>

        <p className="mt-1 text-slate-500">
          Connect with me through my professional profiles.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {links.map((item) => (

          <a
            key={item.title}
            href={item.value}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-md
            "
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg ${item.color}`}
              >
                {item.icon}
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 truncate text-sm text-slate-500">
                  {item.value}
                </p>

              </div>

            </div>

            <FaExternalLinkAlt className="text-slate-400" />

          </a>

        ))}

      </div>

    </section>
  );
}

export default SocialLinks;