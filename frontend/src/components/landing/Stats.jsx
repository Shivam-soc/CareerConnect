import {
  FaBriefcase,
  FaBuilding,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    value: "1500+",
    title: "Active Jobs",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaBuilding />,
    value: "800+",
    title: "Companies",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaUserGraduate />,
    value: "25K+",
    title: "Students",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaStar />,
    value: "95%",
    title: "Hiring Rate",
    color: "bg-yellow-100 text-yellow-600",
  },
];

function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            CareerConnect in Numbers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Thousands of students trust our platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;