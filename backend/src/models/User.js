import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // ============================
    // Basic User Information
    // ============================
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

    // Password is optional for OAuth users
    password: {
      type: String,
      minlength: 6,
      default: "",
    },

    // ============================
    // Authentication Provider
    // ============================
    authProvider: {
      type: String,
      enum: ["local", "google", "github"],
      default: "local",
    },

    providerId: {
      type: String,
      default: "",
    },

    // ============================
    // Password Reset
    // ============================
    resetPasswordToken: {
      type: String,
      default: "",
    },

    resetPasswordExpire: {
      type: Date,
      default: null,
    },

    // ============================
    // User Role
    // ============================
    role: {
      type: String,
      enum: ["student", "recruiter", "admin"],
      default: "student",
    },

    // ============================
    // Profile
    // ============================
    avatar: {
      type: String,
      default: "",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    coverPhoto: {
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

    resume: {
      type: String,
      default: "",
    },

    // ============================
    // Skills
    // ============================
    skills: [
      {
        type: String,
      },
    ],

    // ============================
    // Education
    // ============================
    education: [
      {
        degree: String,
        college: String,
        year: String,
        cgpa: String,
      },
    ],

    // ============================
    // Experience
    // ============================
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

    // ============================
    // Projects
    // ============================
    projects: [
      {
        title: String,
        description: String,
        technologies: [String],
        github: String,
        demo: String,
      },
    ],

    // ============================
    // Certifications
    // ============================
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

    // ============================
    // Social Links
    // ============================
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
  },
  {
    timestamps: true,
  }
);

// ============================
// Indexes
// ============================

userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

const User = mongoose.model("User", userSchema);

export default User;