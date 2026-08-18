function Card({
  children,
  title,
  subtitle,
  action,
  padding = "md",
  hover = false,
  className = "",
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        ${paddings[padding]}
        ${
          hover
            ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            : ""
        }
        ${className}
      `}
    >
      {(title || subtitle || action) && (
        <div className="mb-6 flex items-start justify-between">
          <div>
            {title && (
              <h2 className="text-2xl font-bold text-slate-900">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          {action && (
            <div>
              {action}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default Card;