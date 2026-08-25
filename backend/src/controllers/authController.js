import {
  registerUser,
  loginUser,
} from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const data = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      ...data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      ...data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};