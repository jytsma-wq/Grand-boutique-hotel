type RateLimitRecord = {
  count: number;
  resetTime: number;
};

interface InMemoryRateLimiterOptions {
  limit: number;
  windowMs: number;
  maxKeys?: number;
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfterMs: number;
}

export function createInMemoryRateLimiter({
  limit,
  windowMs,
  maxKeys = 10000,
}: InMemoryRateLimiterOptions) {
  const records = new Map<string, RateLimitRecord>();

  function prune(now: number): void {
    if (records.size < maxKeys) return;

    for (const [key, record] of records) {
      if (now > record.resetTime) {
        records.delete(key);
      }
    }
  }

  return function checkRateLimit(key: string): RateLimitResult {
    const now = Date.now();
    prune(now);

    const record = records.get(key);
    if (!record || now > record.resetTime) {
      records.set(key, { count: 1, resetTime: now + windowMs });
      return { allowed: true, retryAfterMs: 0 };
    }

    if (record.count >= limit) {
      return { allowed: false, retryAfterMs: Math.max(0, record.resetTime - now) };
    }

    record.count += 1;
    return { allowed: true, retryAfterMs: 0 };
  };
}
