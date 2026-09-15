import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const token = params.get("token");

    if (!token) {
      navigate(
        "/login?oauth=failed",
        {
          replace: true,
        }
      );

      return;
    }

    // Save JWT
    localStorage.setItem(
      "token",
      token
    );

    // Remove token from browser URL
    window.history.replaceState(
      {},
      document.title,
      "/oauth-success"
    );

    // We will determine the user's role
    // from the JWT.
    try {
      const payload =
        JSON.parse(
          atob(
            token.split(".")[1]
          )
        );

      const role =
        payload.role;

      if (role === "recruiter") {
        navigate(
          "/recruiter/dashboard",
          {
            replace: true,
          }
        );
      } else if (role === "admin") {
        navigate(
          "/admin/dashboard",
          {
            replace: true,
          }
        );
      } else {
        navigate(
          "/dashboard",
          {
            replace: true,
          }
        );
      }
    } catch (error) {
      console.error(
        "OAuth token error:",
        error
      );

      localStorage.removeItem(
        "token"
      );

      navigate(
        "/login?oauth=failed",
        {
          replace: true,
        }
      );
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAF8] px-6">
      <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <div className="h-7 w-7 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600" />
        </div>

        <h1 className="mt-6 text-xl font-bold text-slate-900">
          Signing you in
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Please wait while we complete your
          authentication.
        </p>
      </div>
    </div>
  );
}

export default OAuthSuccess;