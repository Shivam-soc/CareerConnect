import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import mockUser from "../../data/mockUser";

function Certifications() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Certifications
        </h2>

        <p className="mt-1 text-slate-500">
          Professional certifications and completed courses.
        </p>

      </div>

      <div className="space-y-5">

        {mockUser.certifications.map((certificate) => (

          <div
            key={certificate.id}
            className="
              flex
              flex-col
              gap-5
              rounded-2xl
              border
              border-slate-200
              p-6
              transition
              hover:border-blue-300
              hover:shadow-md
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div className="flex items-start gap-5">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-100
                  text-yellow-600
                "
              >
                <FaCertificate size={22} />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {certificate.issuer}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">

                  <FaCalendarAlt />

                  {certificate.year}

                </div>

              </div>

            </div>

            <a
              href={certificate.credential}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-300
                px-5
                py-3
                font-medium
                transition
                hover:bg-slate-100
              "
            >
              View Certificate

              <FaExternalLinkAlt />

            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;