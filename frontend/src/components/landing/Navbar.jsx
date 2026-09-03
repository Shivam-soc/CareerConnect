import { Link, NavLink, useNavigate } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
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

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2E8B78] text-white">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Career
              <span className="text-[#2E8B78]">
                Connect
              </span>
            </h1>

            <p className="text-xs text-slate-500">
              Find. Apply. Grow.
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2E8B78] font-medium"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              {({ isActive }) => (
                <div className="relative group">

                  {item.name}

                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#2E8B78] ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    } transition-all`}
                  />

                </div>
              )}
            </NavLink>
          ))}

          {user && (
            <NavLink
              to={dashboardPath}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2E8B78] font-medium"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              Dashboard
            </NavLink>
          )}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {!user ? (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
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
            <>
              <span className="hidden text-sm font-medium text-slate-700 md:block">
                Hi, {user.fullName}
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;