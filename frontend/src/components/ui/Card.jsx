import clsx from "clsx";

function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  ...props
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-[#2E8B78] hover:shadow-xl",
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;