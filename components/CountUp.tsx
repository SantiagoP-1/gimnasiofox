"use client";

import { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  start?: boolean;
};

export default function CountUp({ value, suffix = "", decimals = 0, duration = 1.4, start = false }: CountUpProps) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!start) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return controls.stop;
  }, [start, motionValue, value, duration, decimals]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
