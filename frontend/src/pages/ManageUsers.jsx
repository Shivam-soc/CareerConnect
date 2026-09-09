import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import UsersTable from "../components/admin/UsersTable";

import { getUsers } from "../api/adminApi";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await getUsers();

      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Manage Users
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all registered users.
        </p>
      </div>

      <UsersTable
        users={users}
        loading={loading}
        refresh={fetchUsers}
      />
    </DashboardLayout>
  );
}

export default ManageUsers;