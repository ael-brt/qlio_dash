import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton, SkeletonShimmer } from "@/components/ui/skeleton"

export function TableSkeleton() {
  return (
    <Card className="border-0 shadow-soft bg-surface">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="border-t border-border">
          {/* En-têtes de tableau */}
          <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-border bg-muted/30">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-18" />
          </div>
          
          {/* Lignes de données */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/50 last:border-0">
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-1">
                  <SkeletonShimmer className="h-4 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              
              <div className="flex items-center">
                <Skeleton className="h-5 w-16" />
              </div>
              
              <div className="flex items-center">
                <Skeleton className="h-6 w-14 rounded-full" />
              </div>
              
              <div className="flex items-center justify-end">
                <Skeleton className="h-8 w-20" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
