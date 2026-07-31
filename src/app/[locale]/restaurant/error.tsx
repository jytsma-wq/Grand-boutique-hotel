"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors");
  useEffect(() => {
    console.error("Restaurant page error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-destructive">{t("restaurantTitle")}</h2>
        <p className="text-muted-foreground">
          {t("restaurantBody")}
        </p>
        <Button onClick={reset} className="mt-4">
          {t("retry")}
        </Button>
      </div>
    </div>
  );
}
