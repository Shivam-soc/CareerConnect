import express from "express";
import jwt from "jsonwebtoken";
import passport from "../config/passport.js";

import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

// ===============================
// Normal Authentication
// ===============================

router.post("/register", register);
router.post("/login", login);

// ===============================
// Google OAuth
// ===============================

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login?oauth=failed`,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
        role: req.user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.redirect(
      `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
    );
  }
);

// ===============================
// GitHub OAuth
// ===============================

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
    session: false,
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login?oauth=failed`,
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user._id,
        role: req.user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.redirect(
      `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
    );
  }
);

// ===============================
// Password Reset
// ===============================

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;