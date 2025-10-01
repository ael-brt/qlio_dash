import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton, SkeletonShimmer } from "@/components/ui/skeleton"

interface ChartSkeletonProps {
  title?: string
  height?: string
}

export function ChartSkeleton({ title = "Graphique", height = "h-64" }: ChartSkeletonProps) {
  return (
    <Card className="border-0 shadow-soft bg-surface">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <div className={`${height} relative overflow-hidden rounded-lg bg-muted/30`}>
          {/* Simulation de barres de graphique */}
          <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <SkeletonShimmer
                key={i}
                className="w-8 bg-primary/20"
                style={{ 
                  height: `${Math.random() * 60 + 20}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          {/* Lignes de grille */}
          <div className="absolute inset-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-muted/50"
                style={{ top: `${(i + 1) * 20}%` }}
              />
            ))}
          </div>
          
          {/* Labels X */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 pb-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-3 w-6" />
            ))}
          </div>
        </div>
        
        {/* Légende */}
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-3 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
