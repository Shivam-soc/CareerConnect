import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {

  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

      {/* Previous */}

      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev - 1, 1))
        }
        disabled={currentPage === 1}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E8B78] hover:text-[#2E8B78] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Pages */}

      {pages.map((page) => (

        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl font-semibold transition-all duration-300 ${
            currentPage === page
              ? "bg-[#2E8B78] text-white shadow-lg shadow-[#2E8B78]/20"
              : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-[#2E8B78] hover:text-[#2E8B78] hover:shadow-md"
          }`}
        >
          {page}
        </button>

      ))}

      {/* Next */}

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
        disabled={currentPage === totalPages}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E8B78] hover:text-[#2E8B78] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}

export default Pagination;