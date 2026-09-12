import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import socket from "../socket/socket";
import {
  getNotifications,
  getUnreadCount,
} from "../api/notificationApi";
import { useAuth } from "./AuthContext";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async (page = 1, limit = 20) => {
    if (!user) return null;

    const response = await getNotifications(page, limit);
    setNotifications(response.data.notifications || []);
    return response.data;
  };

  const fetchUnreadCount = async () => {
    if (!user) return 0;

    const response = await getUnreadCount();
    const count = response.data.unreadCount || 0;
    setUnreadCount(count);
    return count;
  };

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setUnreadCount(0);
      setLoading(false);
      return;
    }

    const load = async () => {
      setLoading(true);

      try {
        await Promise.all([
          fetchNotifications(),
          fetchUnreadCount(),
        ]);
      } catch (error) {
        console.error("Unable to load notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user]);

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem("token");
    if (!token) return;

    socket.auth = { token };
    socket.connect();

    const handleNotification = (notification) => {
      setNotifications((previous) =>
        [notification, ...previous].slice(0, 20)
      );
      setUnreadCount((previous) => previous + 1);
      toast.success(notification.title);
    };

    socket.on("notification", handleNotification);

    return () => {
      socket.off("notification", handleNotification);
      socket.disconnect();
    };
  }, [user]);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        loading,
        setNotifications,
        setUnreadCount,
        fetchNotifications,
        fetchUnreadCount,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () =>
  useContext(NotificationContext);
