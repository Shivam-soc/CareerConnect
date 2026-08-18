import {
  FaBell,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

function DashboardHeader() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome Back, Shivam 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening with your career today.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative hidden lg:block">

          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search jobs..."
            className="
              w-72
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              py-3
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            transition
            hover:bg-slate-100
          "
        >

          <FaBell className="text-slate-700" />

          <span
            className="
              absolute
              right-3
              top-3
              h-2.5
              w-2.5
              rounded-full
              bg-red-500
            "
          ></span>

        </button>

        {/* Profile */}

        <button
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-slate-200
            bg-white
            px-3
            py-2
            transition
            hover:bg-slate-100
          "
        >

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden text-left lg:block">

            <p className="font-semibold text-slate-900">
              Shivam Kumar
            </p>

            <p className="text-xs text-slate-500">
              Student
            </p>

          </div>

          <FaChevronDown
            className="hidden text-slate-500 lg:block"
          />

        </button>

      </div>

    </header>
  );
}

export default DashboardHeader;