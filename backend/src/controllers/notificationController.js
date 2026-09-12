import {
  getUserNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  deleteAllNotifications,
  getUnreadCount,
} from "../services/notificationService.js";

// ======================================
// Get My Notifications
// ======================================
export const getMyNotifications = async (req, res) => {
  try {
    const page = Math.max(
      Number.parseInt(req.query.page, 10) || 1,
      1
    );
    const limit = Math.min(
      Math.max(Number.parseInt(req.query.limit, 10) || 20, 1),
      100
    );

    const result = await getUserNotifications(
      req.user._id,
      page,
      limit
    );

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get Unread Count
// ======================================
export const unreadCount = async (req, res) => {
  try {
    const count = await getUnreadCount(req.user._id);

    res.status(200).json({
      success: true,
      unreadCount: count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Mark One Notification as Read
// ======================================
export const markNotificationAsRead = async (
  req,
  res
) => {
  try {
    const notification = await markAsRead(
      req.params.id,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Notification marked as read.",
      notification,
    });
  } catch (error) {
    const statusCode =
      error.message === "Notification not found"
        ? 404
        : 400;

    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Mark All Notifications as Read
// ======================================
export const markAllNotificationsAsRead =
  async (req, res) => {
    try {
      await markAllAsRead(req.user._id);

      res.status(200).json({
        success: true,
        message:
          "All notifications marked as read.",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

// ======================================
// Delete One Notification
// ======================================
export const removeNotification = async (
  req,
  res
) => {
  try {
    await deleteNotification(
      req.params.id,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Notification deleted.",
    });
  } catch (error) {
    const statusCode =
      error.message === "Notification not found"
        ? 404
        : 400;

    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Delete All Notifications
// ======================================
export const removeAllNotifications =
  async (req, res) => {
    try {
      await deleteAllNotifications(
        req.user._id
      );

      res.status(200).json({
        success: true,
        message:
          "All notifications deleted.",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
