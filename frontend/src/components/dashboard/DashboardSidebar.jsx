import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Bookmark,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const mainMenu = [
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

function SidebarItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#E8F7F3] text-[#2E8B78]"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <Icon size={18} />
      {item.name}
    </NavLink>
  );
}

function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-60 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="px-6 py-7">

        <h1 className="text-2xl font-bold text-slate-900">
          Career
          <span className="text-[#2E8B78]">
            Connect
          </span>
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Student Portal
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4">

        {/* Main */}

        <div className="mb-8">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main
          </p>

          <div className="space-y-1">
            {mainMenu.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
              />
            ))}
          </div>

        </div>

        {/* Account */}

        <div>

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Account
          </p>

          <div className="space-y-1">
            {accountMenu.map((item) => (
              <SidebarItem
                key={item.path}
                item={item}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Logout */}

      <div className="border-t border-slate-200 p-4">

        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-slate-600
            transition-all
            duration-200
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}

export default DashboardSidebar;