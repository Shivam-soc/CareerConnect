import {
  getUserProfile,
  updateUserProfile,
} from "../services/userService.js";

export const getProfile = async (req, res) => {
  try {
    const user = await getUserProfile(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await updateUserProfile(
      req.user._id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};