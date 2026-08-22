import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Application Updated",
    message: "Google moved your application to the Interview stage.",
    time: "2 hours ago",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Interview Scheduled",
    message: "Adobe interview has been scheduled for tomorrow at 11:00 AM.",
    time: "Yesterday",
    icon: CalendarDays,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 3,
    title: "Application Accepted",
    message: "Congratulations! Qualcomm sent you an offer.",
    time: "2 days ago",
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
];

function Notifications() {
  return (
    <DashboardLayout>

      {/* Header */}

      <section className="mb-6 flex items-start justify-between">

        <div>

          <h1 className="text-3xl font-semibold text-slate-900">
            Notifications
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Stay updated with your applications and interviews.
          </p>

        </div>

        <button
          className="
            rounded-xl
            border
            border-slate-200
            px-5
            py-2.5
            text-sm
            font-medium
            transition
            hover:bg-slate-50
          "
        >
          Mark all as read
        </button>

      </section>

      {/* Notifications */}

      <div className="space-y-5">

        {notifications.map((notification) => {

          const Icon = notification.icon;

          return (

            <div
              key={notification.id}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition
                hover:border-[#2E8B78]
              "
            >

              <div className="flex gap-5">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    ${notification.color}
                  `}
                >
                  <Icon size={20} />
                </div>

                <div className="flex-1">

                  <div className="flex items-start justify-between">

                    <h3 className="text-base font-semibold text-slate-900">
                      {notification.title}
                    </h3>

                    <span className="text-sm text-slate-400">
                      {notification.time}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {notification.message}
                  </p>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </DashboardLayout>
  );
}

export default Notifications;