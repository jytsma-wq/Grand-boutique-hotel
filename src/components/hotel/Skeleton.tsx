export function Skeleton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${className}`}
      aria-hidden="true"
    />
  );
}

export function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="h-6 w-1/2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoomCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Skeleton className="h-64 w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative h-[70vh] w-full">
      <Skeleton className="h-full w-full absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Skeleton className="h-16 w-96" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
}







