export type Locale = 'en' | 'es';

export interface Link {
  href: string;
  label: string;
}

export interface Bullet {
  label?: string;
  text: string;
  children?: Bullet[];
}

export interface ResumeDate {
  year: number;
  month?: number;
}

export interface DateRange {
  start: ResumeDate;
  end?: ResumeDate | 'present';
}

export interface Entry {
  title: string;
  period: DateRange;
  organization?: string;
  description?: string;
  href?: string;
  bullets?: Bullet[];
  courses?: Pick<Entry, 'title' | 'organization' | 'description' | 'href'>[];
  projects?: { name: string; description: string; href: string }[];
}

export interface Resume {
  locale: Locale;
  description: string;
  controls: { note: string; download: string };
  education: { title: string; entries: Entry[] };
  skills: { title: string; items: { label: string; value: string }[] };
  experience: { title: string; entries: Entry[] };
  languages: { title: string; items: { name: string; detail: string; synergy?: Link }[] };
}
