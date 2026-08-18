import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}

      <DashboardSidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Header */}

        <DashboardHeader />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto p-8">

          <div className="mx-auto max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;