import CompanyCard from "./CompanyCard";

import microsoft from "../../assets/logos/microsoft.svg";
import adobe from "../../assets/logos/adobe.svg";
import amazon from "../../assets/logos/amazon.svg";
import nvidia from "../../assets/logos/nvidia.svg";

const similarCompanies = [
  {
    id: 1,
    logo: microsoft,
    name: "Microsoft",
    industry: "Technology",
    location: "Hyderabad",
    employees: "220,000+",
    jobs: 32,
  },
  {
    id: 2,
    logo: adobe,
    name: "Adobe",
    industry: "Software",
    location: "Noida",
    employees: "29,000+",
    jobs: 18,
  },
  {
    id: 3,
    logo: amazon,
    name: "Amazon",
    industry: "E-Commerce",
    location: "Pune",
    employees: "1.5M+",
    jobs: 61,
  },
  {
    id: 4,
    logo: nvidia,
    name: "NVIDIA",
    industry: "AI & Hardware",
    location: "Bangalore",
    employees: "30,000+",
    jobs: 21,
  },
];

function SimilarCompanies() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Similar Companies
          </h2>

          <p className="mt-2 text-slate-500">
            Discover more companies hiring for similar roles.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {similarCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            {...company}
          />
        ))}

      </div>

    </section>
  );
}

export default SimilarCompanies;