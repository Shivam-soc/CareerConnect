import { useState } from "react";
import { Link } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(formData);

    // TODO:
    // Register API
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md">

      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Create Account
        </h2>

        <p className="mt-2 text-slate-500">
          Join CareerConnect and discover amazing opportunities.
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Name */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
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

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <PasswordInput
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

        </div>

        {/* Confirm Password */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600">

          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded"
          />

          <span>
            I agree to the{" "}

            <Link
              to="/terms"
              className="font-medium text-blue-600 hover:underline"
            >
              Terms of Service
            </Link>{" "}

            and{" "}

            <Link
              to="/privacy"
              className="font-medium text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>

          </span>

        </label>

        {/* Button */}

        <button
          type="submit"
          disabled={!formData.agree}
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
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Create Account
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

      <SocialLogin />

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-slate-500">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign In
        </Link>

      </p>

    </div>
  );
}

export default RegisterForm;