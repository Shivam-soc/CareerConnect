import express from "express";

import {
  apply,
  myApplications,
  recruiterApplications,
  updateStatus,
} from "../controllers/applicationController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("student"),
  apply
);

router.get(
  "/my",
  protect,
  authorize("student"),
  myApplications
);

router.get(
  "/job/:jobId",
  protect,
  authorize("recruiter", "admin"),
  recruiterApplications
);

router.put(
  "/:id/status",
  protect,
  authorize("recruiter", "admin"),
  updateStatus
);

export default router;