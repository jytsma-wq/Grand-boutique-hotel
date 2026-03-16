'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Clock, Users, Phone } from 'lucide-react';
import { type Locale } from '@/i18n/config';

interface BookingCalendarProps {
  locale: Locale;
  type: 'spa' | 'restaurant';
  venueName: string;
}

export default function BookingCalendar({ type, venueName }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [step, setStep] = useState(1);

  const timeSlots = type === 'spa'
    ? ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    : ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'];

  const guestOptions = type === 'spa'
    ? ['1', '2', '3', '4']
    : ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleSubmit = () => {
    // In production, this would submit to an API
    const message = `Reservation request for ${venueName}:\nDate: ${date?.toLocaleDateString()}\nTime: ${time}\nGuests: ${guests}`;
    const whatsappUrl = `https://wa.me/995422000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-charcoal-900 mb-6">
        {type === 'spa' ? 'Book Spa Treatment' : 'Reserve a Table'}
      </h3>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full ${
              s <= step ? 'bg-gold-400' : 'bg-charcoal-100'
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Label className="text-sm font-medium text-charcoal-700 mb-3 block">
            Select Date
          </Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setStep(2);
            }}
            disabled={(date) => date < new Date()}
            className="rounded-xl border border-charcoal-100"
          />
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div>
            <Label className="text-sm font-medium text-charcoal-700 mb-3 block flex items-center gap-2">
              <Clock size={16} />
              Select Time
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => {
                    setTime(slot);
                    setStep(3);
                  }}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                    time === slot
                      ? 'bg-charcoal-600 text-white'
                      : 'bg-charcoal-50 text-charcoal-700 hover:bg-charcoal-100'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => setStep(1)}
            className="text-charcoal-600"
          >
            ← Back to date
          </Button>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div>
            <Label className="text-sm font-medium text-charcoal-700 mb-3 block flex items-center gap-2">
              <Users size={16} />
              Number of {type === 'spa' ? 'Guests' : 'People'}
            </Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {guestOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt} {type === 'spa' ? 'person' : 'guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Summary */}
          <div className="bg-charcoal-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-charcoal-600">Date:</span>
              <span className="font-medium text-charcoal-900">
                {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-charcoal-600">Time:</span>
              <span className="font-medium text-charcoal-900">{time}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-charcoal-600">
                {type === 'spa' ? 'Guests:' : 'Party Size:'}
              </span>
              <span className="font-medium text-charcoal-900">{guests}</span>
            </div>
          </div>

          {/* Submit */}
          <Button onClick={handleSubmit} className="btn-luxury w-full">
            <Phone className="w-4 h-4 mr-2" />
            Confirm via WhatsApp
          </Button>

          <Button
            variant="ghost"
            onClick={() => setStep(2)}
            className="w-full text-charcoal-600"
          >
            ← Back to time
          </Button>
        </motion.div>
      )}
    </div>
  );
}
