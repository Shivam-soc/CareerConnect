import api from "./axios";

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const forgotPassword = (email) =>
  api.post("/auth/forgot-password", { email });

export const resetPassword = (token, password) =>
  api.post(`/auth/reset-password/${token}`, { password });

export const getGoogleAuthUrl = () =>
  `${import.meta.env.VITE_API_URL}/auth/google`;

export const getGithubAuthUrl = () =>
  `${import.meta.env.VITE_API_URL}/auth/github`;