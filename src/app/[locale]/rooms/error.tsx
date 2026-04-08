"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Rooms page error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-destructive">Unable to load rooms</h2>
        <p className="text-muted-foreground">
          We encountered an error while loading our rooms.
        </p>
        <Button onClick={reset} className="mt-4">
          Try again
        </Button>
      </div>
    </div>
  );
}
