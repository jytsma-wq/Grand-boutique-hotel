import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

type SanityWebhookPayload = {
  _type?: string;
};

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook is not configured' }, { status: 500 });
  }

  try {
    const { body, isValidSignature } = await parseBody<SanityWebhookPayload>(request, webhookSecret);

    if (!isValidSignature) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!body?._type) {
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

    const tag = tagMap[body._type];
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
