import LogoMarquee from "./LogoMarquee";

const logos = [
  "/logos/google.svg",
  "/logos/microsoft.svg",
  "/logos/adobe.svg",
  "/logos/amazon.svg",
  "/logos/apple.svg",
  "/logos/meta.svg",
  "/logos/intel.svg",
  "/logos/nvidia.svg",
  "/logos/cisco.svg",
  "/logos/accenture.svg",
  "/logos/ibm.svg",
  "/logos/acer.svg",
];

function TopHiringCompanies() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E8F7F3] px-5 py-2 text-sm font-semibold text-[#2E8B78]">
            Trusted Companies
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Get hired by the world's
            <br />
            leading companies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Discover opportunities from global technology companies,
            innovative startups and industry leaders actively hiring.
          </p>
        </div>

        <div className="mt-16">
          <LogoMarquee logos={logos} />
        </div>
      </div>
    </section>
  );
}

export default TopHiringCompanies;