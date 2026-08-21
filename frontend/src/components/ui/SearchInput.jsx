import { FiSearch } from "react-icons/fi";
import clsx from "clsx";

function SearchInput({
  value,
  onChange,
  placeholder = "Search jobs, companies or skills...",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex h-16 w-full items-center rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-all duration-300",
        "focus-within:border-[#2E8B78] focus-within:ring-4 focus-within:ring-[#2E8B78]/10",
        className
      )}
    >
      <FiSearch
        size={22}
        className="mr-4 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-base text-slate-800 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}

export default SearchInput;