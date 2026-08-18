import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SearchInput from "../ui/SearchInput";
import Button from "../ui/Button";

function Hero({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="max-w-xl"
        >

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

            🚀 #1 Career Platform

          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">

            Find Your

            <br />

            <span className="text-blue-600">

              <TypeAnimation
                sequence={[
                  "Dream Job",
                  2000,
                  "Dream Internship",
                  2000,
                  "Dream Career",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />

            </span>

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">

            Discover thousands of opportunities from the world's best companies.

            Apply with one click and track your applications.

          </p>

          <div className="mt-10">

            <SearchInput

              search={search}

              setSearch={setSearch}

            />

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button>

              Explore Jobs

            </Button>

            <Button variant="secondary">

              Top Companies

            </Button>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "React",
              "Node.js",
              "MongoDB",
              "AI",
              "Cloud",
              "Python",
            ].map((skill) => (

              <span
                key={skill}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow"
              >
                {skill}
              </span>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div

          initial={{ opacity: 0, x: 80 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: .8 }}

          className="relative flex h-[500px] w-full items-center justify-center"

        >

          <div className="absolute left-6 top-10 w-64 rounded-3xl bg-white p-6 shadow-2xl">

            <h3 className="text-xl font-bold">

              Google

            </h3>

            <p className="mt-2 text-gray-500">

              Frontend Developer

            </p>

            <p className="mt-4 font-semibold text-blue-600">

              ₹22 LPA

            </p>

          </div>

          <div className="absolute right-8 top-44 w-64 rounded-3xl bg-white p-6 shadow-2xl">

            <h3 className="text-xl font-bold">

              Microsoft

            </h3>

            <p className="mt-2 text-gray-500">

              Backend Engineer

            </p>

            <p className="mt-4 font-semibold text-green-600">

              ₹18 LPA

            </p>

          </div>

          <div className="absolute bottom-10 left-24 w-64 rounded-3xl bg-white p-6 shadow-2xl">

            <h3 className="text-xl font-bold">

              Adobe

            </h3>

            <p className="mt-2 text-gray-500">

              Software Engineer

            </p>

            <p className="mt-4 font-semibold text-purple-600">

              ₹20 LPA

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;