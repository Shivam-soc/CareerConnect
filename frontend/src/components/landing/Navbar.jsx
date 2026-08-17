import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBriefcase,
  FaBars,
  FaTimes,
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Companies", path: "/companies" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-lg">
            <FaBriefcase />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Career
              <span className="text-blue-600">
                Connect
              </span>
            </h1>
          </div>
        </NavLink>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-600"
                    : "font-medium text-gray-700 transition hover:text-blue-600"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="hidden items-center gap-5 md:flex">
          <FaSearch className="cursor-pointer text-xl text-gray-600 hover:text-blue-600" />

          <div className="relative cursor-pointer">
            <FaBell className="text-xl text-gray-600 hover:text-blue-600" />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </span>
          </div>

          <FaUserCircle className="cursor-pointer text-3xl text-gray-600 hover:text-blue-600" />

          <NavLink
            to="/login"
            className="font-medium text-blue-600"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700"
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink to="/login">Login</NavLink>

            <NavLink
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
            >
              Register
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;