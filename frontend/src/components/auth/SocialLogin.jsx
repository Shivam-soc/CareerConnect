import { FaGithub, FaGoogle } from "react-icons/fa";

function SocialLogin() {
  const handleGoogleLogin = () => {
    console.log("Google Login");
    // TODO: Google OAuth
  };

  const handleGithubLogin = () => {
    console.log("GitHub Login");
    // TODO: GitHub OAuth
  };

  return (
    <div className="mt-8">

      {/* Divider */}

      <div className="relative mb-6">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300" />
        </div>

        <div className="relative flex justify-center">

          <span className="bg-white px-3 text-sm text-slate-500">
            Or continue with
          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-3">

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          onClick={handleGithubLogin}
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <FaGithub />
          GitHub
        </button>

      </div>

    </div>
  );
}

export default SocialLogin;