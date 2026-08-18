function Loader({
  type = "spinner",
  text = "Loading...",
  size = "md",
  fullScreen = false,
  className = "",
}) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  // ==========================
  // Skeleton Loader
  // ==========================

  if (type === "skeleton") {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-6 w-1/3 rounded bg-slate-200"></div>

        <div className="h-4 w-full rounded bg-slate-200"></div>

        <div className="h-4 w-5/6 rounded bg-slate-200"></div>

        <div className="h-4 w-2/3 rounded bg-slate-200"></div>
      </div>
    );
  }

  // ==========================
  // Spinner
  // ==========================

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">

      <div
        className={`
          animate-spin
          rounded-full
          border-blue-600
          border-t-transparent
          ${sizes[size]}
        `}
      />

      {text && (
        <p className="text-sm font-medium text-slate-500">
          {text}
        </p>
      )}

    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Loader;