import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2E8B78]/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/5 blur-[160px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="inline-block"
            >

              <h2 className="text-3xl font-bold tracking-tight text-white">

                Career
                <span className="text-[#2E8B78]">
                  Connect
                </span>

              </h2>

            </Link>

            <p className="mt-6 max-w-md leading-8 text-slate-400">

              Helping students and professionals discover internships,
              placements and full-time opportunities from India's leading
              startups and technology companies.

            </p>

            <div className="mt-8 flex gap-4">

              {[
                FaGithub,
                FaLinkedin,
                FaInstagram,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#2E8B78] hover:text-white"
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

          <div>

            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4">

              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Companies", "/companies"],
              ].map(([name, link]) => (

                <Link
                  key={name}
                  to={link}
                  className="block transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  {name}

                </Link>

              ))}

            </div>

          </div>

          {/* Jobs */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Jobs
            </h3>

            <div className="mt-6 space-y-4">

              {[
                ["Browse Jobs", "/jobs"],
                ["Saved Jobs", "/saved-jobs"],
                ["Applications", "/applications"],
              ].map(([name, link]) => (

                <Link
                  key={name}
                  to={link}
                  className="block transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  {name}

                </Link>

              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="mt-6 space-y-4">

              {["Privacy", "Terms", "Support"].map((item) => (

                <a
                  key={item}
                  href="#"
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >

                  {item}

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </a>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} CareerConnect.
            All rights reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;