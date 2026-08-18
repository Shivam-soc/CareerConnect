function CompanyInfo() {
  return (
    <div className="space-y-8">

      {/* About Job */}
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          About this Job
        </h2>

        <p className="leading-8 text-slate-600">
          Google is looking for a passionate Frontend Developer to build
          modern, scalable, and high-performance web applications.
          You will work with designers, backend engineers, and product teams
          to deliver world-class user experiences using modern technologies
          like React, TypeScript, and Tailwind CSS.
        </p>
      </section>

      {/* Responsibilities */}
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          Responsibilities
        </h2>

        <ul className="space-y-3 list-disc pl-6 text-slate-600">
          <li>Develop responsive React applications.</li>
          <li>Build reusable UI components.</li>
          <li>Integrate REST APIs.</li>
          <li>Optimize website performance.</li>
          <li>Collaborate with cross-functional teams.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          Requirements
        </h2>

        <ul className="space-y-3 list-disc pl-6 text-slate-600">
          <li>Strong knowledge of React.js.</li>
          <li>JavaScript ES6+.</li>
          <li>Tailwind CSS.</li>
          <li>Git & GitHub.</li>
          <li>REST APIs.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          Benefits
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-xl bg-slate-50 p-4">
            🏥 Health Insurance
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            🏠 Hybrid Work
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            📚 Learning Budget
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            💰 Performance Bonus
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "TypeScript",
            "Tailwind",
            "Redux",
            "Git",
            "REST API",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}

        </div>
      </section>

    </div>
  );
}

export default CompanyInfo;