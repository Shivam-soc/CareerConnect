import express from "express";

import { dashboard } from "../controllers/studentController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect);
router.use(authorize("student"));

router.get("/dashboard", dashboard);

export default router;