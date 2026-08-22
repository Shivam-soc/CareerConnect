import mockApplications from "../../data/mockApplications";

function ApplicationsStats() {
  const total = mockApplications.length;

  const interview = mockApplications.filter(
    (job) => job.status === "Interview"
  ).length;

  const offer = mockApplications.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = mockApplications.filter(
    (job) => job.status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Applications",
      value: total,
    },
    {
      title: "Interviews",
      value: interview,
    },
    {
      title: "Offers",
      value: offer,
    },
    {
      title: "Rejected",
      value: rejected,
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