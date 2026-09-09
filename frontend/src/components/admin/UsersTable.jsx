import UserRow from "./UserRow";

function UsersTable({
  users,
  loading,
  refresh,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        Loading users...
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-slate-50">
            <tr>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-left">
                Joined
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow
                key={user._id}
                user={user}
                refresh={refresh}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default UsersTable;