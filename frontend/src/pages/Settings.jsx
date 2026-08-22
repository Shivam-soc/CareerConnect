import DashboardLayout from "../components/layout/DashboardLayout";
import { Moon, ShieldCheck, Bell, Trash2 } from "lucide-react";

function Settings() {
  return (
    <DashboardLayout>

      {/* Header */}

      <section className="mb-6 flex items-start justify-between">

        <div>

          <h1 className="text-3xl font-semibold text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your account, preferences and security.
          </p>

        </div>

        <button
          className="
            rounded-xl
            bg-[#2E8B78]
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          Save Changes
        </button>

      </section>

      {/* Account */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Account Information
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <input
              defaultValue="Alex Carter"
              className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#2E8B78]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              defaultValue="alex.carter@example.com"
              className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#2E8B78]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone
            </label>

            <input
              defaultValue="+91 9876543210"
              className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#2E8B78]"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Location
            </label>

            <input
              defaultValue="Bangalore, India"
              className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#2E8B78]"
            />

          </div>

        </div>

      </section>

      {/* Security */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <ShieldCheck
            size={20}
            className="text-[#2E8B78]"
          />

          <h2 className="text-lg font-semibold text-slate-900">
            Security
          </h2>

        </div>

        <div className="mt-6 space-y-4">

          <button className="w-full rounded-xl border border-slate-200 px-5 py-3 text-left transition hover:bg-slate-50">
            Change Password
          </button>

          <button className="w-full rounded-xl border border-slate-200 px-5 py-3 text-left transition hover:bg-slate-50">
            Enable Two-Factor Authentication
          </button>

        </div>

      </section>

      {/* Preferences */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <Bell
            size={20}
            className="text-[#2E8B78]"
          />

          <h2 className="text-lg font-semibold text-slate-900">
            Preferences
          </h2>

        </div>

        <div className="mt-6 space-y-5">

          <div className="flex items-center justify-between">

            <span className="text-slate-700">
              Email Notifications
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-[#2E8B78]"
            />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-700">
              Interview Reminders
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-[#2E8B78]"
            />

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-700">
              Application Updates
            </span>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-[#2E8B78]"
            />

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Moon
                size={18}
                className="text-slate-500"
              />

              <span className="text-slate-700">
                Dark Mode
              </span>

            </div>

            <input
              type="checkbox"
              className="h-5 w-5 accent-[#2E8B78]"
            />

          </div>

        </div>

      </section>

      {/* Danger Zone */}

      <section className="mt-6 rounded-2xl border border-red-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <Trash2
            size={20}
            className="text-red-500"
          />

          <h2 className="text-lg font-semibold text-red-600">
            Danger Zone
          </h2>

        </div>

        <p className="mt-2 text-sm text-slate-500">
          These actions are permanent and cannot be undone.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">

          <button
            className="
              rounded-xl
              border
              border-red-300
              px-5
              py-3
              text-sm
              font-medium
              text-red-600
              transition
              hover:bg-red-50
            "
          >
            Logout from All Devices
          </button>

          <button
            className="
              rounded-xl
              bg-red-600
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition
              hover:bg-red-700
            "
          >
            Delete Account
          </button>

        </div>

      </section>

    </DashboardLayout>
  );
}

export default Settings;