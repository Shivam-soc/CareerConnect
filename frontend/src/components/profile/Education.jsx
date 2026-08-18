import { FaGraduationCap, FaCalendarAlt, FaStar } from "react-icons/fa";
import mockUser from "../../data/mockUser";

function Education() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Education
        </h2>

        <p className="mt-1 text-slate-500">
          Academic qualifications and achievements.
        </p>

      </div>

      <div className="space-y-6">

        {mockUser.education.map((edu, index) => (

          <div
            key={index}
            className="
              relative
              rounded-2xl
              border
              border-slate-200
              p-6
              transition-all
              duration-300
              hover:border-blue-300
              hover:shadow-md
            "
          >

            {/* Top */}

            <div className="flex items-start justify-between">

              <div className="flex gap-5">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                  "
                >
                  <FaGraduationCap size={22} />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {edu.degree}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {edu.college}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                      <FaCalendarAlt />

                      {edu.year}

                    </span>

                    <span className="flex items-center gap-2">

                      <FaStar />

                      CGPA {edu.cgpa}

                    </span>

                  </div>

                </div>

              </div>

              {/* Badge */}

              <span
                className="
                  rounded-full
                  bg-green-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-green-700
                "
              >
                Current
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;