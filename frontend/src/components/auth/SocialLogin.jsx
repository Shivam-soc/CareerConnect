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
    <div className="space-y-3">
      {/* Google */}

      <button
        onClick={handleGoogleLogin}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-2.5
          text-sm
          font-medium
          text-slate-700
          transition-all
          duration-200
          hover:border-blue-500
          hover:bg-blue-50
        "
      >
        <FaGoogle className="text-red-500 text-lg" />

        Continue with Google
      </button>

      {/* GitHub */}

      <button
        onClick={handleGithubLogin}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-2.5
          text-sm
          font-medium
          text-slate-700
          transition-all
          duration-200
          hover:border-slate-900
          hover:bg-slate-100
        "
      >
        <FaGithub className="text-lg" />

        Continue with GitHub
      </button>
    </div>
  );
}

export default SocialLogin;