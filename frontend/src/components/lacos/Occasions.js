import { Cake, Heart, Flower2, Users, Infinity as InfinityIcon, CalendarHeart, Coffee, Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHead } from './deco';

const OCCASIONS = [
  { icon: Cake, label: 'Aniversários' },
  { icon: Heart, label: 'Dia dos Namorados' },
  { icon: Flower2, label: 'Dia das Mães' },
  { icon: Users, label: 'Dia dos Pais' },
  { icon: InfinityIcon, label: 'Aniversário de casamento' },
  { icon: CalendarHeart, label: 'Datas especiais' },
  { icon: Coffee, label: 'Pequeno almoço surpresa' },
  { icon: Briefcase, label: 'Presentes corporativos' },
];

export default function Occasions() {
  return (
    <section data-testid="ocasoes" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent via-lavender/40 to-transparent">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="ocasiões"
          title={<>Para celebrar todos os <em className="italic text-rosedark font-light">tipos de amor</em></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">
          {OCCASIONS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.08}>
              <div
                data-testid={`ocasiao-${i}`}
                className="flex flex-col items-center gap-4 rounded-[1.8rem] bg-white/80 backdrop-blur px-4 py-8 text-center shadow-softer hover:shadow-soft hover:-translate-y-1.5 hover:bg-white transition-all duration-400 h-full"
              >
                <span className="w-14 h-14 rounded-full bg-blush text-rosedark flex items-center justify-center ring-1 ring-petal">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </span>
                <span className="text-ink font-medium text-[15px] leading-snug">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
