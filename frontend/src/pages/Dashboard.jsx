import {
  FaBriefcase,
  FaBookmark,
  FaUserGraduate,
  FaClipboardCheck,
} from "react-icons/fa";

import DashboardCard from "../components/dashboard/DashboardCard";


function Dashboard() {

  const stats = [
    {
      title: "Applications",
      value: 12,
      icon: <FaBriefcase />,
      color: "#2563eb",
    },
    {
      title: "Saved Jobs",
      value: 18,
      icon: <FaBookmark />,
      color: "#7c3aed",
    },
    {
      title: "Interviews",
      value: 2,
      icon: <FaUserGraduate />,
      color: "#10b981",
    },
    {
      title: "Resume Score",
      value: "88%",
      icon: <FaClipboardCheck />,
      color: "#f59e0b",
    },
  ];

  return (
    <section className="dashboard">

      <h1>
        Welcome Back 👋
      </h1>

      <p>
        Ready to land your next opportunity?
      </p>

      <div className="dashboard-grid">

        {stats.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}

      </div>

      <div className="dashboard-section">

        <h2>Recent Applications</h2>

        <div className="application-card">

          <h3>Frontend Developer</h3>

          <p>Google</p>

          <span className="status">
            Under Review
          </span>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;