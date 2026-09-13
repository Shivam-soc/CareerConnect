import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import savedJobRoutes from "./routes/savedJobRoutes.js";
import recruiterRoutes from "./routes/recruiterRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://career-connect-shivam-soc.vercel.app",
  "https://career-connect-git-main-shivam-soc.vercel.app",
  "https://career-connect-ndhrqs98r-shivam-soc.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS Not Allowed"));
    },
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ============================
// Static Files
// ============================

app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"))
);

// ============================
// API Routes
// ============================

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved-jobs", savedJobRoutes);
app.use("/api/recruiter", recruiterRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/notifications", notificationRoutes);

// ============================
// Health Check
// ============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CareerConnect API is running 🚀",
  });
});

// ============================
// 404 Handler
// ============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

export default app;