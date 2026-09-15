import bcrypt from "bcryptjs";
import crypto from "crypto";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

// ======================================================
// Helper
// ======================================================

const createAuthResponse = (user) => {
  const token = generateToken(user._id, user.role);

  const userResponse = user.toObject();

  delete userResponse.password;
  delete userResponse.resetPasswordToken;
  delete userResponse.resetPasswordExpire;

  return {
    token,
    user: userResponse,
  };
};


// ======================================================
// Register User
// ======================================================

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

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await User.findOne({
    email: normalizedEmail,
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

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = await User.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    role,
    authProvider: "local",
  });

  return createAuthResponse(user);
};


// ======================================================
// Login User
// ======================================================

export const loginUser = async (
  email,
  password
) => {
  if (!email || !password) {
    throw new Error(
      "Email and password are required."
    );
  }

  const normalizedEmail = email.toLowerCase().trim();

  const user = await User.findOne({
    email: normalizedEmail,
  });

  if (!user) {
    throw new Error(
      "Invalid email or password."
    );
  }

  // OAuth-only account
  if (!user.password) {
    throw new Error(
      `This account uses ${user.authProvider} login. Please continue with ${user.authProvider}.`
    );
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error(
      "Invalid email or password."
    );
  }

  return createAuthResponse(user);
};


// ======================================================
// Google OAuth
// ======================================================

export const googleLoginService = async (
  profile
) => {
  const {
    id,
    displayName,
    email,
    photos,
  } = profile;

  if (!id || !email) {
    throw new Error(
      "Unable to retrieve Google account information."
    );
  }

  const normalizedEmail =
    email.toLowerCase().trim();

  let user = await User.findOne({
    email: normalizedEmail,
  });

  if (!user) {
    user = await User.create({
      fullName:
        displayName || "Google User",

      email: normalizedEmail,

      password: "",

      role: "student",

      authProvider: "google",

      providerId: String(id),

      avatar:
        photos?.[0]?.value || "",

      profilePicture:
        photos?.[0]?.value || "",
    });
  } else {
    user.authProvider = "google";
    user.providerId = String(id);

    if (
      photos?.[0]?.value &&
      !user.profilePicture
    ) {
      user.profilePicture =
        photos[0].value;
    }

    await user.save();
  }

  return createAuthResponse(user);
};


// ======================================================
// GitHub OAuth
// ======================================================

export const githubLoginService = async (
  profile
) => {
  const {
    id,
    displayName,
    username,
    email,
    photos,
  } = profile;

  if (!id || !email) {
    throw new Error(
      "Unable to retrieve GitHub account information."
    );
  }

  const normalizedEmail =
    email.toLowerCase().trim();

  let user = await User.findOne({
    email: normalizedEmail,
  });

  const avatar =
    photos?.[0]?.value || "";

  if (!user) {
    user = await User.create({
      fullName:
        displayName ||
        username ||
        "GitHub User",

      email: normalizedEmail,

      password: "",

      role: "student",

      authProvider: "github",

      providerId: String(id),

      avatar,

      profilePicture: avatar,

      socialLinks: {
        github: `https://github.com/${username}`,
      },
    });
  } else {
    user.authProvider = "github";
    user.providerId = String(id);

    if (avatar && !user.profilePicture) {
      user.profilePicture = avatar;
    }

    if (
      username &&
      !user.socialLinks?.github
    ) {
      user.socialLinks.github =
        `https://github.com/${username}`;
    }

    await user.save();
  }

  return createAuthResponse(user);
};


// ======================================================
// Forgot Password
// ======================================================

export const forgotPasswordService =
  async (email) => {
    if (!email) {
      throw new Error(
        "Email is required."
      );
    }

    const normalizedEmail =
      email.toLowerCase().trim();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      throw new Error(
        "No account found with this email."
      );
    }

    if (!user.password) {
      throw new Error(
        `This account uses ${user.authProvider} login. Password reset is not available for this account.`
      );
    }

    const resetToken =
      crypto.randomBytes(32).toString("hex");

    const hashedToken =
      crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    user.resetPasswordToken =
      hashedToken;

    user.resetPasswordExpire =
      Date.now() +
      15 * 60 * 1000;

    await user.save();

    const frontendUrl =
      process.env.FRONTEND_URL;

    if (!frontendUrl) {
      throw new Error(
        "FRONTEND_URL is not configured."
      );
    }

    const resetUrl =
      `${frontendUrl}/reset-password/${resetToken}`;

    await sendEmail({
      to: user.email,

      subject:
        "CareerConnect Password Reset",

      html: `
        <!DOCTYPE html>
        <html>
          <body style="
            margin:0;
            padding:0;
            background:#f8faf8;
            font-family:Arial,sans-serif;
          ">

            <div style="
              max-width:600px;
              margin:40px auto;
              background:white;
              border-radius:16px;
              padding:40px;
              border:1px solid #e5e7eb;
            ">

              <h2 style="
                color:#111827;
                margin-bottom:10px;
              ">
                Reset your CareerConnect password
              </h2>

              <p style="
                color:#6b7280;
                line-height:1.6;
              ">
                Hello ${user.fullName},
              </p>

              <p style="
                color:#6b7280;
                line-height:1.6;
              ">
                We received a request to reset
                your CareerConnect password.
              </p>

              <a
                href="${resetUrl}"
                style="
                  display:inline-block;
                  margin:20px 0;
                  background:#2e8b78;
                  color:white;
                  padding:13px 24px;
                  text-decoration:none;
                  border-radius:8px;
                  font-weight:bold;
                "
              >
                Reset Password
              </a>

              <p style="
                color:#6b7280;
                line-height:1.6;
              ">
                This link will expire in
                <strong>15 minutes</strong>.
              </p>

              <p style="
                color:#9ca3af;
                font-size:13px;
              ">
                If you didn't request this,
                you can safely ignore this email.
              </p>

            </div>

          </body>
        </html>
      `,
    });
  };


// ======================================================
// Reset Password
// ======================================================

export const resetPasswordService =
  async (
    token,
    password
  ) => {
    if (!token || !password) {
      throw new Error(
        "Token and password are required."
      );
    }

    if (password.length < 6) {
      throw new Error(
        "Password must be at least 6 characters."
      );
    }

    const hashedToken =
      crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    const user =
      await User.findOne({
        resetPasswordToken:
          hashedToken,

        resetPasswordExpire: {
          $gt: Date.now(),
        },
      });

    if (!user) {
      throw new Error(
        "Reset link is invalid or has expired."
      );
    }

    user.password =
      await bcrypt.hash(
        password,
        10
      );

    user.authProvider = "local";

    user.resetPasswordToken = "";
    user.resetPasswordExpire = null;

    await user.save();
  };