import express from "express";

import {
  getDashboard,
  getUsers,
  getJobs,
  getApplications,
  deleteUser,
} from "../controllers/adminController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("admin"));

router.get("/dashboard", getDashboard);

router.get("/users", getUsers);

router.get("/jobs", getJobs);

router.get(
  "/applications",
  getApplications
);

router.delete("/users/:id", deleteUser);

export default router;