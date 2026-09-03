import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["student", "recruiter", "admin"],
      default: "student",
    },

    avatar: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    headline: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    education: [
      {
        degree: String,
        college: String,
        year: String,
        cgpa: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

projects: [
  {
    title: String,
    description: String,
    technologies: [String],
    github: String,
    demo: String,
  },
],
certifications: [
  {
    title: {
      type: String,
      default: "",
    },
    organization: {
      type: String,
      default: "",
    },
    issueDate: {
      type: String,
      default: "",
    },
    credentialId: {
      type: String,
      default: "",
    },
    credentialUrl: {
      type: String,
      default: "",
    },
  },
],

socialLinks: {
  github: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  },
  leetcode: {
    type: String,
    default: "",
  },
  geeksforgeeks: {
    type: String,
    default: "",
  },
},

profilePicture: {
  type: String,
  default: "",
},

coverPhoto: {
  type: String,
  default: "",
},

resume: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;