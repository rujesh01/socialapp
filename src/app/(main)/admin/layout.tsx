import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "../(user)/SessionProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./__components/app-sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/adminLogin/login");


  return (
    <SessionProvider value={session}>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="">
        {children}
        </div>
      </main>
    </SidebarProvider>
    </SessionProvider>
  );
}
