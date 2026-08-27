import api from "./axios";

export const getProfile = () => {
  return api.get("/users/profile");
};

export const updateProfile = (data) => {
  return api.put("/users/profile", data);
};