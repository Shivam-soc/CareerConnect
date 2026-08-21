import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardHeader from "../dashboard/DashboardHeader";

function DashboardLayout({ children }) {
  return (
    <div className="h-screen bg-[#F8FAF8]">

      <DashboardSidebar />

      <div className="ml-60 flex h-screen flex-col">

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