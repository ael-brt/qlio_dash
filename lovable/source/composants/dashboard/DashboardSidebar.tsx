import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  Bell,
  Menu,
  X
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Utilisateurs", url: "/users", icon: Users },
  { title: "Commandes", url: "/orders", icon: ShoppingCart },
  { title: "Analyses", url: "/analytics", icon: BarChart3 },
  { title: "Paramètres", url: "/settings", icon: Settings },
]

export function DashboardSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground hover:bg-primary/90 font-medium" 
      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-surface border-r border-border">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-border">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">Dashboard</span>
            </div>
          )}
          {isCollapsed && (
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-2">
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Notifications section (visible only when expanded) */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary-muted/50">
              <Bell className="h-4 w-4 text-primary" />
              <div className="text-sm">
                <p className="font-medium text-foreground">3 nouvelles notifications</p>
                <p className="text-muted-foreground text-xs">Cliquez pour voir</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
