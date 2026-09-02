import {
  FaHeartbeat,
  FaLaptopHouse,
  FaGraduationCap,
  FaMoneyBillWave,
  FaUtensils,
  FaPlaneDeparture,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaHeartbeat className="text-[#2E8B78] text-2xl" />,
    title: "Health Insurance",
    description:
      "Comprehensive medical coverage for employees and their families.",
  },
  {
    icon: <FaLaptopHouse className="text-[#2E8B78] text-2xl" />,
    title: "Hybrid Work",
    description:
      "Flexible work-from-home and office schedule.",
  },
  {
    icon: <FaGraduationCap className="text-[#2E8B78] text-2xl" />,
    title: "Learning Budget",
    description:
      "Annual budget for certifications and online courses.",
  },
  {
    icon: <FaMoneyBillWave className="text-[#2E8B78] text-2xl" />,
    title: "Performance Bonus",
    description:
      "Performance-based incentives and annual bonuses.",
  },
  {
    icon: <FaUtensils className="text-[#2E8B78] text-2xl" />,
    title: "Free Meals",
    description:
      "Breakfast, lunch and refreshments provided at the office.",
  },
  {
    icon: <FaPlaneDeparture className="text-[#2E8B78] text-2xl" />,
    title: "Paid Vacation",
    description:
      "Generous paid leave, holidays and wellness breaks.",
  },
];

function CompanyBenefits() {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Employee Benefits
        </h2>

        <p className="mt-2 text-slate-500">
          Benefits offered to employees at this company.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              {benefit.icon}
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900">
              {benefit.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {benefit.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default CompanyBenefits;