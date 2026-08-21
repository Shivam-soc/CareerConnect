import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

  const variants = {
    primary:
      "bg-[#2E8B78] text-white hover:bg-[#236D5E] shadow-sm",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-[#2E8B78] hover:text-[#2E8B78]",

    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;