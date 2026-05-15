import { type NextRequest } from 'next/server';

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
}

export function isRequestBodyTooLarge(request: NextRequest, maxBytes: number): boolean {
  const contentLength = request.headers.get('content-length');
  if (!contentLength) return false;

  const parsedContentLength = Number(contentLength);
  return Number.isFinite(parsedContentLength) && parsedContentLength > maxBytes;
}
