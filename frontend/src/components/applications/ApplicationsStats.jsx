function ApplicationsStats({ applications = [] }) {
  const stats = [
    {
      title: "Applications",
      value: applications.length,
    },
    {
      title: "Under Review",
      value: applications.filter(
        (app) => app.status === "Under Review"
      ).length,
    },
    {
      title: "Interview",
      value: applications.filter(
        (app) => app.status === "Interview"
      ).length,
    },
    {
      title: "Selected",
      value: applications.filter(
        (app) => app.status === "Selected"
      ).length,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            transition
            hover:shadow-md
            hover:border-[#2E8B78]
          "
        >
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}

export default ApplicationsStats;