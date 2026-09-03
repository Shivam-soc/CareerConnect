import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Bookmark,
  User,
  Settings,
  Building2,
  Briefcase,
  LogOut,
  Menu,
  ChevronLeft,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

function SidebarItem({ item, collapsed }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center ${
          collapsed ? "justify-center" : "gap-3"
        } rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#E8F7F3] text-[#2E8B78]"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <Icon size={20} />

      {!collapsed && <span>{item.name}</span>}
    </NavLink>
  );
}

function DashboardSidebar({ collapsed, setCollapsed }) {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const studentMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Applications",
      path: "/applications",
      icon: FileText,
    },
    {
      name: "Saved Jobs",
      path: "/saved-jobs",
      icon: Bookmark,
    },
  ];

  const recruiterMenu = [
    {
      name: "Dashboard",
      path: "/recruiter/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Companies",
      path: "/companies",
      icon: Building2,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: Briefcase,
    },
  ];

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Companies",
      path: "/companies",
      icon: Building2,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: Briefcase,
    },
  ];

  const accountMenu = [
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  const mainMenu =
    user?.role === "student"
      ? studentMenu
      : user?.role === "recruiter"
      ? recruiterMenu
      : adminMenu;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };

  return (
    <aside
      className={`fixed left-0 top-0 flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-60"
      }`}
    >
      {/* Logo */}

      <div className="flex items-center justify-between px-5 py-6">

        {!collapsed && (
          <div>
            <h1 className="text-2xl font-bold">
              Career
              <span className="text-[#2E8B78]">
                Connect
              </span>
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              {user?.role === "student"
                ? "Student Portal"
                : user?.role === "recruiter"
                ? "Recruiter Portal"
                : "Admin Portal"}
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {collapsed ? (
            <Menu size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </button>

      </div>

      {/* Main */}

      <div className="flex-1 overflow-y-auto px-3">

        {!collapsed && (
          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main
          </p>
        )}

        <div className="space-y-2">

          {mainMenu.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              collapsed={collapsed}
            />
          ))}

        </div>

        {!collapsed && (
          <p className="mb-3 mt-8 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>
        )}

        <div className="space-y-2">

          {accountMenu.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              collapsed={collapsed}
            />
          ))}

        </div>

      </div>

      {/* Logout */}

      <div className="border-t border-slate-200 p-3">

        <button
          onClick={handleLogout}
          className={`flex w-full items-center rounded-xl px-4 py-3 transition hover:bg-slate-100 ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <LogOut size={20} />

          {!collapsed && <span>Logout</span>}
        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;