import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  icon,
  rightIcon,
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className={`w-full ${className}`}>

      {/* Label */}

      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {/* Input */}

      <div className="relative">

        {/* Left Icon */}

        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full
            rounded-xl
            border
            px-4
            py-3
            text-slate-700
            outline-none
            transition-all
            duration-200
            placeholder:text-slate-400

            ${
              icon
                ? "pl-12"
                : ""
            }

            ${
              type === "password" || rightIcon
                ? "pr-12"
                : ""
            }

            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }

            ${
              disabled
                ? "cursor-not-allowed bg-slate-100"
                : "bg-white"
            }
          `}
        />

        {/* Password Toggle */}

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? (
              <FaEyeSlash />
            ) : (
              <FaEye />
            )}
          </button>
        )}

        {/* Right Icon */}

        {rightIcon && type !== "password" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {rightIcon}
          </div>
        )}

      </div>

      {/* Error */}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Helper */}

      {!error && helperText && (
        <p className="mt-2 text-sm text-slate-500">
          {helperText}
        </p>
      )}

    </div>
  );
}

export default Input;