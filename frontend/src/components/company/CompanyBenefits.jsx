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
    icon: <FaHeartbeat className="text-red-500 text-2xl" />,
    title: "Health Insurance",
    description: "Comprehensive medical coverage for employees and families.",
  },
  {
    icon: <FaLaptopHouse className="text-blue-500 text-2xl" />,
    title: "Hybrid Work",
    description: "Flexible work-from-home and office schedule.",
  },
  {
    icon: <FaGraduationCap className="text-green-500 text-2xl" />,
    title: "Learning Budget",
    description: "Annual budget for courses, certifications, and conferences.",
  },
  {
    icon: <FaMoneyBillWave className="text-yellow-500 text-2xl" />,
    title: "Performance Bonus",
    description: "Performance-based bonuses and stock options.",
  },
  {
    icon: <FaUtensils className="text-orange-500 text-2xl" />,
    title: "Free Meals",
    description: "Healthy breakfast, lunch, and snacks every day.",
  },
  {
    icon: <FaPlaneDeparture className="text-purple-500 text-2xl" />,
    title: "Paid Vacation",
    description: "Generous paid leave and wellness holidays.",
  },
];

function CompanyBenefits() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Employee Benefits
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {benefits.map((benefit) => (

          <div
            key={benefit.title}
            className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div>{benefit.icon}</div>

            <h3 className="mt-4 text-xl font-semibold">
              {benefit.title}
            </h3>

            <p className="mt-3 text-slate-500">
              {benefit.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CompanyBenefits;