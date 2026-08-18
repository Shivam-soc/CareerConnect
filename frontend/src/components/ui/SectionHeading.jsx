import Button from "./Button";

function SectionHeading({
  title,
  subtitle,
  actionText,
  onAction,
  action,
  className = "",
}) {
  return (
    <div
      className={`mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between ${className}`}
    >
      {/* Left */}

      <div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {action}

        {actionText && (
          <Button
            variant="primary"
            onClick={onAction}
          >
            {actionText}
          </Button>
        )}

      </div>

    </div>
  );
}

export default SectionHeading;