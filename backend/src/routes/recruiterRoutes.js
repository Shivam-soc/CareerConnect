import express from "express";

import {
  getDashboard,
  getMyJobs,
} from "../controllers/recruiterController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("recruiter"));

router.get("/dashboard", getDashboard);
router.get("/jobs", getMyJobs);

export default router;