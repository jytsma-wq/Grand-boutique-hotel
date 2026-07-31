'use client';

import { useState } from 'react';
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
import { useTranslations } from 'next-intl';

interface BookingCalendarProps {
  locale: Locale;
  type: 'spa' | 'restaurant';
  venueName: string;
}

export default function BookingCalendar({ locale, type, venueName }: BookingCalendarProps) {
  const t = useTranslations('bookingCalendar');
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
    const message = t('whatsappMessage', {
      venue: venueName,
      date: date?.toLocaleDateString(locale) ?? '',
      time,
      guests,
    });
    const whatsappUrl = `https://wa.me/995422000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-xl font-semibold text-forest-900 mb-6">
        {type === 'spa' ? t('bookSpa') : t('reserveTable')}
      </h3>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1 rounded-full ${
              s <= step ? 'bg-brass-400' : 'bg-forest-100'
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div >
          <Label className="text-sm font-medium text-forest-700 mb-3 block">
            {t('selectDate')}
          </Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setStep(2);
            }}
            disabled={(date) => date < new Date()}
            className="rounded-xl border border-forest-100"
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6"
        >
          <div>
            <Label className="text-sm font-medium text-forest-700 mb-3 block flex items-center gap-2">
              <Clock size={16} />
              {t('selectTime')}
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  aria-pressed={time === slot}
                  onClick={() => {
                    setTime(slot);
                    setStep(3);
                  }}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                    time === slot
                      ? 'bg-forest-600 text-cream-50'
                      : 'bg-forest-50 text-forest-700 hover:bg-forest-100'
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
            className="text-forest-600"
          >
            ← {t('backToDate')}
          </Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6"
        >
          <div>
            <Label className="text-sm font-medium text-forest-700 mb-3 block flex items-center gap-2">
              <Users size={16} />
              {type === 'spa' ? t('numberOfGuests') : t('numberOfPeople')}
            </Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {guestOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {type === 'spa' ? t('personCount', { count: Number(opt) }) : t('guestCount', { count: Number(opt) })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Summary */}
          <div className="bg-forest-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-forest-600">{t('date')}:</span>
              <span className="font-medium text-forest-900">
                {date?.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-forest-600">{t('time')}:</span>
              <span className="font-medium text-forest-900">{time}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-forest-600">
                {type === 'spa' ? `${t('guests')}:` : `${t('partySize')}:`}
              </span>
              <span className="font-medium text-forest-900">{guests}</span>
            </div>
          </div>

          {/* Submit */}
          <Button onClick={handleSubmit} className="btn-boutique w-full">
            <Phone aria-hidden="true" className="w-4 h-4 mr-2" />
            {t('confirmWhatsApp')}
          </Button>

          <Button
            variant="ghost"
            onClick={() => setStep(2)}
            className="w-full text-forest-600"
          >
            ← {t('backToTime')}
          </Button>
        </div>
      )}
    </div>
  );
}







