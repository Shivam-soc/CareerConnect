import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthBanner from "../components/auth/AuthBanner";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    console.log(email);
  };

  return (
    <AuthLayout
      banner={<AuthBanner />}
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md">

        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Forgot Password
        </h2>

        <p className="mt-2 text-slate-500">
          Enter your email and we'll send you a reset link.
        </p>

        {!sent ? (

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
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
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-blue-600
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

            </div>

            <button
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                hover:bg-blue-700
              "
            >
              Send Reset Link
            </button>

          </form>

        ) : (

          <div className="mt-8 rounded-xl bg-green-50 p-6 text-center">

            <div className="text-5xl">
              ✅
            </div>

            <h3 className="mt-3 text-lg font-semibold text-green-700">
              Check your email
            </h3>

            <p className="mt-2 text-sm text-green-600">
              We have sent a password reset link.
            </p>

          </div>

        )}

        <p className="mt-8 text-center text-sm">

          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            ← Back to Login
          </Link>

        </p>

      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;