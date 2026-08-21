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

const defaultBenefits = [
  "🏥 Health Insurance",
  "🏠 Hybrid Work",
  "📚 Learning Budget",
  "💰 Performance Bonus",
];

const jobs = [
  {
    id: 1,
    company: "Google",
    logo: googleLogo,
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹22 LPA",
    salaryValue: 22,
    type: "Full Time",
    experience: "0–2",
    category: "Software Development",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: true,
    posted: "2 days ago",

    description:
      "Join Google's engineering team to build modern, scalable web applications used by millions of users worldwide.",

    responsibilities: [
      "Develop modern React applications",
      "Build reusable UI components",
      "Integrate REST APIs",
      "Collaborate with backend engineers",
      "Optimize application performance",
    ],

    requirements: [
      "Strong JavaScript fundamentals",
      "React",
      "TypeScript",
      "REST APIs",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    id: 2,
    company: "Microsoft",
    logo: microsoftLogo,
    title: "Backend Engineer",
    location: "Hyderabad",
    salary: "₹20 LPA",
    salaryValue: 20,
    type: "Full Time",
    experience: "1–3",
    category: "Backend Development",
    rating: 4.8,
    verified: true,
    featured: true,
    saved: false,
    posted: "1 day ago",

    description:
      "Build scalable backend services powering enterprise cloud applications.",

    responsibilities: [
      "Develop REST APIs",
      "Design scalable microservices",
      "Optimize database queries",
      "Maintain backend infrastructure",
      "Collaborate with frontend teams",
    ],

    requirements: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  {
    id: 3,
    company: "Adobe",
    logo: adobeLogo,
    title: "Software Engineer",
    location: "Noida",
    salary: "₹20 LPA",
    salaryValue: 20,
    type: "Hybrid",
    experience: "0",
    category: "Software Engineering",
    rating: 4.7,
    verified: true,
    featured: false,
    saved: true,
    posted: "Today",

    description:
      "Develop creative software solutions used by millions of designers around the world.",

    responsibilities: [
      "Develop software features",
      "Fix bugs",
      "Improve performance",
      "Write clean code",
      "Review pull requests",
    ],

    requirements: [
      "Java",
      "Spring Boot",
      "SQL",
      "Git",
      "Problem Solving",
    ],

    benefits: defaultBenefits,

    skills: [
      "Java",
      "Spring Boot",
      "SQL",
    ],
  },

  {
    id: 4,
    company: "Amazon",
    logo: amazonLogo,
    title: "Cloud Engineer",
    location: "Pune",
    salary: "₹24 LPA",
    salaryValue: 24,
    type: "Remote",
    experience: "2–5",
    category: "Cloud Computing",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: false,
    posted: "3 days ago",

    description:
      "Build and manage highly available cloud infrastructure running at massive scale.",

    responsibilities: [
      "Deploy cloud services",
      "Automate infrastructure",
      "Monitor production systems",
      "Improve security",
      "Maintain CI/CD pipelines",
    ],

    requirements: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Linux",
      "Terraform",
    ],

    benefits: defaultBenefits,

    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },

  {
    id: 5,
    company: "Apple",
    logo: appleLogo,
    title: "iOS Developer",
    location: "Hyderabad",
    salary: "₹28 LPA",
    salaryValue: 28,
    type: "Full Time",
    experience: "2–4",
    category: "Mobile Development",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: false,
    posted: "Today",

    description:
      "Design and develop world-class iOS applications with exceptional user experiences.",

    responsibilities: [
      "Develop iOS applications",
      "Maintain reusable components",
      "Collaborate with UI designers",
      "Improve app performance",
      "Write unit tests",
    ],

    requirements: [
      "Swift",
      "UIKit",
      "Xcode",
      "REST APIs",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "Swift",
      "UIKit",
      "Xcode",
    ],
  },

  {
    id: 6,
    company: "NVIDIA",
    logo: nvidiaLogo,
    title: "AI Engineer",
    location: "Pune",
    salary: "₹30 LPA",
    salaryValue: 30,
    type: "Full Time",
    experience: "1–3",
    category: "Artificial Intelligence",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: true,
    posted: "1 day ago",

    description:
      "Develop AI solutions and deep learning models powering next-generation GPU technologies.",

    responsibilities: [
      "Build AI models",
      "Train deep learning networks",
      "Optimize GPU workloads",
      "Collaborate with research teams",
      "Deploy ML pipelines",
    ],

    requirements: [
      "Python",
      "TensorFlow",
      "CUDA",
      "PyTorch",
      "Machine Learning",
    ],

    benefits: defaultBenefits,

    skills: [
      "Python",
      "TensorFlow",
      "CUDA",
    ],
  },

  {
    id: 7,
    company: "Intel",
    logo: intelLogo,
    title: "VLSI Design Engineer",
    location: "Bangalore",
    salary: "₹23 LPA",
    salaryValue: 23,
    type: "Full Time",
    experience: "0",
    category: "VLSI",
    rating: 4.8,
    verified: true,
    featured: true,
    saved: false,
    posted: "2 days ago",

    description:
      "Design and verify next-generation semiconductor chips used in modern computing systems.",

    responsibilities: [
      "Design digital circuits",
      "Write RTL code",
      "Perform functional verification",
      "Debug timing issues",
      "Work with hardware teams",
    ],

    requirements: [
      "Verilog",
      "SystemVerilog",
      "UVM",
      "Digital Electronics",
      "Linux",
    ],

    benefits: defaultBenefits,

    skills: [
      "Verilog",
      "SystemVerilog",
      "UVM",
    ],
  },

  {
    id: 8,
    company: "Qualcomm",
    logo: qualcommLogo,
    title: "Embedded Software Engineer",
    location: "Hyderabad",
    salary: "₹24 LPA",
    salaryValue: 24,
    type: "Hybrid",
    experience: "1–2",
    category: "Embedded Systems",
    rating: 4.8,
    verified: true,
    featured: false,
    saved: false,
    posted: "Today",

    description:
      "Develop embedded software for next-generation mobile chipsets and IoT devices.",

    responsibilities: [
      "Develop embedded firmware",
      "Debug hardware interfaces",
      "Optimize device drivers",
      "Test embedded applications",
      "Collaborate with hardware engineers",
    ],

    requirements: [
      "Embedded C",
      "C++",
      "RTOS",
      "Microcontrollers",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "Embedded C",
      "RTOS",
      "C++",
    ],
  },

  {
    id: 9,
    company: "Oracle",
    logo: oracleLogo,
    title: "Java Developer",
    location: "Bangalore",
    salary: "₹18 LPA",
    salaryValue: 18,
    type: "Full Time",
    experience: "1–3",
    category: "Backend Development",
    rating: 4.6,
    verified: true,
    featured: false,
    saved: true,
    posted: "4 days ago",

    description:
      "Develop enterprise backend applications for Oracle cloud products and services.",

    responsibilities: [
      "Develop backend services",
      "Design REST APIs",
      "Optimize SQL queries",
      "Write unit tests",
      "Review code",
    ],

    requirements: [
      "Java",
      "Spring Boot",
      "SQL",
      "REST APIs",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "Java",
      "Spring Boot",
      "SQL",
    ],
  },

  {
    id: 10,
    company: "IBM",
    logo: ibmLogo,
    title: "Cloud Engineer",
    location: "Pune",
    salary: "₹16 LPA",
    salaryValue: 16,
    type: "Hybrid",
    experience: "0",
    category: "Cloud Computing",
    rating: 4.5,
    verified: true,
    featured: false,
    saved: false,
    posted: "5 days ago",

    description:
      "Work with enterprise cloud solutions using containerized applications and modern DevOps practices.",

    responsibilities: [
      "Deploy cloud infrastructure",
      "Manage Docker containers",
      "Monitor cloud systems",
      "Automate deployments",
      "Support DevOps pipelines",
    ],

    requirements: [
      "AWS",
      "Docker",
      "Linux",
      "Kubernetes",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "AWS",
      "Docker",
      "Linux",
    ],
  },

  {
    id: 11,
    company: "Cisco",
    logo: ciscoLogo,
    title: "Network Engineer",
    location: "Bangalore",
    salary: "₹15 LPA",
    salaryValue: 15,
    type: "Full Time",
    experience: "1–2",
    category: "Networking",
    rating: 4.5,
    verified: true,
    featured: false,
    saved: false,
    posted: "Yesterday",

    description:
      "Design, configure, and maintain enterprise-grade networking infrastructure.",

    responsibilities: [
      "Configure enterprise networks",
      "Troubleshoot connectivity issues",
      "Maintain network security",
      "Monitor network performance",
      "Document network architecture",
    ],

    requirements: [
      "Networking",
      "CCNA",
      "Python",
      "Linux",
      "Troubleshooting",
    ],

    benefits: defaultBenefits,

    skills: [
      "Networking",
      "CCNA",
      "Python",
    ],
  },

  {
    id: 12,
    company: "Accenture",
    logo: accentureLogo,
    title: "Full Stack Developer",
    location: "Mumbai",
    salary: "₹12 LPA",
    salaryValue: 12,
    type: "Hybrid",
    experience: "0",
    category: "Full Stack Development",
    rating: 4.4,
    verified: true,
    featured: false,
    saved: true,
    posted: "3 days ago",

    description:
      "Develop scalable web applications using modern frontend and backend technologies.",

    responsibilities: [
      "Develop frontend and backend modules",
      "Integrate REST APIs",
      "Write reusable components",
      "Maintain databases",
      "Collaborate with product teams",
    ],

    requirements: [
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "React",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: 13,
    company: "Meta",
    logo: metaLogo,
    title: "React Developer",
    location: "Remote",
    salary: "₹32 LPA",
    salaryValue: 32,
    type: "Remote",
    experience: "2–5",
    category: "Frontend Development",
    rating: 4.9,
    verified: true,
    featured: true,
    saved: false,
    posted: "Today",

    description:
      "Build high-performance frontend applications used by millions of users worldwide.",

    responsibilities: [
      "Develop React applications",
      "Optimize rendering performance",
      "Collaborate with UI/UX designers",
      "Write reusable components",
      "Review frontend code",
    ],

    requirements: [
      "React",
      "Next.js",
      "GraphQL",
      "TypeScript",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "React",
      "Next.js",
      "GraphQL",
    ],
  },

  {
    id: 14,
    company: "Acer",
    logo: acerLogo,
    title: "Frontend Engineer",
    location: "Bangalore",
    salary: "₹14 LPA",
    salaryValue: 14,
    type: "Full Time",
    experience: "0–2",
    category: "Frontend Development",
    rating: 4.4,
    verified: true,
    featured: false,
    saved: false,
    posted: "6 days ago",

    description:
      "Develop responsive web interfaces for enterprise software and digital platforms.",

    responsibilities: [
      "Develop responsive UI",
      "Write reusable components",
      "Collaborate with backend developers",
      "Optimize application performance",
      "Fix UI bugs",
    ],

    requirements: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "React",
      "JavaScript",
      "CSS",
    ],
  },

  {
    id: 15,
    company: "BMW",
    logo: bmwLogo,
    title: "Software Engineer",
    location: "Pune",
    salary: "₹19 LPA",
    salaryValue: 19,
    type: "Full Time",
    experience: "1–3",
    category: "Software Engineering",
    rating: 4.7,
    verified: true,
    featured: true,
    saved: true,
    posted: "2 days ago",

    description:
      "Develop intelligent software solutions powering the future of connected vehicles.",

    responsibilities: [
      "Develop enterprise software",
      "Write clean and maintainable code",
      "Review pull requests",
      "Collaborate with global teams",
      "Improve application quality",
    ],

    requirements: [
      "Java",
      "Spring Boot",
      "Microservices",
      "SQL",
      "Git",
    ],

    benefits: defaultBenefits,

    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
    ],
  },
];

export default jobs;