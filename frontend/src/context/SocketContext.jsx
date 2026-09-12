import {
  createContext,
  useContext,
  useEffect,
} from "react";

import { toast } from "react-hot-toast";

import socket from "../socket/socket";
import { useAuth } from "./AuthContext";

const SocketContext = createContext();

export const SocketProvider = ({
  children,
}) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    socket.connect();

    socket.emit("register", user._id);

    socket.on(
      "notification",
      (notification) => {
        toast.success(notification.title);
      }
    );

    return () => {
      socket.off("notification");
      socket.disconnect();
    };
  }, [user]);

  return (
    <SocketContext.Provider
      value={{ socket }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () =>
  useContext(SocketContext);