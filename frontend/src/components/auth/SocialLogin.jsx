import { FaGoogle, FaGithub } from "react-icons/fa6";
import {
  getGoogleAuthUrl,
  getGithubAuthUrl,
} from "../../api/authApi";

function SocialLogin() {
  const handleGoogleLogin = () => {
    window.location.href = getGoogleAuthUrl();
  };

  const handleGithubLogin = () => {
    window.location.href = getGithubAuthUrl();
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <FaGoogle className="h-4 w-4 text-red-500" />
        <span>Google</span>
      </button>

      <button
        type="button"
        onClick={handleGithubLogin}
        className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        <FaGithub className="h-4 w-4 text-slate-700" />
        <span>GitHub</span>
      </button>
    </div>
  );
}

export default SocialLogin;