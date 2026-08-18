import { FaInbox } from "react-icons/fa";
import Button from "./Button";

function EmptyState({
  icon,
  title = "Nothing Here",
  description = "There's nothing to display right now.",
  actionText,
  onAction,
  className = "",
}) {
  const Icon = icon || FaInbox;

  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-8
        py-14
        text-center
        ${className}
      `}
    >
      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-slate-100
          text-3xl
          text-slate-500
        "
      >
        <Icon />
      </div>

      {/* Title */}

      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>

      {/* Action */}

      {actionText && (
        <div className="mt-8">
          <Button onClick={onAction}>
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;