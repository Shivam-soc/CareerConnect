function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-white shadow-xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            🚀 Career Updates
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Stay Ahead in Your Career
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Get the latest jobs, internships, hiring drives and placement
            updates delivered directly to your inbox.
          </p>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border border-white/20 px-6 py-4 text-slate-900 outline-none"
            />

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105 hover:bg-slate-100">
              Subscribe
            </button>

          </div>

          <p className="mt-5 text-sm text-blue-200">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;