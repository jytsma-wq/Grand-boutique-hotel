import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;
  const signature = request.headers.get('sanity-webhook-signature');

  if (!webhookSecret || !signature) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (signature !== webhookSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { _type } = body;

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

    const tag = tagMap[_type];
    if (tag) {
      // @ts-expect-error - Next.js 16 API change
      revalidateTag(tag);
      return NextResponse.json({ revalidated: true, tag });
    }

    return NextResponse.json({ revalidated: false, message: 'No matching tag found' });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
