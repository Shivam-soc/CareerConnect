import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown, Moon } from "lucide-react";

function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[#F8FAF8]">

      <div className="flex h-16 items-center gap-6 border-b border-slate-200 bg-white px-6">

        {/* Search */}

        <div className="relative flex-1 max-w-2xl">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search jobs, companies..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-11
              pr-4
              text-sm
              outline-none
              transition-all
              duration-200
              focus:border-[#2E8B78]
              focus:bg-white
              focus:ring-2
              focus:ring-[#2E8B78]/10
            "
          />

        </div>

        {/* Right */}

        <div className="ml-auto flex items-center gap-3">

          {/* Dark Mode */}

          <button
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              transition
              hover:bg-slate-50
            "
          >
            <Moon size={18} className="text-slate-600" />
          </button>

          {/* Notification */}

          <Link
            to="/Notifications"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              transition
              hover:bg-slate-50
              hover:border-[#2E8B78]
              hover:text-[#2E8B78]
            "
          >
            <Bell
              size={19}
              className="text-slate-600"
            />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />

          </Link>

          {/* Profile */}

          <button
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-transparent
              px-2
              py-2
              transition
              hover:bg-slate-50
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#E8F7F3]
                font-semibold
                text-[#2E8B78]
              "
            >
              SK
            </div>

            <div className="hidden text-left lg:block">

              <p className="text-sm font-medium text-slate-900">
                Shivam Kumar
              </p>

              <p className="text-xs text-slate-500">
                Student
              </p>

            </div>

            <ChevronDown
              size={16}
              className="hidden text-slate-400 lg:block"
            />

          </button>

        </div>

      </div>

    </header>
  );
}

export default DashboardHeader;