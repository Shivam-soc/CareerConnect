import express from "express";

import {
  create,
  getJobs,
  getJob,
  update,
  remove,
  myJobs,
} from "../controllers/jobController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getJobs);

router.get(
  "/my",
  protect,
  authorize("recruiter", "admin"),
  myJobs
);

router.get("/:id", getJob);

router.post(
  "/",
  protect,
  authorize("recruiter", "admin"),
  create
);

router.put(
  "/:id",
  protect,
  authorize("recruiter", "admin"),
  update
);

router.delete(
  "/:id",
  protect,
  authorize("recruiter", "admin"),
  remove
);

export default router;