import Notification from "../models/Notification.js";
import { emitNotification } from "../socket/socket.js";

// ======================================
// Create Notification
// ======================================
export const createNotification = async ({
  user,
  title,
  message,
  type = "system",
  link = "",
  metadata = {},
}) => {
  const notification = await Notification.create({
    user,
    title,
    message,
    type,
    link,
    metadata,
  });

  const populatedNotification =
    await Notification.findById(notification._id)
      .populate(
        "user",
        "fullName email profilePicture"
      );

  // Send notification instantly if user is online
  emitNotification(
    user.toString(),
    populatedNotification
  );

  return populatedNotification;
};

// ======================================
// Get User Notifications
// ======================================
export const getUserNotifications = async (
  userId,
  page = 1,
  limit = 20
) => {
  const skip = (page - 1) * limit;

  const notifications =
    await Notification.find({
      user: userId,
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

  const total =
    await Notification.countDocuments({
      user: userId,
    });

  return {
    notifications,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  };
};

// ======================================
// Get Unread Count
// ======================================
export const getUnreadCount = async (
  userId
) => {
  return await Notification.countDocuments({
    user: userId,
    isRead: false,
  });
};

// ======================================
// Mark One Notification As Read
// ======================================
export const markAsRead = async (
  notificationId,
  userId
) => {
  const notification =
    await Notification.findOneAndUpdate(
      {
        _id: notificationId,
        user: userId,
      },
      {
        isRead: true,
      },
      {
        new: true,
      }
    );

  if (!notification) {
    throw new Error(
      "Notification not found"
    );
  }

  return notification;
};

// ======================================
// Mark All Notifications As Read
// ======================================
export const markAllAsRead = async (
  userId
) => {
  await Notification.updateMany(
    {
      user: userId,
      isRead: false,
    },
    {
      isRead: true,
    }
  );

  return true;
};

// ======================================
// Delete One Notification
// ======================================
export const deleteNotification =
  async (
    notificationId,
    userId
  ) => {
    const notification =
      await Notification.findOneAndDelete({
        _id: notificationId,
        user: userId,
      });

    if (!notification) {
      throw new Error(
        "Notification not found"
      );
    }

    return notification;
  };

// ======================================
// Delete All Notifications
// ======================================
export const deleteAllNotifications =
  async (userId) => {
    await Notification.deleteMany({
      user: userId,
    });

    return true;
  };