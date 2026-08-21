import clsx from "clsx";

function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "flex h-12 items-center rounded-2xl border border-slate-200 bg-white px-4 transition-all duration-300",
          "focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100",
          error && "border-red-500 focus-within:ring-red-100"
        )}
      >
        {leftIcon && (
          <span className="mr-3 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          className={clsx(
            "h-full w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="ml-3 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;