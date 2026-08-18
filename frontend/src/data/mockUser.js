const mockUser = {
  id: 1,

  // ===========================
  // Basic Information
  // ===========================

  name: "Alex Carter",

  role: "Full Stack Developer",

  location: "Bangalore, Karnataka",

  email: "alex.carter@example.com",

  phone: "+91 98765 43210",

  avatar: "/images/default-avatar.png",

  about:
    "Passionate Full Stack Developer with experience building scalable web applications using React, Node.js, Express, and MongoDB. Enthusiastic about creating user-friendly products, solving real-world problems, and continuously learning modern technologies.",

  profileCompletion: 88,

  // ===========================
  // Skills
  // ===========================

  skills: {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
    ],

    Frontend: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    Backend: [
      "Node.js",
      "Express.js",
    ],

    Database: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
    ],

    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
    ],
  },

  // ===========================
  // Education
  // ===========================

  education: [
    {
      college: "National Institute of Technology",

      degree: "B.Tech Computer Science & Engineering",

      cgpa: "8.92",

      year: "2022 - 2026",
    },
  ],

  // ===========================
  // Experience
  // ===========================

  experience: [
    {
      company: "TechNova Solutions",

      role: "Frontend Developer Intern",

      duration: "Jan 2026 - Present",
    },
  ],

  // ===========================
  // Projects
  // ===========================

  projects: [
    {
      id: 1,

      title: "JobSphere",

      description:
        "A modern recruitment platform where students can discover opportunities, track applications, and companies can manage hiring.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],

      status: "Completed",

      github: "#",

      demo: "#",
    },

    {
      id: 2,

      title: "Finance Tracker",

      description:
        "Personal finance management application with expense tracking, budgeting, analytics and interactive dashboards.",

      technologies: [
        "React",
        "Firebase",
        "Chart.js",
      ],

      status: "Completed",

      github: "#",

      demo: "#",
    },

    {
      id: 3,

      title: "TaskFlow",

      description:
        "Collaborative project management application inspired by Trello and Notion with drag-and-drop task management.",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],

      status: "In Progress",

      github: "#",

      demo: "#",
    },
  ],

  // ===========================
  // Certifications
  // ===========================

  certifications: [
    {
      id: 1,

      title: "AWS Certified Cloud Practitioner",

      issuer: "Amazon Web Services",

      year: "2025",

      credential: "#",
    },

    {
      id: 2,

      title: "Meta Front-End Developer",

      issuer: "Meta",

      year: "2025",

      credential: "#",
    },

    {
      id: 3,

      title: "MongoDB Associate Developer",

      issuer: "MongoDB",

      year: "2026",

      credential: "#",
    },
  ],

  // ===========================
  // Resume
  // ===========================

  resume: {
    fileName: "Alex_Carter_Resume.pdf",

    uploadedOn: "12 Aug 2026",

    fileSize: "512 KB",

    atsScore: 89,

    url: "#",
  },

  // ===========================
  // Social Links
  // ===========================

  social: {
    github: "https://github.com/alexcarter",

    linkedin: "https://linkedin.com/in/alexcarter",

    portfolio: "https://alexcarter.dev",

    leetcode: "https://leetcode.com/alexcarter",

    geeksforgeeks:
      "https://www.geeksforgeeks.org/user/alexcarter/",
  },
};

export default mockUser;