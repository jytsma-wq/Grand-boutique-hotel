'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/i18n/config';

interface MariamChatbotProps {
  locale: Locale;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function MariamChatbot({ locale }: MariamChatbotProps) {
  const t = useTranslations('chatbot');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t('greeting') }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
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
        const errorText = await response.text();
        console.error('Server fout:', response.status, errorText);
        throw new Error(`Server status: ${response.status}`);
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.message || t('error')
      }]);
      setQuestionsAsked(prev => prev + 1);
    } catch (error) {
      console.error('Fetch fout:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: t('error')
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const remainingQuestions = Math.max(0, 4 - questionsAsked);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2 group/chat"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-charcoal-900 shadow-xl transition-all hover:scale-105 active:scale-95 relative"
        >
          {isOpen ? (
            <div className="w-full h-full bg-charcoal-900 flex items-center justify-center">
              <X className="w-7 h-7 md:w-9 md:h-9 text-white" strokeWidth={1.5} />
            </div>
          ) : (
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
              alt="Concierge"
              className="w-full h-full object-cover"
            />
          )}
        </button>
        {!isOpen && (
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-charcoal-900 text-white text-xs px-4 py-2 whitespace-nowrap opacity-0 group-hover/chat:opacity-100 transition-opacity duration-200 pointer-events-none">
            Hello, how can I help you?
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-charcoal-900" />
          </div>
        )}
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal-900">
          CONCIERGE
        </span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-44 left-6 z-50 w-80 sm:w-96 bg-white shadow-2xl overflow-hidden border-2 border-charcoal-900"
          >
            <div className="bg-charcoal-900 p-5 text-white border-b-2 border-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white border-2 border-charcoal-900 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                    alt="Mariam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wide text-sm">{t('name')}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-light">Digital Concierge</div>
                </div>
              </div>
            </div>

            <div className="h-80 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-charcoal-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 border-2 ${
                      msg.role === 'user'
                        ? 'bg-charcoal-900 text-white border-charcoal-900'
                        : 'bg-white text-charcoal-900 border-charcoal-200'
                    }`}
                  >
                    <p className="text-sm font-light leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-charcoal-200 px-4 py-3">
                    <Loader2 className="w-5 h-5 animate-spin text-charcoal-900" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-5 py-3 bg-white border-t-2 border-charcoal-200 text-center text-xs text-charcoal-600 uppercase tracking-wider font-medium">
              {t('questionsRemaining', { count: remainingQuestions })}
            </div>

            <div className="p-5 border-t-2 border-charcoal-900 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('placeholder')}
                  disabled={isLoading || questionsAsked >= 4}
                  className="flex-1 border-2 border-charcoal-300 focus:border-charcoal-900 font-light"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading || questionsAsked >= 4}
                  className="bg-charcoal-900 hover:bg-charcoal-800 border-2 border-charcoal-900 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}