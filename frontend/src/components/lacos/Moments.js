import { HeartHandshake, Coffee, Gift } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHead } from './deco';

const CARDS = [
  {
    icon: HeartHandshake,
    title: 'Carinho em cada detalhe',
    text: 'Composições preparadas com atenção para tornar cada momento especial.',
    bg: 'bg-white',
    iconBg: 'bg-blush text-rosedark',
  },
  {
    icon: Coffee,
    title: 'Sabores que encantam',
    text: 'Cestas e tábuas pensadas para surpreender desde o primeiro olhar.',
    bg: 'bg-lavender/70',
    iconBg: 'bg-white text-roseink',
  },
  {
    icon: Gift,
    title: 'Presentes personalizados',
    text: 'Você escolhe o momento. Nós ajudamos a transformar sua ideia em um presente inesquecível.',
    bg: 'bg-blush/80',
    iconBg: 'bg-white text-rosedark',
  },
];

export default function Moments() {
  return (
    <section data-testid="moments" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="feito para momentos especiais"
          title={<>Um carinho em forma <em className="italic text-rosedark font-light">de presente</em></>}
          sub="Na Laços de Vó, cada detalhe é pensado para transformar um simples presente em uma experiência cheia de sabor, afeto e significado."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {CARDS.map(({ icon: Icon, title, text, bg, iconBg }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div
                data-testid={`moment-card-${i}`}
                className={`${bg} rounded-[2rem] p-8 shadow-softer hover:shadow-soft hover:-translate-y-2 transition-all duration-500 h-full`}
              >
                <div className={`w-14 h-14 rounded-full ${iconBg} shadow-softer flex items-center justify-center`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-ink mt-6">{title}</h3>
                <p className="text-inksoft leading-relaxed mt-3 text-[15px]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
