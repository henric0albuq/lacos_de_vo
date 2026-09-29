import { BowDoodle } from './deco';

const ITEMS = [
  'Cestas de café da manhã',
  'Tábuas de frios',
  'Presentes personalizados',
  'Cabazes personalizados',
  'Datas especiais',
  'Feito com carinho',
];

const Track = ({ hidden }) => (
  <div className="flex items-center shrink-0" aria-hidden={hidden || undefined}>
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center shrink-0">
        <span className="font-script text-2xl md:text-[1.8rem] text-roseink/90 px-8 whitespace-nowrap">{item}</span>
        <BowDoodle className="w-5 h-5 text-rosedark shrink-0" />
      </span>
    ))}
  </div>
);

export default function Marquee() {
  return (
    <section data-testid="marquee" className="relative py-6 overflow-hidden" aria-label="Especialidades da casa">
      <div className="-rotate-1 bg-gradient-to-r from-petal via-blush to-lavender border-y border-white/70 py-3.5 shadow-softer overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
