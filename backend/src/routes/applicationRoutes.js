import express from "express";

import {
  apply,
  myApplications,
  recruiterApplications,
  updateStatus,
} from "../controllers/applicationController.js";

import upload from "../middleware/uploadMiddleware.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// ======================================
// Student Routes
// ======================================

// Apply for a job
router.post(
  "/",
  protect,
  authorize("student"),
  upload.single("resume"),
  apply
);

// Get logged-in student's applications
router.get(
  "/my",
  protect,
  authorize("student"),
  myApplications
);

// ======================================
// Recruiter Routes
// ======================================

// Get applicants for a job
router.get(
  "/job/:jobId",
  protect,
  authorize("recruiter", "admin"),
  recruiterApplications
);

// Update application status
router.patch(
  "/:id/status",
  protect,
  authorize("recruiter", "admin"),
  updateStatus
);

export default router;