import {
  ArrowRight,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

import HeroJobCard from "./HeroJobCard";

function Hero({
  search = "",
  setSearch,
  featuredJob = null,
  loading = false,
}) {
  const handleSearch = (event) => {
    event.preventDefault();

    const value = event.target.search?.value?.trim() || "";

    setSearch?.(value);
  };

  const popularSearches = [
    "Software Engineer",
    "Frontend Developer",
    "Data Analyst",
    "Internship",
  ];

  return (
    <section className="relative w-full min-w-0 overflow-hidden bg-[#F8FAF8]">
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-emerald-50/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left */}

          <div className="min-w-0">
            {/* Badge */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />

              <span>Smart Career Opportunities</span>
            </div>

            {/* Heading */}

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find the right job.
              <span className="block text-emerald-600">
                Build your future.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover internships, placements, and full-time opportunities
              from companies looking for your skills.
            </p>

            {/* Search */}

            <form
              onSubmit={handleSearch}
              className="mt-8 w-full max-w-2xl"
            >
              <div className="flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow duration-300 focus-within:shadow-md sm:flex-row">
                <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                  <Search className="h-5 w-5 shrink-0 text-slate-400" />

                  <input
                    name="search"
                    defaultValue={search}
                    placeholder="Search jobs, skills, or companies..."
                    className="min-w-0 w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                >
                  Search Jobs
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Popular searches */}

            <div className="mt-5 flex min-w-0 flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium text-slate-500">
                Popular:
              </span>

              {popularSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearch?.(item)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Quick stats */}

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <p className="text-xl font-bold text-slate-900">
                  22+
                </p>
                <p className="text-xs text-slate-500">
                  Live Jobs
                </p>
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  15+
                </p>
                <p className="text-xs text-slate-500">
                  Companies
                </p>
              </div>

              <div>
                <p className="flex items-center gap-1.5 text-xl font-bold text-slate-900">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  24/7
                </p>
                <p className="text-xs text-slate-500">
                  Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right — Featured Job */}

          <div className="flex min-w-0 w-full justify-center lg:justify-end">
            <div className="w-full min-w-0 max-w-xl">
              <HeroJobCard
                job={featuredJob}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;