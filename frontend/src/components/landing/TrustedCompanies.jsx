import google from "../../assets/logos/google.svg";
import microsoft from "../../assets/logos/microsoft.svg";
import adobe from "../../assets/logos/adobe.svg";
import amazon from "../../assets/logos/amazon.svg";
import apple from "../../assets/logos/apple.svg";
import meta from "../../assets/logos/meta.svg";
import intel from "../../assets/logos/intel.svg";
import nvidia from "../../assets/logos/nvidia.svg";
import cisco from "../../assets/logos/cisco.svg";
import qualcomm from "../../assets/logos/qualcomm.svg";
import accenture from "../../assets/logos/accenture.svg";
import acer from "../../assets/logos/acer.svg";
import bmw from "../../assets/logos/bmw.svg";
import spacex from "../../assets/logos/spacex.svg";

const companies = [
  { name: "Google", logo: google },
  { name: "Microsoft", logo: microsoft },
  { name: "Adobe", logo: adobe },
  { name: "Amazon", logo: amazon },
  { name: "Apple", logo: apple },
  { name: "Meta", logo: meta },
  { name: "Intel", logo: intel },
  { name: "NVIDIA", logo: nvidia },
  { name: "Cisco", logo: cisco },
  { name: "Qualcomm", logo: qualcomm },
  { name: "Accenture", logo: accenture },
  { name: "Acer", logo: acer },
  { name: "BMW", logo: bmw },
  { name: "SpaceX", logo: spacex },
];

const firstRow = companies.slice(0, 7);
const secondRow = companies.slice(7);

function TrustedCompanies() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Trusted by 500+ Hiring Partners
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Connecting students with the world's most innovative companies.
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Explore opportunities from the world's leading technology companies.
          </p>

        </div>

        {/* First Row */}
        <div className="marquee overflow-hidden">

          <div className="marquee-track-left flex w-max">

            {[...firstRow, ...firstRow].map((company, index) => (

              <div
                key={index}
                className="mx-10 flex h-20 items-center justify-center opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
              >

                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain transition duration-300 hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>

        {/* Second Row */}
        <div className="marquee mt-8 overflow-hidden">

          <div className="marquee-track-right flex w-max">

            {[...secondRow, ...secondRow].map((company, index) => (

              <div
                key={index}
                className="mx-10 flex h-20 items-center justify-center opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
              >

                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 object-contain transition duration-300 hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;