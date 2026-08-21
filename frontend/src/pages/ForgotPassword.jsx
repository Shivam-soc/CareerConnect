import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    // TODO: Send Reset Link API
  };

  return (
    <AuthLayout width="md">
      <>
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          Career<span className="text-[#2E8B78]">Connect</span>
        </Link>

        <div className="mt-8 mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your registered email address and we'll send you a reset link.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-lg border border-slate-300 px-4 outline-none focus:border-[#2E8B78] focus:ring-2 focus:ring-[#2E8B78]/20"
              required
            />
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-[#2E8B78] text-white font-medium hover:bg-[#236D5E] transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-medium text-[#2E8B78] hover:underline"
          >
            Sign In
          </Link>
        </p>
      </>
    </AuthLayout>
  );
}

export default ForgotPassword;