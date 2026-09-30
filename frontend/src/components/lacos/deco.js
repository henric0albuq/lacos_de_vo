import { MapPin } from 'lucide-react';

import Reveal from './Reveal';

export const WaIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const HeartDoodle = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M12 20.3s-7.5-4.6-9.3-9.2C1.4 7.6 3.5 4.5 6.8 4.5c2 0 3.7 1.1 4.6 2.7.2.4.5.4.7 0 .9-1.6 2.6-2.7 4.6-2.7 3.3 0 5.4 3.1 4.1 6.6-1.8 4.6-8.8 9.2-8.8 9.2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Sparkle = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.8c.6 3.9 2.4 6.2 6.5 6.9.3.1.3.5 0 .6-4.1.7-5.9 3-6.5 6.9-.1.4-.6.4-.7 0-.6-3.9-2.4-6.2-6.5-6.9-.3-.1-.3-.5 0-.6 4.1-.7 5.9-3 6.5-6.9.1-.4.6-.4.7 0z" />
    <path d="M18.9 15.5c.3 1.9 1.2 3 3.2 3.4.2 0 .2.3 0 .3-2 .4-2.9 1.5-3.2 3.4 0 .2-.3.2-.4 0-.3-1.9-1.2-3-3.2-3.4-.2 0-.2-.3 0-.3 2-.4 2.9-1.5 3.2-3.4 0-.2.4-.2.4 0z" opacity="0.7" />
  </svg>
);

export const BowDoodle = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <path d="M10.2 12C6.5 8.6 3 8.8 3 11.2c0 2.3 3.6 2.6 7.2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.8 12c3.7-3.4 7.2-3.2 7.2-.8 0 2.3-3.6 2.6-7.2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.2 12.4c-1.7 2.6-2.6 5-2.1 7.1M13.8 12.4c1.7 2.6 2.6 5 2.1 7.1" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
  </svg>
);

export const Squiggle = ({ className = 'w-24 h-6' }) => (
  <svg viewBox="0 0 120 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <path d="M2 14c10-12 20 8 30-1s20 8 30-1 20 8 30-1 20 8 26 2" strokeLinecap="round" />
  </svg>
);

export const GoldRing = ({ className = 'w-40 h-40' }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
    <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 7" />
  </svg>
);

export const SectionHead = ({ eyebrow, title, sub, center = true }) => (
  <Reveal className={center ? 'text-center' : 'text-left'}>
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : 'justify-start'}`}>
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      <span className="font-script text-2xl md:text-[1.7rem] text-rosedark leading-none">{eyebrow}</span>
      <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
    </div>
    <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4 text-balance leading-[1.08]">{title}</h2>
    {sub && <p className={`text-inksoft mt-5 max-w-xl leading-relaxed ${center ? 'mx-auto' : ''}`}>{sub}</p>}
  </Reveal>
);

export const PickupNote = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-2 text-[13px] text-inksoft ${className}`}>
    <MapPin className="w-4 h-4 text-gold shrink-0" />
    <span>
      Sem entregas · recolha no local em <span className="font-medium text-roseink">Algueirão - Sintra</span>
    </span>
  </span>
);
