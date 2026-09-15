import { useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "Companies",
      path: "/companies",
    },
  ];

  const dashboardPath =
    user?.role === "student"
      ? "/dashboard"
      : user?.role === "recruiter"
      ? "/recruiter/dashboard"
      : "/admin/dashboard";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setMobileMenuOpen(false);

    navigate("/");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* --------------------------------
            LOGO
        --------------------------------- */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2E8B78] text-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md sm:h-11 sm:w-11 sm:rounded-2xl">
            <BriefcaseBusiness
              size={20}
              strokeWidth={2.2}
              className="sm:h-[22px] sm:w-[22px]"
            />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
              Career
              <span className="text-[#2E8B78]">
                Connect
              </span>
            </h1>

            <p className="hidden text-[11px] font-medium text-slate-400 sm:block">
              Find. Apply. Grow.
            </p>
          </div>
        </Link>

        {/* --------------------------------
            DESKTOP NAVIGATION
        --------------------------------- */}

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#2E8B78]"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#2E8B78] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to={dashboardPath}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#2E8B78]"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
        </nav>

        {/* --------------------------------
            DESKTOP ACTIONS
        --------------------------------- */}

        <div className="hidden items-center gap-2.5 lg:flex">
          {!user ? (
            <>
              <Link to="/login">
                <Button
                  variant="ghost"
                  size="sm"
                >
                  <LogIn
                    size={16}
                    className="mr-1.5"
                  />
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to={dashboardPath}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#2E8B78] hover:bg-[#E8F7F3]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F7F3] text-xs font-bold text-[#2E8B78]">
                  {user.fullName?.charAt(0)?.toUpperCase() || "U"}
                </span>

                <span className="max-w-[130px] truncate">
                  {user.fullName}
                </span>

                <ChevronDown
                  size={14}
                  className="text-slate-400"
                />
              </Link>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* --------------------------------
            MOBILE MENU BUTTON
        --------------------------------- */}

        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() =>
            setMobileMenuOpen((previous) => !previous)
          }
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-[#2E8B78] hover:text-[#2E8B78] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* --------------------------------
          MOBILE MENU
      --------------------------------- */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}

            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeMobileMenu}
              className="fixed inset-0 top-[72px] -z-10 bg-slate-900/20 backdrop-blur-[2px] lg:hidden"
            />

            {/* Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="border-t border-slate-100 bg-white shadow-xl lg:hidden"
            >
              <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#E8F7F3] text-[#2E8B78]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  {user && (
                    <NavLink
                      to={dashboardPath}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-[#E8F7F3] text-[#2E8B78]"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  )}
                </nav>

                {/* Mobile Actions */}

                <div className="mt-4 border-t border-slate-100 pt-4">
                  {!user ? (
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to="/login"
                        onClick={closeMobileMenu}
                      >
                        <Button
                          variant="secondary"
                          className="w-full"
                        >
                          Login
                        </Button>
                      </Link>

                      <Link
                        to="/register"
                        onClick={closeMobileMenu}
                      >
                        <Button className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F7F3] font-bold text-[#2E8B78]">
                          {user.fullName
                            ?.charAt(0)
                            ?.toUpperCase() || "U"}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-slate-900">
                            {user.fullName}
                          </p>

                          <p className="text-xs capitalize text-slate-500">
                            {user.role}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;