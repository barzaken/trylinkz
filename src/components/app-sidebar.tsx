"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconLink,
  IconSettings,
} from "@tabler/icons-react"

import { useMemo } from "react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Logo } from "./ui/logo"
import { useAuth } from "./providers/AuthProvider"

const data = {
  navMain: [
    {
      title: "דאשבורד",
      url: "/app",
      icon: IconDashboard,
    },
    {
      title: "אנליטיקה",
      url: "/app/analytics",
      icon: IconChartBar,
    },
    {
      title: "קישורים",
      url: "/app/links",
      icon: IconLink,
    },
  ],
  navSecondary: [
    {
      title: "הגדרות",
      url: "/app/settings",
      icon: IconSettings,
    },
    {
      title: "קבל עזרה",
      url: "/app/help",
      icon: IconHelp,
    }
  ]
}

export function AppSidebar({
  onQuickCreate,
  ...props
}: React.ComponentProps<typeof Sidebar> & { onQuickCreate?: () => void }) {
  const { user, loading, signOut } = useAuth()

  const displayUser = useMemo(() => {
    if (!user) {
      return {
        name: loading ? "טוען משתמש..." : "אורח",
        email: loading ? "בודק חיבור" : "לא מחובר",
        avatar: "/linkz-black.svg",
      }
    }

    const metadata = user.user_metadata as Record<string, unknown> | undefined
    const nameFromMeta = metadata?.name as string | undefined
    const avatarFromMeta = metadata?.avatar_url as string | undefined

    return {
      name: nameFromMeta || user.email?.split("@")[0] || "משתמש",
      email: user.email ?? "",
      avatar: avatarFromMeta || "/linkz-black.svg",
    }
  }, [user, loading])

  return (
    <Sidebar side="right" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Logo width={80} height={80} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onQuickCreate={onQuickCreate} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={displayUser} onLogout={signOut} />
      </SidebarFooter>
    </Sidebar>
  )
}
