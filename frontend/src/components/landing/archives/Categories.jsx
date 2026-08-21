import {
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaPalette,
  FaMicrochip,
  FaMobileAlt,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      id: 1,
      icon: <FaCode />,
      name: "Software Development",
      jobs: 245,
    },
    {
      id: 2,
      icon: <FaRobot />,
      name: "AI / Machine Learning",
      jobs: 120,
    },
    {
      id: 3,
      icon: <FaDatabase />,
      name: "Data Science",
      jobs: 96,
    },
    {
      id: 4,
      icon: <FaCloud />,
      name: "Cloud Computing",
      jobs: 84,
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      name: "Cyber Security",
      jobs: 73,
    },
    {
      id: 6,
      icon: <FaPalette />,
      name: "UI / UX Design",
      jobs: 65,
    },
    {
      id: 7,
      icon: <FaMicrochip />,
      name: "VLSI & Embedded",
      jobs: 58,
    },
    {
      id: 8,
      icon: <FaMobileAlt />,
      name: "Mobile Development",
      jobs: 102,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Browse by Category
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          Discover opportunities across your favorite career domains.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => (

          <div
            key={category.id}
            className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
          >

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {category.name}
            </h3>

            <p className="mt-2 text-slate-500">
              {category.jobs} Open Opportunities
            </p>

            <button className="mt-6 font-medium text-blue-600 transition group-hover:translate-x-2">
              Explore →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;