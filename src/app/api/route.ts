import { NextResponse } from 'next/server';
import { hotel } from '@/lib/site';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: `${hotel.name} API`,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? '0.2.0',
  });
}
