import api from "./axios";

// ======================================
// Get All Notifications
// GET /api/notifications
// ======================================
export const getNotifications = (
  page = 1,
  limit = 20
) => {
  return api.get("/notifications", {
    params: {
      page,
      limit,
    },
  });
};

// ======================================
// Get Unread Notification Count
// GET /api/notifications/unread-count
// ======================================
export const getUnreadCount = () => {
  return api.get("/notifications/unread-count");
};

// ======================================
// Mark One Notification as Read
// PUT /api/notifications/:id/read
// ======================================
export const markNotificationAsRead = (id) => {
  return api.put(`/notifications/${id}/read`);
};

// ======================================
// Mark All Notifications as Read
// PUT /api/notifications/read-all
// ======================================
export const markAllNotificationsAsRead = () => {
  return api.put("/notifications/read-all");
};

// ======================================
// Delete One Notification
// DELETE /api/notifications/:id
// ======================================
export const deleteNotification = (id) => {
  return api.delete(`/notifications/${id}`);
};

// ======================================
// Delete All Notifications
// DELETE /api/notifications
// ======================================
export const deleteAllNotifications = () => {
  return api.delete("/notifications");
};