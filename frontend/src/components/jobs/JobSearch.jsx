import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  ArrowRight,
} from "lucide-react";

function JobSearch({
  search,
  setSearch,
  location,
  setLocation,
  experience,
  setExperience,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[30px] border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
    >
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr_auto]">

        {/* Job Title */}

        <div className="group flex items-center rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-300 hover:border-[#2E8B78] focus-within:border-[#2E8B78] focus-within:ring-4 focus-within:ring-[#2E8B78]/10">

          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7F3]">

            <Search
              size={18}
              className="text-[#2E8B78]"
            />

          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Job title or keyword"
            className="w-full bg-transparent py-4 text-slate-700 placeholder:text-slate-400 outline-none"
          />

        </div>

        {/* Location */}

        <div className="group flex items-center rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-300 hover:border-[#2E8B78] focus-within:border-[#2E8B78] focus-within:ring-4 focus-within:ring-[#2E8B78]/10">

          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7F3]">

            <MapPin
              size={18}
              className="text-[#2E8B78]"
            />

          </div>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full bg-transparent py-4 text-slate-700 placeholder:text-slate-400 outline-none"
          />

        </div>

        {/* Experience */}

        <div className="group flex items-center rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-300 hover:border-[#2E8B78] focus-within:border-[#2E8B78] focus-within:ring-4 focus-within:ring-[#2E8B78]/10">

          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7F3]">

            <Briefcase
              size={18}
              className="text-[#2E8B78]"
            />

          </div>

          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full cursor-pointer bg-transparent py-4 text-slate-700 outline-none"
          >
            <option value="All">All Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-3">1–3 Years</option>
            <option value="3-5">3–5 Years</option>
            <option value="5+">5+ Years</option>
          </select>

        </div>

        {/* Search Button */}

        <button
          type="button"
          className="group inline-flex items-center justify-center rounded-2xl bg-[#2E8B78] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#236D5E] hover:shadow-xl"
        >

          Search

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />

        </button>

      </div>
    </motion.div>
  );
}

export default JobSearch;