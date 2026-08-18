import {
  FiBriefcase,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

import Illustration from "../../assets/auth/auth-illustration.svg";

function AuthBanner() {
  const features = [
    {
      icon: <FiBriefcase size={18} />,
      title: "Verified Jobs",
      text: "Apply to trusted companies with confidence.",
    },
    {
      icon: <FiFileText size={18} />,
      title: "Resume Builder",
      text: "Create ATS-friendly resumes in minutes.",
    },
    {
      icon: <FiCheckCircle size={18} />,
      title: "One Click Apply",
      text: "Track every application from one dashboard.",
    },
  ];

  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden border-r border-slate-200 bg-slate-50 px-14 py-12">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-70" />

      <div className="relative z-10">

        {/* Logo */}

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Career
          <span className="text-blue-600">Connect</span>
        </h1>

        <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
          Find internships, full-time jobs and career
          opportunities from trusted companies.
        </p>

      </div>

      {/* Illustration */}

      <div className="relative z-10 flex justify-center py-8">

        <img
          src={Illustration}
          alt="CareerConnect"
          className="w-[340px]"
        />

      </div>

      {/* Features */}

      <div className="relative z-10 space-y-4">

        {features.map((item) => (

          <div
            key={item.title}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              transition
              hover:border-blue-200
              hover:shadow-md
            "
          >

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-blue-50
                text-blue-600
              "
            >
              {item.icon}
            </div>

            <div>

              <h3 className="font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="relative z-10 mt-8 border-t border-slate-200 pt-6">

        <p className="text-sm text-slate-500">
          Trusted by thousands of students and recruiters across India.
        </p>

      </div>

    </section>
  );
}

export default AuthBanner;