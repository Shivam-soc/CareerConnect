import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import GitHubStrategy from "passport-github2";

import User from "../models/User.js";


// ======================================================
// Google Strategy
// ======================================================

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT_ID,

      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET,

      callbackURL:
        `${process.env.BACKEND_URL}/api/auth/google/callback`,
    },

    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        const email =
          profile.emails?.[0]?.value;

        if (!email) {
          return done(
            new Error(
              "Google account does not provide an email."
            ),
            null
          );
        }

        const normalizedEmail =
          email.toLowerCase().trim();

        let user =
          await User.findOne({
            email: normalizedEmail,
          });

        if (!user) {
          user =
            await User.create({
              fullName:
                profile.displayName ||
                "Google User",

              email:
                normalizedEmail,

              password: "",

              role: "student",

              authProvider:
                "google",

              providerId:
                String(profile.id),

              avatar:
                profile.photos?.[0]
                  ?.value || "",

              profilePicture:
                profile.photos?.[0]
                  ?.value || "",
            });
        } else {
          user.authProvider =
            "google";

          user.providerId =
            String(profile.id);

          await user.save();
        }

        return done(
          null,
          user
        );
      } catch (error) {
        return done(
          error,
          null
        );
      }
    }
  )
);


// ======================================================
// GitHub Strategy
// ======================================================

passport.use(
  new GitHubStrategy.Strategy(
    {
      clientID:
        process.env.GITHUB_CLIENT_ID,

      clientSecret:
        process.env.GITHUB_CLIENT_SECRET,

      callbackURL:
        `${process.env.BACKEND_URL}/api/auth/github/callback`,

      scope: [
        "user:email",
      ],
    },

    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        const email =
          profile.emails?.[0]?.value;

        if (!email) {
          return done(
            new Error(
              "GitHub account does not provide a verified email."
            ),
            null
          );
        }

        const normalizedEmail =
          email.toLowerCase().trim();

        let user =
          await User.findOne({
            email: normalizedEmail,
          });

        if (!user) {
          user =
            await User.create({
              fullName:
                profile.displayName ||
                profile.username ||
                "GitHub User",

              email:
                normalizedEmail,

              password: "",

              role: "student",

              authProvider:
                "github",

              providerId:
                String(profile.id),

              avatar:
                profile.photos?.[0]
                  ?.value || "",

              profilePicture:
                profile.photos?.[0]
                  ?.value || "",

              socialLinks: {
                github:
                  `https://github.com/${profile.username}`,
              },
            });
        } else {
          user.authProvider =
            "github";

          user.providerId =
            String(profile.id);

          await user.save();
        }

        return done(
          null,
          user
        );
      } catch (error) {
        return done(
          error,
          null
        );
      }
    }
  )
);


export default passport;