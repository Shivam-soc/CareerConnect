import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { registerUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

function RegisterForm() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      toast.success(`Welcome to CareerConnect, ${user.fullName}!`);

      switch (user.role) {
        case "student":
          navigate("/dashboard", { replace: true });
          break;

        case "recruiter":
          navigate("/recruiter/dashboard", { replace: true });
          break;

        case "admin":
          navigate("/admin/dashboard", { replace: true });
          break;

        default:
          navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Logo */}

      <Link
        to="/"
        className="text-2xl font-bold text-slate-900"
      >
        Career
        <span className="text-[#2E8B78]">
          Connect
        </span>
      </Link>

      {/* Heading */}

      <div className="mt-8 mb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="mt-2 text-slate-500">
          Create your account to start your journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Name & Email */}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-[#2E8B78] focus:ring-2 focus:ring-[#2E8B78]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none transition focus:border-[#2E8B78] focus:ring-2 focus:ring-[#2E8B78]/20"
            />
          </div>
        </div>

        {/* Password */}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <PasswordInput
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <PasswordInput
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {/* Role */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Account Type
          </label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  role: "student",
                }))
              }
              className={`h-12 rounded-lg border transition ${
                formData.role === "student"
                  ? "border-[#2E8B78] bg-[#2E8B78] text-white"
                  : "border-slate-300"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  role: "recruiter",
                }))
              }
              className={`h-12 rounded-lg border transition ${
                formData.role === "recruiter"
                  ? "border-[#2E8B78] bg-[#2E8B78] text-white"
                  : "border-slate-300"
              }`}
            >
              Recruiter
            </button>
          </div>
        </div>

        {/* Terms */}

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-[#2E8B78]"
          />

          I agree to the

          <Link
            to="/terms"
            className="text-[#2E8B78] hover:underline"
          >
            Terms
          </Link>
        </label>

        {/* Submit */}

        <button
          type="submit"
          disabled={!formData.agree || loading}
          className="h-12 w-full rounded-lg bg-[#2E8B78] font-medium text-white transition hover:bg-[#236D5E] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-[#2E8B78] hover:underline"
        >
          Sign In
        </Link>
      </p>
    </>
  );
}

export default RegisterForm;
