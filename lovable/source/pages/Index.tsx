import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { FilterSidebar } from "@/components/dashboard/FilterSidebar"
import { TabNavigation } from "@/components/dashboard/TabNavigation"
import { OverviewTab } from "@/components/dashboard/tabs/OverviewTab"
import { UsersTab } from "@/components/dashboard/tabs/UsersTab"
import { SalesTab } from "@/components/dashboard/tabs/SalesTab"
import { AnalyticsTab } from "@/components/dashboard/tabs/AnalyticsTab"
import { SettingsTab } from "@/components/dashboard/tabs/SettingsTab"

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />
      case "users":
        return <UsersTab />
      case "sales":
        return <SalesTab />
      case "analytics":
        return <AnalyticsTab />
      case "settings":
        return <SettingsTab />
      default:
        return <OverviewTab />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DashboardSidebar />
          
          <div className="flex flex-1">
            <FilterSidebar />
            
            <div className="flex-1 flex flex-col">
              <DashboardHeader isLoading={false} />
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              
              <main className="flex-1 p-6">
                {renderTabContent()}
              </main>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
