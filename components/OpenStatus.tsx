"use client";

import { useEffect, useState } from "react";
import { SCHEDULE } from "@/lib/data";
import { cn } from "@/lib/utils";

function getStatus() {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  const [openH, openM] = SCHEDULE.openTime.split(":").map(Number);
  const [closeH, closeM] = SCHEDULE.closeTime.split(":").map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const isOpenDay = SCHEDULE.openDays.includes(day);
  const isOpenNow = isOpenDay && minutes >= openMinutes && minutes < closeMinutes;

  return {
    isOpenNow,
      label: isOpenNow
        ? `Abierto ahora · Cierra a las ${SCHEDULE.closeTime}`
        : !isOpenDay
          ? `Cerrado ahora · Abrimos el Lunes a las ${SCHEDULE.openTime}`
          : `Cerrado ahora · Abrimos hoy a las ${SCHEDULE.openTime}`,
  };
}

export default function OpenStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<{ isOpenNow: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-fox-gray sm:text-sm",
          className
        )}
      >
        <span className="h-2 w-2 rounded-full bg-fox-gray-dim" />
        Consultando horario…
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium sm:text-sm",
        status.isOpenNow ? "text-fox-white" : "text-fox-gray",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          status.isOpenNow ? "bg-fox-gold animate-pulse-dot" : "bg-fox-gray-dim"
        )}
      />
      {status.label}
    </div>
  );
}
