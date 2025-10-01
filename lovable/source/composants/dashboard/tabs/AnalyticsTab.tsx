import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart } from "../../charts/LineChart"
import { BarChart } from "../../charts/BarChart"
import { PieChart } from "../../charts/PieChart"

const conversionFunnelData = [
  { name: 'Visiteurs', count: 10000, taux: 100 },
  { name: 'Intérêt', count: 3500, taux: 35 },
  { name: 'Panier', count: 1200, taux: 12 },
  { name: 'Commande', count: 324, taux: 3.2 },
]

const audienceData = [
  { name: '18-24', visiteurs: 1200, conversions: 45 },
  { name: '25-34', visiteurs: 2400, conversions: 120 },
  { name: '35-44', visiteurs: 1800, conversions: 95 },
  { name: '45-54', visiteurs: 900, conversions: 38 },
  { name: '55+', visiteurs: 600, conversions: 26 },
]

const deviceData = [
  { name: 'Desktop', value: 45, color: 'hsl(217, 91%, 60%)' },
  { name: 'Mobile', value: 40, color: 'hsl(142, 71%, 45%)' },
  { name: 'Tablette', value: 15, color: 'hsl(47, 96%, 53%)' },
]

const topPages = [
  { page: '/accueil', visiteurs: 12543, tempsMoyen: '2m 34s', tauxRebond: '32%' },
  { page: '/produits', visiteurs: 8921, tempsMoyen: '3m 12s', tauxRebond: '28%' },
  { page: '/contact', visiteurs: 3456, tempsMoyen: '1m 45s', tauxRebond: '45%' },
  { page: '/blog', visiteurs: 2987, tempsMoyen: '4m 23s', tauxRebond: '22%' },
  { page: '/a-propos', visiteurs: 1876, tempsMoyen: '2m 01s', tauxRebond: '38%' },
]

const performanceMetrics = [
  { name: 'Temps de chargement', value: '1.2s', trend: 'up', color: 'text-emerald-600' },
  { name: 'Score Core Web Vitals', value: '92/100', trend: 'up', color: 'text-emerald-600' },
  { name: 'Taux de rebond', value: '32%', trend: 'down', color: 'text-emerald-600' },
  { name: 'Pages par session', value: '3.4', trend: 'up', color: 'text-emerald-600' },
]

export function AnalyticsTab() {
  return (
    <div className="space-y-6">
      {/* Métriques de performance */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((metric) => (
          <Card key={metric.name} className="border-0 shadow-soft bg-surface">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.name}</p>
                <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Entonnoir de conversion et segments d'audience */}
      <div className="grid gap-6 lg:grid-cols-2">
        <BarChart
          title="Entonnoir de conversion"
          data={conversionFunnelData}
          bars={[
            { dataKey: "count", fill: "hsl(217, 91%, 60%)", name: "Nombre d'utilisateurs" },
          ]}
          height={300}
        />
        
        <BarChart
          title="Audience par tranche d'âge"
          data={audienceData}
          bars={[
            { dataKey: "visiteurs", fill: "hsl(217, 91%, 60%)", name: "Visiteurs" },
            { dataKey: "conversions", fill: "hsl(142, 71%, 45%)", name: "Conversions" },
          ]}
          height={300}
        />
      </div>

      {/* Appareils et pages populaires */}
      <div className="grid gap-6 lg:grid-cols-3">
        <PieChart
          title="Répartition par appareil"
          data={deviceData}
          height={280}
        />
        
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-soft bg-surface">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Pages les plus visitées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPages.map((page) => (
                  <div key={page.page} className="flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{page.page}</p>
                      <p className="text-sm text-muted-foreground">{page.visiteurs.toLocaleString()} visiteurs</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{page.tempsMoyen}</p>
                      <p className="text-xs text-muted-foreground">temps moyen</p>
                    </div>
                    
                    <Badge variant="outline" className="shrink-0">
                      {page.tauxRebond} rebond
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
