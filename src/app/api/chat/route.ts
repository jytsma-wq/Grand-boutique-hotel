import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequestBody {
  message?: string;
  locale?: string;
  history?: Message[] | string;
}

interface ChatSuccessResponse {
  message: string;
}

interface ChatErrorResponse {
  error: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ChatSuccessResponse | ChatErrorResponse>> {
  try {
    const body: ChatRequestBody = await request.json();
    const { message, locale, history } = body;

    // Validate message is present and not empty or whitespace only
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json<ChatErrorResponse>(
        { error: 'Message is required and cannot be empty.' },
        { status: 400 }
      );
    }

    // Parse conversation history
    let parsedHistory: Message[] = [];
    if (Array.isArray(history)) {
      parsedHistory = history;
    } else if (typeof history === 'string') {
      try {
        parsedHistory = JSON.parse(history);
      } catch {
        parsedHistory = [];
      }
    }

    // Retrieve API key from environment variables
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json<ChatErrorResponse>(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // System prompt for Mariam, the virtual concierge
    const systemPrompt = `You are Mariam, a friendly and professional virtual concierge for Batumi Boutique Hotel in Batumi, Georgia. 
    
    COMPREHENSIVE HOTEL INFORMATION:
    
    LOCATION & CONTACT:
    - Address: Rustaveli Avenue 123, Batumi, Adjara, Georgia 6000
    - Phone: +995 422 00 00 00
    - Email: info@batumiboutique.com
    - 24/7 Front Desk service
    - Near Black Sea Beach (0.1 km, 2 min walk), Batumi Boulevard (0.5 km, 5 min walk), Old Batumi (1.2 km, 15 min walk)
    - Batumi International Airport (BUS): 5 km, 10 min drive
    - City Center: 1 km, 12 min walk
    - Train Station: 3 km, 8 min drive (direct trains to Tbilisi)
    
    ARCHITECTURE & DESIGN:
    - 2026 modern brutalist architecture with charcoal and brass design
    - Floor-to-ceiling windows with Black Sea views
    - Sustainable materials, geothermal heating/cooling, rainwater recycling
    - 50+ rooms and suites
    
    ROOMS & SUITES (6 types):
    1. Standard Room - Modern comfort, city/sea views
    2. Superior Room - Enhanced space and amenities
    3. Deluxe Room - Premium features, sea views
    4. Junior Suite - Separate living area
    5. Executive Suite - Luxury suite with premium amenities
    6. Presidential Suite - Ultimate luxury experience
    
    DINING:
    - Azure Restaurant: Georgian & International cuisine, 7am-11pm daily
    - Lounge Bar: Cocktails & light bites, 4pm-1am daily
    - Room service available 24/7
    
    WELLNESS & SPA FACILITIES:
    - Infinity pool with Black Sea views
    - Fitness center with Technogym equipment (24/7 access)
    - Finnish sauna
    - Turkish hammam (steam room)
    - Outdoor jacuzzi/hot tub
    - Tranquil relaxation area
    - Spa treatments: Georgian Wine Wrap, Black Sea Salt Scrub, Aromatherapy Massage, Couples Retreat, Hot Stone Therapy, Anti-Aging Facial
    - Wellness membership tiers: Basic ($99/month), Premium ($199/month), VIP ($349/month)
    
    MEETINGS & EVENTS:
    - Professional meeting rooms for conferences and events
    - Modern AV equipment and catering services
    
    SERVICES & AMENITIES:
    - Airport transfers and private chauffeur services
    - Concierge service 24/7
    - Free WiFi throughout property
    - Valet parking
    - Multilingual staff (English, Georgian, Russian, Turkish, Hebrew, Arabic)
    
    NEARBY ATTRACTIONS:
    - Piazza Square (1.5 km), Batumi Botanical Garden (8 km), Gonio Fortress (12 km)
    
    CMS INSTRUCTIONS (Additional guidelines):
    - You MUST only discuss topics related to Batumi Boutique Hotel, its services, facilities, location, and local attractions
    - If asked about unrelated topics (politics, other hotels, personal advice, etc.), politely redirect: "I'm here to help with information about Batumi Boutique Hotel. How can I assist you with your stay or our services?"
    - Always be warm, professional, and embody Georgian hospitality
    - Respond in the same language as the user's question
    - Keep responses concise (under 150 words) but informative
    - Suggest booking or contacting the hotel when appropriate
    - Promote hotel amenities naturally in conversation
    
    Remember: You represent the hotel's brand. Be helpful, accurate, and always hotel-focused.`;

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.5-flash',
        systemInstruction: systemPrompt
      });

      // Map history to Gemini format
      const mappedHistory = Array.isArray(parsedHistory) ? parsedHistory.map((m: Message) => ({
        role: m.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: m.content }]
      })) : [];
      
      // Find first user message and slice history from there
      const firstUserIndex = mappedHistory.findIndex((m: { role: string }) => m.role === 'user');
      const conversationHistory = firstUserIndex >= 0 ? mappedHistory.slice(firstUserIndex) : [];

      const chat = model.startChat({
        history: conversationHistory,
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(message);
      const response = result.response.text() || 
        'I apologize, I could not process your request. Please try again.';

      return NextResponse.json<ChatSuccessResponse>({ message: response });
    } catch (geminiError) {
      // Handle Gemini API specific errors
      console.error('Gemini API error:', geminiError);
      
      // Check for API key issues or service unavailability
      if (geminiError instanceof Error && geminiError.message.includes('API key')) {
        return NextResponse.json<ChatErrorResponse>(
          { error: 'Invalid API configuration. Please contact support.' },
          { status: 503 }
        );
      }
      
      return NextResponse.json<ChatErrorResponse>(
        { error: 'I apologize, something went wrong. Please try again later.' },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json<ChatErrorResponse>(
      { error: 'Failed to process your request.' },
      { status: 500 }
    );
  }
}