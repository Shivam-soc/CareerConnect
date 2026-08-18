import {
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaClipboardList,
  FaBookmark,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Jobs", icon: <FaBriefcase />, path: "/jobs" },
  { name: "Companies", icon: <FaBuilding />, path: "/companies" },
  { name: "Applications", icon: <FaClipboardList />, path: "/applications" },
  { name: "Saved Jobs", icon: <FaBookmark />, path: "/saved-jobs" },
  { name: "Profile", icon: <FaUser />, path: "/profile" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

function DashboardSidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="px-8 py-8 border-b border-slate-800">

          <h1 className="text-3xl font-bold">
            Career<span className="text-blue-400">Connect</span>
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Student Dashboard
          </p>

        </div>

        {/* Profile */}

        <div className="px-8 py-8">

          <div className="flex items-center gap-4">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="h-14 w-14 rounded-full border-2 border-blue-500"
            />

            <div>

              <h2 className="font-semibold">
                Shivam Kumar
              </h2>

              <p className="text-sm text-slate-400">
                Electronics Student
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="px-4">

          {menuItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-4 rounded-xl px-5 py-3 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              {item.name}

            </NavLink>

          ))}

        </nav>

      </div>

      {/* Logout */}

      <div className="p-5 border-t border-slate-800">

        <button
          className="
            flex
            w-full
            items-center
            gap-4
            rounded-xl
            px-5
            py-3
            text-slate-300
            transition
            hover:bg-red-500
            hover:text-white
          "
        >
          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;