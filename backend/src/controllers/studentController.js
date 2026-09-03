import { getStudentDashboard } from "../services/studentService.js";

export const dashboard = async (req, res) => {
  try {
    const data = await getStudentDashboard(req.user._id);

    res.status(200).json({
      success: true,
      dashboard: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};