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

  user.fullName = data.fullName;
  user.phone = data.phone;
  user.location = data.location;
  user.headline = data.headline;
  user.bio = data.bio;

  user.skills = data.skills || [];
  user.education = data.education || [];
  user.experience = data.experience || [];
  user.projects = data.projects || [];
  user.certifications = data.certifications || [];

  user.socialLinks = data.socialLinks || {
    github: "",
    linkedin: "",
    portfolio: "",
    leetcode: "",
    geeksforgeeks: "",
  };

  user.resume = data.resume || "";
  user.profilePicture = data.profilePicture || "";
  user.coverPhoto = data.coverPhoto || "";

  await user.save();

  return await User.findById(userId).select("-password");
};