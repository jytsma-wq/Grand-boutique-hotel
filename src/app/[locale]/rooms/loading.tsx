import { RoomCardSkeleton } from "@/components/hotel/Skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 space-y-4">
        <div className="animate-pulse h-12 bg-muted rounded w-1/3 mx-auto" />
        <div className="animate-pulse h-6 bg-muted rounded w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <RoomCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
