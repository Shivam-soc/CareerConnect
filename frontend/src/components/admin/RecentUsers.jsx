import { useEffect, useState } from "react";
import { getAdminDashboard } from "../../api/adminApi";

function RecentUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAdminDashboard();
      setUsers(response.data.dashboard.recentUsers || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Recent Users
      </h2>

      <p className="mt-1 text-slate-500">
        Latest registered users
      </p>

      {loading ? (
        <div className="py-10 text-center text-slate-500">
          Loading...
        </div>
      ) : users.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No users found.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-4"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {user.fullName}
                </h3>

                <p className="text-sm text-slate-500">
                  {user.email}
                </p>
              </div>

              <div className="text-right">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-red-100 text-red-700"
                      : user.role === "recruiter"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {user.role}
                </span>

                <p className="mt-2 text-xs text-slate-400">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentUsers;