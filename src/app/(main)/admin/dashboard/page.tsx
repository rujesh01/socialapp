import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "../__components/overview";
import { RecentActivity } from "../__components/recent-activity";
import { GetUserData } from "../actions/GetUserData";
import { Users, UserCheck, FileText, Flag } from "lucide-react";

const DashboardPage = async () => {
  const data = await GetUserData();

  return (
    <div className="space-y-6 p-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.length}</div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-emerald-500">↑ +2.5%</span>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,678</div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-emerald-500">↑ +5.2%</span>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-red-500">↓ -3.1%</span>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              User activity over time
            </p>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

      
      </div>
    </div>
  );
};

export default DashboardPage;
