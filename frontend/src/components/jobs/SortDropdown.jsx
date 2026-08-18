import { FaSortAmountDown } from "react-icons/fa";

function SortDropdown() {
  return (
    <div className="flex items-center gap-3">
      <FaSortAmountDown className="text-slate-500" />

      <select className="rounded-xl border border-slate-200 bg-white px-4 py-2 outline-none focus:border-blue-600">
        <option>Most Relevant</option>
        <option>Newest</option>
        <option>Highest Salary</option>
        <option>Recently Posted</option>
        <option>Highest Salary</option>
      </select>
    </div>
  );
}

export default SortDropdown;