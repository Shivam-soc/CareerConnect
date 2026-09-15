import { FaGoogle, FaGithub } from "react-icons/fa6";
import {
  getGoogleAuthUrl,
  getGithubAuthUrl,
} from "../../api/authApi";

function SocialLogin() {
  const handleGoogleLogin = () => {
    console.log("Google button clicked");
    console.log("Google URL:", getGoogleAuthUrl());

    window.location.href = getGoogleAuthUrl();
  };

  const handleGithubLogin = () => {
    console.log("GitHub button clicked");
    console.log("GitHub URL:", getGithubAuthUrl());

    window.location.href = getGithubAuthUrl();
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <FaGoogle className="h-5 w-5" />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={handleGithubLogin}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <FaGithub className="h-5 w-5" />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
}

export default SocialLogin;