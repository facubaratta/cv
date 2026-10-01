import type { DateRange, Locale, ResumeDate } from '../types/resume';

function formatDate(date: ResumeDate, locale: Locale): string {
  if (date.month === undefined) return String(date.year);
  const label = new Intl.DateTimeFormat(locale, {
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(date.year, date.month - 1, 1)));
  return `${label.charAt(0).toUpperCase()}${label.slice(1)} ${date.year}`;
}

export function formatPeriod(period: DateRange, locale: Locale): string {
  const start = formatDate(period.start, locale);
  if (!period.end) return start;
  const end = period.end === 'present'
    ? (locale === 'en' ? 'Present' : 'Presente')
    : formatDate(period.end, locale);
  return `${start} ‒ ${end}`;
}
