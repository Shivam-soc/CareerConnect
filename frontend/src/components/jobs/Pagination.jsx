function Pagination() {
  return (

    <div className="mt-12 flex items-center justify-center gap-3">

      <button className="rounded-xl border px-4 py-2 hover:bg-slate-100">
        Previous
      </button>

      <button className="rounded-xl bg-blue-600 px-4 py-2 text-white">
        1
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-slate-100">
        2
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-slate-100">
        3
      </button>

      <button className="rounded-xl border px-4 py-2 hover:bg-slate-100">
        Next
      </button>

    </div>

  );
}

export default Pagination;