"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { VscSettingsGear as IoSettingsOutline } from "react-icons/vsc";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge, Button } from "antd";
import { usePathname } from "next/navigation";
import { makeCaptialize } from "@/utils/functions";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathName = usePathname();
  const breakCrumbs = pathName.split("/").filter((item) => item);

  return (
    <div className="w-full min-h-screen bg-[#f5f6f7]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Breadcrumb>
                <BreadcrumbList>
                  {breakCrumbs.map((item, index) => {
                    if (index === breakCrumbs.length - 1) return;
                    return (
                      <>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href="#">
                            {makeCaptialize(item)}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                      </>
                    );
                  })}
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold">
                      {makeCaptialize(breakCrumbs[breakCrumbs.length - 1])}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex md:w-[10%] gap-4 px-5 md:px-0">
              <Button type="text" className="p-2">
                <Badge size="small" count={5}>
                  <NotificationsNoneIcon className="text-primary-button" />
                </Badge>
                {/* // TODO: Add notificaiton none icon for no notifications */}
              </Button>

              <Button type="text" className="p-2">
                <IoSettingsOutline className="text-primary-button h-5 w-5" />
              </Button>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
