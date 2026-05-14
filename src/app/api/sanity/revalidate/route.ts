import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';
import { z } from 'zod';

type SanityWebhookPayload = {
  _type?: string;
};

const REVALIDATE_MAX_BODY_BYTES = 16 * 1024;

const sanityWebhookSchema = z.object({
  _type: z.string().trim().min(1).max(80).regex(/^[A-Za-z][A-Za-z0-9]*$/),
}).passthrough();

function isRequestBodyTooLarge(request: NextRequest, maxBytes: number): boolean {
  const contentLength = request.headers.get('content-length');
  if (!contentLength) return false;

  const parsedContentLength = Number(contentLength);
  return Number.isFinite(parsedContentLength) && parsedContentLength > maxBytes;
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook is not configured' }, { status: 500 });
  }

  if (isRequestBodyTooLarge(request, REVALIDATE_MAX_BODY_BYTES)) {
    return NextResponse.json({ error: 'Request body is too large' }, { status: 413 });
  }

  try {
    const { body, isValidSignature } = await parseBody<SanityWebhookPayload>(request, webhookSecret);

    if (!isValidSignature) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const parsedBody = sanityWebhookSchema.safeParse(body);
    if (!parsedBody.success) {
      return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 });
    }

    const tagMap: Record<string, string> = {
      siteSettings: 'siteSettings',
      room: 'rooms',
      homePage: 'homePage',
      restaurantPage: 'restaurantPage',
      barPage: 'barPage',
      spaTreatment: 'spaTreatments',
      offer: 'offers',
      experience: 'experiences',
      galleryImage: 'gallery',
      chatbotKnowledge: 'chatbotKnowledge',
      popup: 'popup',
    };

    const tag = tagMap[parsedBody.data._type];
    if (tag) {
      revalidateTag(tag, 'max');
      return NextResponse.json({ revalidated: true, tag });
    }

    return NextResponse.json({ revalidated: false, message: 'No matching tag found' });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
