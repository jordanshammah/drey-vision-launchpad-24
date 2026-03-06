import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string; hasCommas: boolean; decimals: number } {
  const match = value.match(/^([^0-9]*?)([\d,]+\.?\d*)(.*?)$/);
  if (!match) return { prefix: "", number: 0, suffix: value, hasCommas: false, decimals: 0 };

  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3];
  const hasCommas = match[2].includes(",");
  const decimalPart = numStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, number: parseFloat(numStr), suffix, hasCommas, decimals };
}

function formatNumber(num: number, hasCommas: boolean, decimals: number): string {
  const fixed = num.toFixed(decimals);
  if (!hasCommas) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${formatted}.${decPart}` : formatted;
}

export const AnimatedCounter = ({ value, className = "", duration = 1.2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimated = useRef(false);

  const { prefix, number: targetNumber, suffix, hasCommas, decimals } = parseValue(value);

  useEffect(() => {
    if (!isInView || hasAnimated.current || targetNumber === 0) return;
    hasAnimated.current = true;

    const startNumber = Math.floor(targetNumber * 0.85);
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = startNumber + (targetNumber - startNumber) * eased;
      setDisplayValue(`${prefix}${formatNumber(current, hasCommas, decimals)}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber, prefix, suffix, hasCommas, decimals, duration, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {displayValue}
    </motion.span>
  );
};
