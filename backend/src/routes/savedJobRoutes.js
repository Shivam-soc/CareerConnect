import express from "express";

import {
  save,
  getSaved,
  remove,
} from "../controllers/savedJobController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorize("student"),
  save
);

router.get(
  "/",
  protect,
  authorize("student"),
  getSaved
);

router.delete(
  "/:jobId",
  protect,
  authorize("student"),
  remove
);

export default router;