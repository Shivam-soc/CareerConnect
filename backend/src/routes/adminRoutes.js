import express from "express";

import {
  getDashboard,
  getUsers,
  removeUser,
  getCompanies,
  removeCompany,
  getJobs,
  removeJob,
  getApplications,
  removeApplication,
} from "../controllers/adminController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// ======================================
// Dashboard
// ======================================

router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  getDashboard
);

// ======================================
// Users
// ======================================

router.get(
  "/users",
  protect,
  authorize("admin"),
  getUsers
);

router.delete(
  "/users/:id",
  protect,
  authorize("admin"),
  removeUser
);

// ======================================
// Companies
// ======================================

router.get(
  "/companies",
  protect,
  authorize("admin"),
  getCompanies
);

router.delete(
  "/companies/:id",
  protect,
  authorize("admin"),
  removeCompany
);

// ======================================
// Jobs
// ======================================

router.get(
  "/jobs",
  protect,
  authorize("admin"),
  getJobs
);

router.delete(
  "/jobs/:id",
  protect,
  authorize("admin"),
  removeJob
);

// ======================================
// Applications
// ======================================

router.get(
  "/applications",
  protect,
  authorize("admin"),
  getApplications
);

router.delete(
  "/applications/:id",
  protect,
  authorize("admin"),
  removeApplication
);

export default router;