import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

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

  // Validation
  if (!fullName || !email || !password) {
    throw new Error("All fields are required.");
  }

  // Check if email already exists
  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  // Allowed roles
  const allowedRoles = [
    "student",
    "recruiter",
    "admin",
  ];

  if (!allowedRoles.includes(role)) {
    throw new Error("Invalid role.");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName: fullName.trim(),
    email: email.toLowerCase(),
    password: hashedPassword,
    role,
  });

  // Generate JWT
  const token = generateToken(user._id, user.role);

  // Remove password
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