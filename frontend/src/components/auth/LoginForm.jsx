import { useState } from "react";
import { Link } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO:
    // Backend Login API
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Welcome Back
        </h2>

        <p className="mt-2 text-slate-500">
          Login to continue your CareerConnect journey.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Email */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              duration-200
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* Password */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="
                text-sm
                text-blue-600
                hover:text-blue-700
                hover:underline
              "
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

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-slate-600">

            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300"
            />

            Remember Me

          </label>

        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-blue-700
            active:scale-[0.99]
          "
        >
          Sign In
        </button>

      </form>

      {/* Divider */}

      <div className="my-6 flex items-center">

        <div className="h-px flex-1 bg-slate-200"></div>

        <span className="mx-4 text-xs uppercase tracking-widest text-slate-400">
          Or continue with
        </span>

        <div className="h-px flex-1 bg-slate-200"></div>

      </div>

      {/* Social */}

      <SocialLogin />

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-slate-500">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="
            font-semibold
            text-blue-600
            hover:text-blue-700
            hover:underline
          "
        >
          Create Account
        </Link>

      </p>

    </div>
  );
}

export default LoginForm;