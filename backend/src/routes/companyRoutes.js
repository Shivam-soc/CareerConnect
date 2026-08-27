import express from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/companyController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOne);

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
  authorize("admin"),
  remove
);

export default router;
