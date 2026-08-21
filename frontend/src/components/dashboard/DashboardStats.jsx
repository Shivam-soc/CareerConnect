const stats = [
  {
    title: "Applications",
    value: "18",
    subtitle: "+4 this week",
  },
  {
    title: "Saved Jobs",
    value: "12",
    subtitle: "+2 this week",
  },
  {
    title: "Interviews",
    value: "3",
    subtitle: "Tomorrow",
  },
  {
    title: "Offers",
    value: "1",
    subtitle: "Congratulations",
  },
];

function DashboardStats() {
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
          <p className="text-sm text-slate-500">{stat.title}</p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-900">
            {stat.value}
          </h2>
          <p className="mt-2 text-sm text-[#2E8B78]">{stat.subtitle}</p>
        </div>
      ))}
    </section>
  );
}

export default DashboardStats;