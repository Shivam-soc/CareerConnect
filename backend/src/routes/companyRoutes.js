import express from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
  getRecruiterCompanies,
} from "../controllers/companyController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAll);

// Recruiter Routes
router.get(
  "/my",
  protect,
  authorize("recruiter"),
  getRecruiterCompanies
);

// Public Route
router.get("/:id", getOne);

// Create Company
router.post(
  "/",
  protect,
  authorize("recruiter", "admin"),
  create
);

// Update Company
router.put(
  "/:id",
  protect,
  authorize("recruiter", "admin"),
  update
);

// Delete Company
router.delete(
  "/:id",
  protect,
  authorize("recruiter", "admin"),
  remove
);

export default router;