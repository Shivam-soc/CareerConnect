import CompanyCard from "./CompanyCard";

import google from "../../assets/logos/google.svg";
import microsoft from "../../assets/logos/microsoft.svg";
import adobe from "../../assets/logos/adobe.svg";
import amazon from "../../assets/logos/amazon.svg";

const companies = [
  {
    logo: google,
    name: "Google",
    industry: "Technology",
    location: "Bangalore",
    employees: "180,000+",
    jobs: 45,
  },
  {
    logo: microsoft,
    name: "Microsoft",
    industry: "Technology",
    location: "Hyderabad",
    employees: "220,000+",
    jobs: 32,
  },
  {
    logo: adobe,
    name: "Adobe",
    industry: "Software",
    location: "Noida",
    employees: "29,000+",
    jobs: 18,
  },
  {
    logo: amazon,
    name: "Amazon",
    industry: "E-Commerce",
    location: "Pune",
    employees: "1.5M+",
    jobs: 61,
  },
];

function CompanyGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {companies.map((company) => (
        <CompanyCard
          key={company.name}
          {...company}
        />
      ))}
    </div>
  );
}

export default CompanyGrid;