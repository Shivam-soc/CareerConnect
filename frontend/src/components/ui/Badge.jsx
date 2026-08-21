import clsx from "clsx";

function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const variants = {
    primary:
      "bg-[#E8F7F3] text-[#2E8B78]",

    success:
      "bg-emerald-100 text-emerald-700",

    warning:
      "bg-amber-100 text-amber-700",

    danger:
      "bg-red-100 text-red-700",

    gray:
      "bg-slate-100 text-slate-600",

    dark:
      "bg-slate-900 text-white",

    outline:
      "border border-slate-300 bg-white text-slate-700",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;