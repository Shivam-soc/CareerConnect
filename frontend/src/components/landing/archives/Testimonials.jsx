const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer at Google",
    package: "₹28 LPA",
    review:
      "CareerConnect helped me discover opportunities and prepare for interviews. The platform made my job search much easier.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Frontend Developer at Microsoft",
    package: "₹22 LPA",
    review:
      "The job recommendations were relevant and the application process was smooth. I highly recommend CareerConnect.",
  },
  {
    id: 3,
    name: "Ankit Singh",
    role: "SDE at Adobe",
    package: "₹24 LPA",
    review:
      "A clean interface and excellent opportunities. I received interview calls within a week.",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-slate-900">
          Success Stories
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          Hear from students who launched their careers with CareerConnect.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-slate-600 italic">
              "{item.review}"
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>

              <p className="text-slate-500">
                {item.role}
              </p>

              <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {item.package}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;