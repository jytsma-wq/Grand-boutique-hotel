module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { message, locale, history } = body;
        // Zorg ervoor dat de geschiedenis een array is
        let parsedHistory = [];
        if (Array.isArray(history)) {
            parsedHistory = history;
        } else if (typeof history === 'string') {
            try {
                parsedHistory = JSON.parse(history);
            } catch  {
                parsedHistory = [];
            }
        }
        // Accepteer beide mogelijke namen uit het .env bestand
        const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('API-sleutel ontbreekt. Controleer of GOOGLE_GEMINI_API_KEY of GEMINI_API_KEY in je .env staat en herstart de server.');
        }
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
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: systemPrompt
        });
        const mappedHistory = Array.isArray(parsedHistory) ? parsedHistory.map((m)=>({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [
                    {
                        text: m.content
                    }
                ]
            })) : [];
        const firstUserIndex = mappedHistory.findIndex((m)=>m.role === 'user');
        const conversationHistory = firstUserIndex >= 0 ? mappedHistory.slice(firstUserIndex) : [];
        const chat = model.startChat({
            history: conversationHistory,
            generationConfig: {
                maxOutputTokens: 300,
                temperature: 0.7
            }
        });
        const result = await chat.sendMessage(message);
        const response = result.response.text() || 'I apologize, I could not process your request. Please try again.';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: response
        });
    } catch (error) {
        // Deze log verschijnt in je server terminal (bijv. VS Code), niet in de browser
        console.error('Chat API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'I apologize, something went wrong. Please try again later.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hn8eii._.js.map