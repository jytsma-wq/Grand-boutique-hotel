'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/i18n/config';

interface MariamChatbotProps {
  locale: Locale;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Hotel color palette
const colors = {
  primary: '#27331d',      // Dark green
  primaryAlt: '#baa363',   // Gold/brass accent
  primaryTeal: '#22372b',  // Teal green
  secondary: '#e0dfd3',    // Light neutral
  white: '#ffffff',
  black: '#222222',
};

function reportChatError(message: string, error?: unknown) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message, error);
  }
}

export default function MariamChatbot({ locale }: MariamChatbotProps) {
  const t = useTranslations('chatbot');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t('greeting') }]);
    }
  }, [isOpen, messages.length, t]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Optimized send message with useCallback
  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || questionsAsked >= 4) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage, 
          locale,
          history: messages 
        }),
      });

      if (!response.ok) {
        reportChatError('Chat API error:', response.status);
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message || t('error')
      }]);
      setQuestionsAsked(prev => prev + 1);
    } catch (error) {
      reportChatError('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: t('error')
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, questionsAsked, locale, messages, t]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const remainingQuestions = Math.max(0, 4 - questionsAsked);
  const isDisabled = isLoading || questionsAsked >= 4;

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2 group/chat animate-scale-in"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 relative"
          style={{ 
            border: `2px solid ${colors.primaryAlt}`,
          }}
        >
          {isOpen ? (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <X className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} />
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
              alt="Concierge"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
        </button>
        
        {/* Tooltip */}
        {!isOpen && (
          <div 
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 text-white text-xs px-4 py-2 whitespace-nowrap opacity-0 group-hover/chat:opacity-100 transition-opacity duration-200 pointer-events-none rounded-[20px_0_0_20px]"
            style={{ backgroundColor: colors.primary }}
          >
            Hello, how can I help you?
          </div>
        )}
        
        {/* Label */}
        <span 
          className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium"
          style={{ color: colors.primary }}
        >
          CONCIERGE
        </span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-40 left-6 z-50 w-80 sm:w-96 shadow-2xl overflow-hidden animate-fade-in-up"
          style={{ 
            backgroundColor: colors.white,
            borderRadius: '20px 0 0 20px',
            border: `1px solid ${colors.secondary}`,
          }}
        >
          {/* Header */}
          <div 
            className="p-4 border-b"
            style={{ 
              backgroundColor: colors.primary,
              borderColor: `${colors.white}33`,
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: `2px solid ${colors.primaryAlt}` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                  alt="Mariam"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="font-medium text-sm text-white tracking-wide">{t('name')}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Digital Concierge</div>
              </div>
            </div>
          </div>

            {/* Messages */}
            <div 
              className="h-80 overflow-y-auto p-4 space-y-3 custom-scrollbar"
              style={{ backgroundColor: colors.secondary }}
              aria-live="polite"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                      msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'
                    }`}
                    style={{
                      backgroundColor: msg.role === 'user' ? colors.primary : colors.white,
                      color: msg.role === 'user' ? colors.white : colors.black,
                      border: msg.role === 'user' ? 'none' : `1px solid ${colors.primaryAlt}40`,
                    }}
                  >
                    <p className="text-sm font-normal leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div 
                    className="px-4 py-2.5 rounded-2xl rounded-tl-sm"
                    style={{ 
                      backgroundColor: colors.white,
                      border: `1px solid ${colors.primaryAlt}40`,
                    }}
                  >
                    <Loader2 className="w-5 h-5 animate-spin" style={{ color: colors.primary }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Questions Remaining */}
            <div 
              className="px-4 py-2 text-center text-xs uppercase tracking-wider font-medium"
              style={{ 
                backgroundColor: colors.white,
                color: `${colors.black}60`,
                borderBottom: `1px solid ${colors.secondary}`,
              }}
            >
              {t('questionsRemaining', { count: remainingQuestions })}
            </div>

            {/* Input Form */}
            <div 
              className="p-4 flex gap-2"
              style={{ 
                backgroundColor: colors.white,
                borderTop: `1px solid ${colors.secondary}`,
              }}
            >
              <input
                ref={inputRef}
                aria-label="Chat message"
                name="chat-message"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('placeholder')}
                autoComplete="off"
                disabled={isDisabled}
                className="flex-1 px-4 py-2.5 text-sm outline-none transition-colors duration-200 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-brass-400"
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: '20px 0 0 20px',
                  border: `1px solid transparent`,
                  fontFamily: '"DM Sans", sans-serif',
                }}
                onFocus={(e) => e.target.style.borderColor = colors.primaryAlt}
                onBlur={(e) => e.target.style.borderColor = 'transparent'}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isDisabled}
                className="px-4 py-2.5 rounded-r-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: colors.primaryAlt,
                  color: colors.black,
                }}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
    </>
  );
}






