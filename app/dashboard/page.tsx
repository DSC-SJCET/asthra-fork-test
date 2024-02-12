import { api } from "~/trpc/server";
import { user_columns } from "./_components/columns";
import { DataTable } from "~/components/task/components/data-table";
import { unstable_noStore as noStore } from "next/cache";

const Dashboard = async () => {
  noStore();
  const users = await api.user.userList.query();
  return (
    <div className="mx-auto my-20 max-w-screen-xl px-5">
      <DataTable data={users} columns={user_columns} />
    </div>
  );
};

export default Dashboard;
