import User from "../models/User.js";

export const getUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const updateUserProfile = async (userId, data) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  Object.assign(user, data);

  await user.save();

  const userResponse = user.toObject();
  delete userResponse.password;
  return userResponse;
};