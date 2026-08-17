import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              Career<span className="text-blue-500">Connect</span>
            </h2>

            <p className="mt-5 max-w-md leading-7">
              CareerConnect helps students discover jobs, internships,
              and career opportunities from the world's leading companies.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#" className="hover:text-blue-400">Home</a></li>

              <li><a href="#" className="hover:text-blue-400">Jobs</a></li>

              <li><a href="#" className="hover:text-blue-400">Companies</a></li>

              <li><a href="#" className="hover:text-blue-400">Dashboard</a></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">

              <li><a href="#" className="hover:text-blue-400">About</a></li>

              <li><a href="#" className="hover:text-blue-400">Contact</a></li>

              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>

              <li><a href="#" className="hover:text-blue-400">Terms</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <p>Pune, Maharashtra</p>

            <p className="mt-3">
              support@careerconnect.com
            </p>

            <p className="mt-3">
              +91 98765 43210
            </p>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm">

          © 2026 CareerConnect. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;