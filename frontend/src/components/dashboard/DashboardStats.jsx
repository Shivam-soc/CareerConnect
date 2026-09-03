function DashboardStats({ dashboard }) {
  const stats = [
    {
      title: "Applications",
      value: dashboard?.totalApplications || 0,
      subtitle: "Total Applications",
    },
    {
      title: "Saved Jobs",
      value: dashboard?.savedJobs || 0,
      subtitle: "Jobs Saved",
    },
    {
      title: "Interviews",
      value: dashboard?.interviews || 0,
      subtitle: "Interview Scheduled",
    },
    {
      title: "Offers",
      value: dashboard?.offers || 0,
      subtitle: "Offers Received",
    },
  ];

  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            cursor-pointer
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1
            hover:border-[#2E8B78]/50
            hover:shadow-lg
            hover:shadow-[#2E8B78]/10
          "
        >
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-slate-900">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-[#2E8B78]">
            {stat.subtitle}
          </p>
        </div>
      ))}
    </section>
  );
}

export default DashboardStats;