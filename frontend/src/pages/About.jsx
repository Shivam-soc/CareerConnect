import {
  Briefcase,
  Users,
  Target,
  ShieldCheck,
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

function About() {
  const features = [
    {
      icon: Briefcase,
      title: "Job Discovery",
      description:
        "Explore internships and full-time opportunities from leading companies.",
    },
    {
      icon: Users,
      title: "Recruiter Connect",
      description:
        "Bridge the gap between talented students and trusted recruiters.",
    },
    {
      icon: GraduationCap,
      title: "Student Focused",
      description:
        "Track applications, build your profile and prepare for your dream career.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Your profile and applications are protected with secure authentication.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Companies",
    },
    {
      value: "10K+",
      label: "Students",
    },
    {
      value: "25K+",
      label: "Applications",
    },
    {
      value: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        {/* Hero */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

            <span className="rounded-full bg-[#E8F7F3] px-4 py-2 text-sm font-medium text-[#2E8B78]">
              About CareerConnect
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-slate-900">
              Connecting Students with Their Dream Careers
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              CareerConnect is a modern placement and recruitment platform
              designed to simplify the hiring journey for students,
              recruiters, and universities through one intelligent ecosystem.
            </p>

            <button className="mt-10 flex items-center gap-2 rounded-xl bg-[#2E8B78] px-6 py-3 font-medium text-white transition hover:opacity-90">
              Explore Jobs
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

        {/* Mission */}

        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <h2 className="text-3xl font-bold text-slate-900">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We aim to make campus recruitment simple, transparent and
                accessible for every student. Whether you're looking for
                internships or full-time opportunities, CareerConnect helps
                you discover, apply and manage your entire placement journey
                from one place.
              </p>

              <p className="mt-6 leading-8 text-slate-600">
                Our goal is to empower students with the right opportunities
                while helping recruiters find the best talent efficiently.
              </p>

            </div>

            <div className="rounded-3xl bg-[#2E8B78] p-10 text-white">

              <Target size={42} />

              <h3 className="mt-6 text-2xl font-semibold">
                Vision
              </h3>

              <p className="mt-5 leading-8 text-green-50">
                To become the most trusted career platform that connects
                education with employment by creating meaningful opportunities
                for students and recruiters worldwide.
              </p>

            </div>

          </div>

        </section>

        {/* Stats */}

        <section className="mx-auto max-w-7xl px-6 pb-20">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
              >

                <h2 className="text-4xl font-bold text-[#2E8B78]">
                  {item.value}
                </h2>

                <p className="mt-3 text-slate-500">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Features */}

        <section className="border-y border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-20">

            <div className="text-center">

              <h2 className="text-3xl font-bold text-slate-900">
                Why Choose CareerConnect?
              </h2>

              <p className="mt-4 text-slate-500">
                Everything you need to manage your career journey.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 p-8 transition hover:border-[#2E8B78]"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F7F3]">

                      <Icon
                        size={26}
                        className="text-[#2E8B78]"
                      />

                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-500">
                      {feature.description}
                    </p>

                  </div>

                );
              })}

            </div>

          </div>

        </section>

        {/* Team */}

        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <Building2
              size={42}
              className="mx-auto text-[#2E8B78]"
            />

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Built for Students & Recruiters
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
              CareerConnect is designed to simplify hiring for companies
              while helping students confidently manage their career journey
              through an intuitive and modern platform.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;