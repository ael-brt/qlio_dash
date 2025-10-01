import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"

interface DashboardHeaderProps {
  isLoading?: boolean
}

export function DashboardHeader({ isLoading = false }: DashboardHeaderProps) {
  if (isLoading) {
    return (
      <header className="bg-surface border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <Skeleton className="h-6 w-32" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Skeleton className="h-10 w-64 rounded-lg" />
            </div>
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-surface border-b border-border px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold text-foreground">Tableau de bord</h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Barre de recherche */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher..." 
              className="w-64 pl-10 bg-background border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hover:bg-secondary/80">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
          
          {/* Profil utilisateur */}
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/80">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
