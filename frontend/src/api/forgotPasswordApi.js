import api from "./axios";

export const forgotPassword = (email) => {
  return api.post("/auth/forgot-password", {
    email,
  });
};

export const resetPassword = (token, password) => {
  return api.post(`/auth/reset-password/${token}`, {
    password,
  });
};