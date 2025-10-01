import { Calendar, Check, Filter, Users, TrendingUp, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

interface FilterSidebarProps {
  isCollapsed?: boolean
}

export function FilterSidebar({ isCollapsed = false }: FilterSidebarProps) {
  if (isCollapsed) {
    return (
      <div className="w-12 bg-surface border-r border-border p-2">
        <Button variant="ghost" size="icon" className="w-full">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  return (
    <div className="w-80 bg-surface border-r border-border overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-foreground">Filtres</h2>
          <Badge variant="secondary" className="ml-auto">3 actifs</Badge>
        </div>

        {/* Période */}
        <Card className="border-0 shadow-none bg-muted/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Période
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Select defaultValue="30days">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 derniers jours</SelectItem>
                <SelectItem value="30days">30 derniers jours</SelectItem>
                <SelectItem value="90days">90 derniers jours</SelectItem>
                <SelectItem value="1year">1 an</SelectItem>
                <SelectItem value="custom">Période personnalisée</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Segments utilisateurs */}
        <Card className="border-0 shadow-none bg-muted/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="h-4 w-4" />
              Segments utilisateurs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Nouveaux utilisateurs", count: 1243, checked: true },
              { label: "Utilisateurs récurrents", count: 3421, checked: true },
              { label: "Utilisateurs premium", count: 567, checked: false },
              { label: "Utilisateurs inactifs", count: 892, checked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center space-x-2">
                <Checkbox id={item.label} defaultChecked={item.checked} />
                <label
                  htmlFor={item.label}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                >
                  {item.label}
                </label>
                <span className="text-xs text-muted-foreground">{item.count}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Canaux d'acquisition */}
        <Card className="border-0 shadow-none bg-muted/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Canaux d'acquisition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { label: "Recherche organique", checked: true },
              { label: "Réseaux sociaux", checked: true },
              { label: "Publicité payante", checked: false },
              { label: "Email marketing", checked: true },
              { label: "Référents", checked: false },
              { label: "Direct", checked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center space-x-2">
                <Checkbox id={item.label} defaultChecked={item.checked} />
                <label
                  htmlFor={item.label}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Gamme de prix */}
        <Card className="border-0 shadow-none bg-muted/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Gamme de prix
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les gammes</SelectItem>
                <SelectItem value="0-50">0€ - 50€</SelectItem>
                <SelectItem value="50-100">50€ - 100€</SelectItem>
                <SelectItem value="100-250">100€ - 250€</SelectItem>
                <SelectItem value="250+">250€+</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Separator />

        {/* Actions */}
        <div className="space-y-2">
          <Button className="w-full" size="sm">
            Appliquer les filtres
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Réinitialiser
          </Button>
        </div>
      </div>
    </div>
  )
}
