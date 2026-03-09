import { useRef, useCallback } from "react";

interface RateLimitOptions {
  /** Max number of submissions allowed within the window */
  maxAttempts?: number;
  /** Time window in milliseconds (default: 60000 = 1 minute) */
  windowMs?: number;
  /** Cooldown in milliseconds after hitting the limit (default: 60000 = 1 minute) */
  cooldownMs?: number;
}

/**
 * Client-side rate limiter hook to prevent form spam.
 * Returns { checkRateLimit, getRemainingCooldown }.
 * checkRateLimit() returns true if the action is allowed, false if rate-limited.
 */
export function useRateLimit(options: RateLimitOptions = {}) {
  const { maxAttempts = 3, windowMs = 60_000, cooldownMs = 60_000 } = options;
  const attempts = useRef<number[]>([]);
  const cooldownUntil = useRef<number>(0);

  const checkRateLimit = useCallback((): boolean => {
    const now = Date.now();

    // Check cooldown
    if (now < cooldownUntil.current) {
      return false;
    }

    // Remove expired attempts
    attempts.current = attempts.current.filter((t) => now - t < windowMs);

    if (attempts.current.length >= maxAttempts) {
      cooldownUntil.current = now + cooldownMs;
      return false;
    }

    attempts.current.push(now);
    return true;
  }, [maxAttempts, windowMs, cooldownMs]);

  const getRemainingCooldown = useCallback((): number => {
    const remaining = cooldownUntil.current - Date.now();
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
  }, []);

  return { checkRateLimit, getRemainingCooldown };
}
