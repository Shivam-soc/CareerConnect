import bcrypt from "bcryptjs";
import crypto from "crypto";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

// =============================
// Register User
// =============================
export const registerUser = async (userData) => {
  const {
    fullName,
    email,
    password,
    role = "student",
  } = userData;

  if (!fullName || !email || !password) {
    throw new Error("All fields are required.");
  }

  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const allowedRoles = [
    "student",
    "recruiter",
    "admin",
  ];

  if (!allowedRoles.includes(role)) {
    throw new Error("Invalid role.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName: fullName.trim(),
    email: email.toLowerCase(),
    password: hashedPassword,
    role,
  });

  const token = generateToken(user._id, user.role);

  const userResponse = user.toObject();
  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};

// =============================
// Login User
// =============================
export const loginUser = async (
  email,
  password
) => {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  const token = generateToken(user._id, user.role);

  const userResponse = user.toObject();
  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};

// =============================
// Forgot Password
// =============================
export const forgotPasswordService = async (email) => {
  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  if (!user) {
    throw new Error("No account found with this email.");
  }

  const resetToken = crypto.randomBytes(32).toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  await user.save();

  const resetUrl =
    `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await sendEmail({
    to: user.email,
    subject: "CareerConnect Password Reset",
    html: `
      <h2>Password Reset</h2>

      <p>Hello ${user.fullName},</p>

      <p>Click the button below to reset your password.</p>

      <a href="${resetUrl}"
         style="
           display:inline-block;
           background:#2E8B78;
           color:white;
           padding:12px 22px;
           text-decoration:none;
           border-radius:8px;
           font-weight:bold;
         ">
         Reset Password
      </a>

      <p>This link will expire in 15 minutes.</p>

      <p>If you didn't request this, simply ignore this email.</p>
    `,
  });
};

// =============================
// Reset Password
// =============================
export const resetPasswordService = async (
  token,
  password
) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    throw new Error("Reset link is invalid or has expired.");
  }

  user.password = await bcrypt.hash(password, 10);

  user.resetPasswordToken = "";
  user.resetPasswordExpire = null;

  await user.save();
};