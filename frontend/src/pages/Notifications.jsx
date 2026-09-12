import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

import {
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Trash2,
  Check,
  Loader2,
} from "lucide-react";

import { toast } from "react-hot-toast";

import {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications,
} from "../api/notificationApi";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNotifications();
  }, [page]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);

      const response = await getNotifications(page);

      setNotifications(
        response.data.notifications || []
      );

      setTotalPages(
        response.data.totalPages || 1
      );

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to load notifications."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id) => {
    try {
      await markNotificationAsRead(id);

      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? {
                ...notification,
                isRead: true,
              }
            : notification
        )
      );

      toast.success("Marked as read.");

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to mark notification."
      );
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await markAllNotificationsAsRead();

      setNotifications((prev) =>
        prev.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );

      toast.success(
        "All notifications marked as read."
      );

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update notifications."
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNotification(id);

      setNotifications((prev) =>
        prev.filter(
          (notification) =>
            notification._id !== id
        )
      );

      toast.success(
        "Notification deleted."
      );

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to delete notification."
      );
    }
  };

  const handleDeleteAll = async () => {
    try {
      await deleteAllNotifications();

      setNotifications([]);

      toast.success(
        "All notifications deleted."
      );

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to delete notifications."
      );
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "application":
        return Briefcase;

      case "interview":
        return CalendarDays;

      case "job":
        return Briefcase;

      case "company":
        return Bell;

      case "system":
        return Bell;

      default:
        return CheckCircle2;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case "application":
        return "bg-blue-100 text-blue-600";

      case "interview":
        return "bg-amber-100 text-amber-600";

      case "job":
        return "bg-green-100 text-green-600";

      case "company":
        return "bg-purple-100 text-purple-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleString(
      "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  };

   return (
    <DashboardLayout>
      {/* Header */}
      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Notifications
          </h1>

          <p className="mt-2 text-slate-500">
            Stay updated with your applications, interviews and account
            activity.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleMarkAllRead}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-50"
          >
            <Check size={16} />
            Mark All Read
          </button>

          <button
            onClick={handleDeleteAll}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            <Trash2 size={16} />
            Delete All
          </button>
        </div>
      </section>

      {/* Loading */}
      {loading ? (
        <div className="flex h-80 items-center justify-center">
          <Loader2
            size={40}
            className="animate-spin text-[#2E8B78]"
          />
        </div>
      ) : notifications.length === 0 ? (
        /* Empty State */
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center">
          <Bell
            size={60}
            className="mx-auto text-slate-300"
          />

          <h2 className="mt-6 text-2xl font-semibold text-slate-900">
            No Notifications
          </h2>

          <p className="mt-3 text-slate-500">
            You're all caught up.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {notifications.map((notification) => {
              const Icon = getIcon(notification.type);

              return (
                <div
                  key={notification._id}
                  className={`rounded-2xl border bg-white p-6 transition hover:shadow-lg ${
                    notification.isRead
                      ? "border-slate-200"
                      : "border-[#2E8B78]"
                  }`}
                >
                  <div className="flex gap-5">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${getColor(
                        notification.type
                      )}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {notification.title}
                            </h3>

                            {!notification.isRead && (
                              <span className="rounded-full bg-[#2E8B78] px-2 py-1 text-xs font-medium text-white">
                                New
                              </span>
                            )}
                          </div>

                          <p className="mt-2 leading-7 text-slate-600">
                            {notification.message}
                          </p>

                          <p className="mt-3 text-sm text-slate-400">
                            {formatTime(notification.createdAt)}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          {!notification.isRead && (
                            <button
                              onClick={() =>
                                handleMarkRead(notification._id)
                              }
                              className="rounded-lg bg-[#2E8B78] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#236D5E]"
                            >
                              Read
                            </button>
                          )}

                          <button
                            onClick={() =>
                              handleDelete(notification._id)
                            }
                            className="rounded-lg border border-red-200 p-2 text-red-500 transition hover:bg-red-50"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              <span className="font-medium text-slate-700">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </DashboardLayout>
  );
}

export default Notifications; 