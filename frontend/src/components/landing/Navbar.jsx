import { Link, NavLink } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Companies", path: "/companies" },
  { name: "Dashboard", path: "/dashboard" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="group flex items-center gap-3"
        >

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2E8B78] text-white shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">

            <BriefcaseBusiness size={22} />

          </div>

          <div>

            <h1 className="text-xl font-bold tracking-tight text-slate-900">

              Career
              <span className="text-[#2E8B78]">
                Connect
              </span>

            </h1>

            <p className="-mt-0.5 text-xs tracking-wide text-slate-500">
              Find. Apply. Grow.
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2E8B78]"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >

              {({ isActive }) => (
                <div className="group relative">

                  {item.name}

                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#2E8B78] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    } transition-all duration-300`}
                  />

                </div>
              )}

            </NavLink>

          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <Link to="/login">

            <Button
              variant="ghost"
              size="sm"
              className="hover:-translate-y-0.5"
            >
              Login
            </Button>

          </Link>

          <Link to="/register">

            <Button
              size="sm"
              className="shadow-sm hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started
            </Button>

          </Link>

        </div>

      </div>

    </header>
  );
}

export default Navbar;