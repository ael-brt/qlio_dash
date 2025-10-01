import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-skeleton-pulse rounded-md bg-skeleton",
        className
      )}
      {...props}
    />
  )
}

function SkeletonShimmer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "skeleton-shimmer rounded-md bg-skeleton",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton, SkeletonShimmer }
