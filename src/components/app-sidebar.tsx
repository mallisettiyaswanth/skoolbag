"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpenIcon,
  Command,
  GalleryVerticalEnd,
  Globe,
  LayoutDashboard,
} from "lucide-react";
import BackpackIcon from "@mui/icons-material/Backpack";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "@/components/global/Logo";
import useCurrentUser from "@/hooks/useCurrentUser";
import { SidebarOptInForm } from "./sidebar-opt-in-form";

const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
    },
    {
      title: "Community",
      icon: Globe,
      url: "/community/feed",
      items: [
        {
          title: "Feed",
          url: "/community/feed",
        },
        {
          title: "Saved",
          url: "/community/saved",
        },
        {
          title: "Liked",
          url: "/community/liked",
        },
      ],
    },
    {
      title: "Courses",
      url: "/courses/categories",
      icon: BookOpenIcon,
      items: [
        {
          title: "Categories",
          url: "/courses/categories",
        },
        {
          title: "Search",
          url: "/courses/search",
        },
        {
          title: "Settings",
          url: "/courses/settings",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile } = useSidebar();
  const pathname = usePathname();
  const user = useCurrentUser();
  const userData = {
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.image || "",
  };

  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar collapsible="icon" {...props} className="scrollbar-hide">
      <SidebarHeader className="text-center flex items-center justify-center py-5">
        {state === "expanded" ? (
          <Logo
            className={`items-center font-semibold tracking-tight text-3xl `}
            iconWidth="text-3xl"
          />
        ) : (
          <BackpackIcon className="w-7 h-7 rounded-md bg-primary-button text-white p-1" />
        )}
      </SidebarHeader>
      <SidebarContent>
        {state === "expanded" || isMobile ? (
          <SidebarGroup>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={!item.items && isActive(item.url)}
                  >
                    <a
                      href={item.url}
                      className={`font-medium ${isActive(item.url) ? "" : ""}`}
                    >
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive(subItem.url)}
                          >
                            <a href={subItem.url}>{subItem.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ) : (
          <NavMain
            items={data.navMain.map((item) => ({
              ...item,
              isActive: isActive(item.url),
              items: item.items?.map((subItem) => ({
                ...subItem,
                isActive: isActive(subItem.url),
              })),
            }))}
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        <div>
          <SidebarOptInForm />
        </div>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
