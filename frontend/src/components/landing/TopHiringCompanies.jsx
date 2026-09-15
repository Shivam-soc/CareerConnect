import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import LogoMarquee from "./LogoMarquee";
import SectionHeading from "../ui/SectionHeading";

function TopHiringCompanies() {
  const logos = [
    {
      src: "/logos/google.svg",
      scale: 1,
    },
    {
      src: "/logos/microsoft.svg",
      scale: 1,
    },
    {
      src: "/logos/amazon.svg",
      scale: 1,
    },
    {
      src: "/logos/nvidia.svg",
      scale: 1.05,
    },
    {
      src: "/logos/tcs.svg",
      scale: 1.2,
    },
    {
      src: "/logos/accenture.svg",
      scale: 1,
    },
    {
      src: "/logos/qualcomm.svg",
      scale: 1.05,
    },
    {
      src: "/logos/spacex.svg",
      scale: 1.3,
    },
    {
      src: "/logos/bmw.svg",
      scale: 1,
    },
    {
      src: "/logos/meta.svg",
      scale: 1,
    },
    {
      src: "/logos/oracle.svg",
      scale: 1.05,
    },
  ];

  return (
    <section className="w-full min-w-0 overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">

        {/* --------------------------------
            Header
        --------------------------------- */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          {/* Heading */}

          <div className="min-w-0 max-w-3xl">

            {/* Badge */}

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />

              Trusted Recruiters
            </div>

            <SectionHeading
              eyebrow="Top Hiring Companies"
              title={
                <>
                  Build your career with{" "}
                  <span className="text-emerald-600">
                    leading companies.
                  </span>
                </>
              }
              subtitle="Explore opportunities from companies hiring talented students and professionals."
            />
          </div>

          {/* CTA */}

          <Link
            to="/companies"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-emerald-200
              hover:text-emerald-700
              hover:shadow-md
            "
          >
            <Building2 className="h-4 w-4" />

            Explore Companies

            <ArrowRight
              className="
                h-4 w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* --------------------------------
            Company logos
        --------------------------------- */}

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <LogoMarquee logos={logos} />
        </div>

        {/* --------------------------------
            Trust indicator
        --------------------------------- */}

        <div className="mt-6 flex justify-center sm:mt-8">
          <div
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-slate-100
              bg-slate-50/80
              px-4
              py-2
              text-center
              text-xs
              font-medium
              text-slate-500
              sm:text-sm
            "
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />

            <span>
              Connecting talent with ambitious companies.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHiringCompanies;