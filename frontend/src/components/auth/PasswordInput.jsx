import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordInput({
  value,
  onChange,
  name = "password",
  placeholder = "Enter your password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="current-password"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          pr-12
          text-sm
          text-slate-800
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-100
        "
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition
          hover:text-slate-700
        "
      >
        {showPassword ? (
          <FiEyeOff size={18} />
        ) : (
          <FiEye size={18} />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;