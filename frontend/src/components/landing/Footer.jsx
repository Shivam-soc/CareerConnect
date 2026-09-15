import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "GitHub",
    Icon: FaGithub,
    url: "https://github.com/Shivam-soc",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/shivam-kumar-65a231345/",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/shiivam.kumarr",
  },
];

function Footer() {
  const companyLinks = [
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Companies", "/companies"],
  ];

  const jobLinks = [
    ["Browse Jobs", "/jobs"],
    ["Saved Jobs", "/saved-jobs"],
    ["Applications", "/applications"],
  ];

  const resourceLinks = [
    ["Privacy Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
    ["Support", "/contact"],
  ];

  return (
    <footer className="relative w-full min-w-0 overflow-hidden bg-slate-950 text-slate-300">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2E8B78]/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-[160px]" />
      </div>

      {/* Main footer */}
      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid min-w-0 gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="min-w-0">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Career
                <span className="text-[#2E8B78]">Connect</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400 sm:mt-6 sm:leading-7">
              Helping students and professionals discover internships,
              placements, and full-time opportunities from India's leading
              startups and technology companies.
            </p>

            {/* Social links */}
            <div className="mt-7 flex gap-3 sm:mt-8 sm:gap-4">
              {socialLinks.map(({ name, Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#2E8B78] hover:text-white sm:h-11 sm:w-11"
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {companyLinks.map(([name, link]) => (
                <Link
                  key={name}
                  to={link}
                  className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white">
              Jobs
            </h3>

            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {jobLinks.map(([name, link]) => (
                <Link
                  key={name}
                  to={link}
                  className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white">
              Resources
            </h3>

            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {resourceLinks.map(([name, link]) => (
                <Link
                  key={name}
                  to={link}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>{name}</span>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>
              © {new Date().getFullYear()} CareerConnect. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link
                to="/privacy"
                className="transition-colors hover:text-slate-300"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-slate-300"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="transition-colors hover:text-slate-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;