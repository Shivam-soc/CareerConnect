import { useState, useEffect } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sidebarCollapsed") === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed);
  }, [collapsed]);

  return (
    <div className="h-screen bg-[#F8FAF8]">

      <DashboardSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`flex h-screen flex-col transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-60"
        }`}
      >
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-screen-2xl px-6 py-6">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}

export default DashboardLayout;