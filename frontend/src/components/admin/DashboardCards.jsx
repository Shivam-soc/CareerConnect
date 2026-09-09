import { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  Building2,
  Briefcase,
  FileText,
} from "lucide-react";

import { getAdminDashboard } from "../../api/adminApi";

function DashboardCards() {
  const [dashboard, setDashboard] = useState({
    totalStudents: 0,
    totalRecruiters: 0,
    totalCompanies: 0,
    totalJobs: 0,
    totalApplications: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getAdminDashboard();

      setDashboard(response.data.dashboard);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Students",
      value: dashboard.totalStudents,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Recruiters",
      value: dashboard.totalRecruiters,
      icon: UserCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Companies",
      value: dashboard.totalCompanies,
      icon: Building2,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Jobs",
      value: dashboard.totalJobs,
      icon: Briefcase,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Applications",
      value: dashboard.totalApplications,
      icon: FileText,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default DashboardCards;