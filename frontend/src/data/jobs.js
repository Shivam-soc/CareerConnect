import googleLogo from "../assets/logos/google.svg";
import microsoftLogo from "../assets/logos/microsoft.svg";
import adobeLogo from "../assets/logos/adobe.svg";
import amazonLogo from "../assets/logos/amazon.svg";
import appleLogo from "../assets/logos/apple.svg";
import nvidiaLogo from "../assets/logos/nvidia.svg";
import qualcommLogo from "../assets/logos/qualcomm.svg";
import intelLogo from "../assets/logos/intel.svg";
import oracleLogo from "../assets/logos/oracle.svg";
import ibmLogo from "../assets/logos/ibm.svg";
import ciscoLogo from "../assets/logos/cisco.svg";
import accentureLogo from "../assets/logos/accenture.svg";
import metaLogo from "../assets/logos/meta.svg";
import acerLogo from "../assets/logos/acer.svg";
import bmwLogo from "../assets/logos/bmw.svg";

const jobs = [
  {
    id: 1,
    company: "Google",
    logo: googleLogo,
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹22 LPA",
    type: "Full Time",
    experience: "0-2 Years",
    category: "Software Development",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: true,
    posted: "2 days ago",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Build modern web applications using React and TypeScript.",
    requirements: [
      "Strong JavaScript fundamentals",
      "React",
      "REST APIs",
      "Git"
    ]
  },

  // 14 more jobs...
];

export default jobs;