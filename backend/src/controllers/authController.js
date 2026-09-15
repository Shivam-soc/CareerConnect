import {
  registerUser,
  loginUser,
  googleLoginService,
  githubLoginService,
  forgotPasswordService,
  resetPasswordService,
} from "../services/authService.js";


// ======================================
// Register
// ======================================

export const register = async (
  req,
  res
) => {
  try {
    const data =
      await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message:
        "Registration successful.",
      ...data,
    });
  } catch (error) {
    console.error(
      "Register Error:",
      error.message
    );

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// ======================================
// Login
// ======================================

export const login = async (
  req,
  res
) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const data =
      await loginUser(
        email,
        password
      );

    return res.status(200).json({
      success: true,
      message:
        "Login successful.",
      ...data,
    });
  } catch (error) {
    console.error(
      "Login Error:",
      error.message
    );

    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};


// ======================================
// Google Login
// ======================================

export const googleLogin =
  async (req, res) => {
    try {
      const data =
        await googleLoginService(
          req.body
        );

      return res.status(200).json({
        success: true,
        message:
          "Google login successful.",
        ...data,
      });
    } catch (error) {
      console.error(
        "Google Login Error:",
        error.message
      );

      return res.status(401).json({
        success: false,
        message:
          error.message ||
          "Google login failed.",
      });
    }
  };


// ======================================
// GitHub Login
// ======================================

export const githubLogin =
  async (req, res) => {
    try {
      const data =
        await githubLoginService(
          req.body
        );

      return res.status(200).json({
        success: true,
        message:
          "GitHub login successful.",
        ...data,
      });
    } catch (error) {
      console.error(
        "GitHub Login Error:",
        error.message
      );

      return res.status(401).json({
        success: false,
        message:
          error.message ||
          "GitHub login failed.",
      });
    }
  };


// ======================================
// Forgot Password
// ======================================

export const forgotPassword =
  async (req, res) => {
    try {
      const { email } =
        req.body;

      await forgotPasswordService(
        email
      );

      return res.status(200).json({
        success: true,
        message:
          "Password reset link has been sent to your email.",
      });
    } catch (error) {
      console.error(
        "Forgot Password Error:",
        error.message
      );

      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };


// ======================================
// Reset Password
// ======================================

export const resetPassword =
  async (req, res) => {
    try {
      const { token } =
        req.params;

      const { password } =
        req.body;

      await resetPasswordService(
        token,
        password
      );

      return res.status(200).json({
        success: true,
        message:
          "Password has been reset successfully.",
      });
    } catch (error) {
      console.error(
        "Reset Password Error:",
        error.message
      );

      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };