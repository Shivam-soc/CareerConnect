import express from "express";

import {
  getMyNotifications,
  unreadCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  removeNotification,
  removeAllNotifications,
} from "../controllers/notificationController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ======================================
// All routes require authentication
// ======================================

router.use(protect);

// ======================================
// Get My Notifications
// GET /api/notifications
// ======================================

router.get("/", getMyNotifications);

// ======================================
// Get Unread Count
// GET /api/notifications/unread-count
// ======================================

router.get(
  "/unread-count",
  unreadCount
);

// ======================================
// Mark One Notification Read
// PUT /api/notifications/:id/read
// ======================================

router.put(
  "/:id/read",
  markNotificationAsRead
);

// ======================================
// Mark All Notifications Read
// PUT /api/notifications/read-all
// ======================================

router.put(
  "/read-all",
  markAllNotificationsAsRead
);

// ======================================
// Delete One Notification
// DELETE /api/notifications/:id
// ======================================

router.delete(
  "/:id",
  removeNotification
);

// ======================================
// Delete All Notifications
// DELETE /api/notifications
// ======================================

router.delete(
  "/",
  removeAllNotifications
);

export default router;