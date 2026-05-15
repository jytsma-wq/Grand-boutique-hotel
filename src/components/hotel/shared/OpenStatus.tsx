import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface OpenStatusProps {
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
  className?: string;
}

export default function OpenStatus({ isOpen, openTime, closeTime, className = '' }: OpenStatusProps) {
  const t = useTranslations('common');

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
        isOpen
          ? 'bg-forest-100 text-forest-700'
          : 'bg-red-50 text-red-600'
      } ${className}`}
    >
      <Clock size={16} />
      {isOpen ? (
        <>
          <CheckCircle size={16} className="text-forest-600" />
          <span className="font-medium">{t('open')}</span>
          {closeTime && (
            <span className="text-sm opacity-70">until {closeTime}</span>
          )}
        </>
      ) : (
        <>
          <XCircle size={16} className="text-red-500" />
          <span className="font-medium">{t('closed')}</span>
          {openTime && (
            <span className="text-sm opacity-70">opens at {openTime}</span>
          )}
        </>
      )}
    </div>
  );
}

// Helper function to check if a venue is open based on current time
export function checkOpenStatus(
  schedule: { open: string; close: string } | { open: string; close: string }[]
): { isOpen: boolean; nextOpen?: string; nextClose?: string } {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Handle array of time slots (e.g., breakfast, lunch, dinner)
  if (Array.isArray(schedule)) {
    for (const slot of schedule) {
      const [openH, openM] = slot.open.split(':').map(Number);
      const [closeH, closeM] = slot.close.split(':').map(Number);
      const openTime = openH * 60 + openM;
      const closeTime = closeH * 60 + closeM;

      if (currentTime >= openTime && currentTime < closeTime) {
        return { isOpen: true, nextClose: slot.close };
      }
    }

    // Find next opening time
    for (const slot of schedule) {
      const [openH, openM] = slot.open.split(':').map(Number);
      const openTime = openH * 60 + openM;

      if (currentTime < openTime) {
        return { isOpen: false, nextOpen: slot.open };
      }
    }

    // If all slots passed, next opening is tomorrow
    return { isOpen: false, nextOpen: schedule[0]?.open };
  }

  // Handle single time slot
  const [openH, openM] = schedule.open.split(':').map(Number);
  const [closeH, closeM] = schedule.close.split(':').map(Number);
  const openTime = openH * 60 + openM;
  const closeTime = closeH * 60 + closeM;

  // Handle overnight hours (e.g., bar closes at 1 AM)
  if (closeTime < openTime) {
    if (currentTime >= openTime || currentTime < closeTime) {
      return { isOpen: true, nextClose: schedule.close };
    }
    return { isOpen: false, nextOpen: schedule.open };
  }

  if (currentTime >= openTime && currentTime < closeTime) {
    return { isOpen: true, nextClose: schedule.close };
  }

  if (currentTime < openTime) {
    return { isOpen: false, nextOpen: schedule.open };
  }

  return { isOpen: false, nextOpen: schedule.open };
}








