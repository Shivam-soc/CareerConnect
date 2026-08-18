function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  status,
  onClick,
  className = "",
}) {
  const sizes = {
    sm: {
      avatar: "h-10 w-10",
      text: "text-sm",
      dot: "h-2.5 w-2.5",
    },

    md: {
      avatar: "h-14 w-14",
      text: "text-lg",
      dot: "h-3.5 w-3.5",
    },

    lg: {
      avatar: "h-20 w-20",
      text: "text-2xl",
      dot: "h-4 w-4",
    },
  };

  const initials = name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      onClick={onClick}
      className={`
        relative
        inline-flex
        cursor-pointer
        ${className}
      `}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            rounded-full
            object-cover
            border
            border-slate-200
            ${sizes[size].avatar}
          `}
        />
      ) : (
        <div
          className={`
            flex
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
            font-semibold
            select-none
            ${sizes[size].avatar}
            ${sizes[size].text}
          `}
        >
          {initials}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            rounded-full
            border-2
            border-white
            ${sizes[size].dot}
            ${
              status === "online"
                ? "bg-green-500"
                : "bg-slate-400"
            }
          `}
        />
      )}
    </div>
  );
}

export default Avatar;