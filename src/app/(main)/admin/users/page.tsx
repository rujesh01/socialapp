import { GetUserData } from "../actions/GetUserData";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const UserPage = async () => {
  const users = await GetUserData();

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default UserPage;