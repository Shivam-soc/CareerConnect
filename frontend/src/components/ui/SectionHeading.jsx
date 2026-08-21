import clsx from "clsx";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "mb-14",
        align === "center"
          ? "text-center max-w-3xl mx-auto"
          : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E8B78]">
            {eyebrow}
          </p>
        )}

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="mt-6 md:mt-0">
          {action}
        </div>
      )}
    </div>
  );
}

export default SectionHeading;