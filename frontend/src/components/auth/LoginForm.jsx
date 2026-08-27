import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { loginUser } from "../../api/authApi";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      // Backend returns:
      // {
      //   success,
      //   message,
      //   data: {
      //      token,
      //      user
      //   }
      // }

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "student") {
        navigate("/dashboard");
      } else if (user.role === "recruiter") {
        navigate("/recruiter/dashboard");
      } else if (user.role === "admin") {
        navigate("/admin/dashboard");
      }

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link
        to="/"
        className="text-2xl font-bold text-slate-900"
      >
        Career<span className="text-[#2E8B78]">Connect</span>
      </Link>

      <div className="mt-10 mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-500">
          Please enter your details to sign in.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              h-12
              w-full
              rounded-lg
              border
              border-slate-300
              px-4
              outline-none
              transition
              focus:border-[#2E8B78]
              focus:ring-2
              focus:ring-[#2E8B78]/20
            "
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-[#2E8B78] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="accent-[#2E8B78]"
          />

          Remember me
        </label>

        <button
          type="submit"
          disabled={loading}
          className="
            h-12
            w-full
            rounded-lg
            bg-[#2E8B78]
            font-medium
            text-white
            transition
            hover:bg-[#236D5E]
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-[#2E8B78] hover:underline"
        >
          Create Account
        </Link>
      </p>
    </>
  );
}

export default LoginForm;