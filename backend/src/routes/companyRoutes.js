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
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ================= Public Routes =================

router.get("/", getAll);

router.get("/:id", getOne);

// ================= Recruiter Routes =================

router.get(
  "/my",
  protect,
  authorize("recruiter"),
  getRecruiterCompanies
);

// Create Company
router.post(
  "/",
  protect,
  authorize("recruiter", "admin"),
  upload.single("logo"),
  create
);

// Update Company
router.put(
  "/:id",
  protect,
  authorize("recruiter", "admin"),
  upload.single("logo"),
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