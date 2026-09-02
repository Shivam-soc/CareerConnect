import { FaSortAmountDown } from "react-icons/fa";

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="
        h-11
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        text-sm
        outline-none
        transition
        focus:border-[#2E8B78]
        focus:ring-2
        focus:ring-[#2E8B78]/20
      "
    >
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
      <option value="salary">Highest Salary</option>
    </select>
  );
}

export default SortDropdown;