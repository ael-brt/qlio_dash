import { BarChart3, Users, ShoppingCart, TrendingUp, Settings } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabNavigationProps {
  activeTab: string
  onTabChange: (value: string) => void
}

const tabs = [
  { id: "overview", label: "Vue d'ensemble", icon: BarChart3 },
  { id: "users", label: "Utilisateurs", icon: Users },
  { id: "sales", label: "Ventes", icon: ShoppingCart },
  { id: "analytics", label: "Analyses", icon: TrendingUp },
  { id: "settings", label: "Paramètres", icon: Settings },
]

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-border bg-surface px-6">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="h-12 bg-transparent border-0 p-0 space-x-8">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="relative h-12 rounded-none border-b-2 border-transparent bg-transparent px-0 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <div className="flex items-center gap-2">
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
