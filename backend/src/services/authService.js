import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// =============================
// Register User
// =============================
export const registerUser = async (userData) => {
  const { fullName, email, password, role } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    role,
  });

  // Generate JWT
  const token = generateToken(user._id, user.role);

  // Remove password before sending response
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
export const loginUser = async (email, password) => {
  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = generateToken(user._id, user.role);

  // Remove password before sending response
  const userResponse = user.toObject();
  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};