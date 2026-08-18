function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
}) {
  const variants = {
    primary: "bg-blue-100 text-blue-700",

    success: "bg-green-100 text-green-700",

    warning: "bg-yellow-100 text-yellow-700",

    danger: "bg-red-100 text-red-700",

    info: "bg-cyan-100 text-cyan-700",

    secondary: "bg-slate-100 text-slate-700",

    purple: "bg-violet-100 text-violet-700",

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
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        whitespace-nowrap
        ${rounded ? "rounded-full" : "rounded-lg"}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;