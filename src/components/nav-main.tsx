"use client";

import { ChevronRight, MoreHorizontal, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenu key={item.title}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foregroun ${
                      item.isActive ? "bg-primary-button" : ""
                    }`}
                  >
                    {Icon ? <Icon className={`ml-auto`} /> : null}
                    {/* {item.url !== "#" ? (
                      <a href={item.url} className="text-xs">
                        {Icon ? <Icon className="ml-auto" /> : null}
                      </a>
                    ) : Icon ? (
                      <Icon className="ml-auto" />
                    ) : null} */}
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items?.length ? (
                  <DropdownMenuContent
                    side={isMobile ? "bottom" : "right"}
                    align={isMobile ? "end" : "start"}
                    className="min-w-56 rounded-lg"
                  >
                    {item.items.map((item) => (
                      <DropdownMenuItem asChild key={item.title}>
                        <a href={item.url}>{item.title}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </SidebarMenuItem>
            </DropdownMenu>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
