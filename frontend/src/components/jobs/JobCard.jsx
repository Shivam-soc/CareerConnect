import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Clock3,
  Briefcase,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

function JobCard({ job }) {
  if (!job) return null;

  const {
    id,
    title,
    company,
    logo,
    location,
    salary,
    type,
    experience,
    posted,
    skills = [],
    featured,
  } = job;

  return (
    <Link
      to={`/jobs/${id}`}
      className="group block h-full"
    >
      <Card
        className="flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78]/40 hover:shadow-xl"
      >

        {/* Top */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition group-hover:scale-105">

              <img
                src={logo}
                alt={company}
                className="h-8 w-8 object-contain"
              />

            </div>

            <div>

              <p className="font-semibold text-slate-900">
                {company}
              </p>

              <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">

                <Clock3 size={14} />

                {posted}

              </div>

            </div>

          </div>

          {featured && (
            <Badge
              variant="primary"
              size="sm"
            >
              Featured
            </Badge>
          )}

        </div>

        {/* Title */}

        <h3 className="mt-6 line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-[#2E8B78]">

          {title}

        </h3>

        {/* Meta */}

        <div className="mt-5 flex flex-wrap gap-2">

          <Badge
            variant="gray"
            size="sm"
          >
            <MapPin size={14} />
            {location}
          </Badge>

          <Badge
            variant="gray"
            size="sm"
          >
            <Briefcase size={14} />
            {experience}
          </Badge>

          <Badge
            variant="gray"
            size="sm"
          >
            {type}
          </Badge>

        </div>

        {/* Salary */}

        <div className="mt-5">

          <span className="rounded-full bg-[#E8F7F3] px-4 py-2 text-base font-bold text-[#2E8B78]">

            {salary}

          </span>

        </div>

        {/* Skills */}

        <div className="mt-5 flex flex-wrap gap-2">

          {skills.slice(0, 3).map((skill) => (

            <Badge
              key={skill}
              variant="gray"
              size="sm"
            >
              {skill}
            </Badge>

          ))}

        </div>

        {/* Spacer */}

        <div className="flex-1" />

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

          <span className="text-sm text-slate-500">

            Apply before closing

          </span>

          <span className="flex items-center gap-2 font-semibold text-[#2E8B78]">

            Apply

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </span>

        </div>

      </Card>
    </Link>
  );
}

export default JobCard;