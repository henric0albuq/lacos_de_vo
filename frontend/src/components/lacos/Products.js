import { IMG, waLink, MSG } from '../../data';
import Reveal from './Reveal';
import { SectionHead, WaIcon, Sparkle } from './deco';

const PRODUCTS = [
  {
    id: 'cestas',
    img: IMG.cestas,
    alt: 'Cesta de café da manhã servida na cama',
    title: 'Cestas de Café da Manhã',
    text: 'Comece o dia de alguém especial com uma cesta cheia de sabores, carinho e surpresas.',
    cta: 'Quero uma cesta',
    msg: MSG.cesta,
    testid: 'product-cta-cestas',
  },
  {
    id: 'personalizadas',
    img: IMG.personalizadas,
    alt: 'Caixa de presente gourmet personalizada',
    title: 'Cestas Personalizadas',
    text: 'Monte um presente único de acordo com a personalidade e o momento de quem você ama.',
    cta: 'Personalizar presente',
    msg: MSG.personalizada,
    testid: 'product-cta-personalizadas',
  },
  {
    id: 'tabuas',
    img: IMG.tabuas,
    alt: 'Tábua de frios com queijos, frutas e castanhas',
    title: 'Tábuas de Frios',
    text: 'Uma composição deliciosa e sofisticada para compartilhar, comemorar e criar boas memórias.',
    cta: 'Quero uma tábua',
    msg: MSG.tabua,
    testid: 'product-cta-tabuas',
  },
];

export default function Products() {
  return (
    <section id="produtos" data-testid="produtos" className="relative py-20 md:py-28">
      <Sparkle className="absolute right-[8%] top-16 w-6 h-6 text-gold/70 animate-sparkle pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="os favoritos da casa"
          title={<>Nossos <em className="italic text-rosedark font-light">queridinhos</em></>}
          sub="Escolha o que mais combina com o momento — nós tratamos de todo o resto, com capricho."
        />
        <div id="cestas" className="grid md:grid-cols-3 gap-7 mt-14 scroll-mt-28">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12} className="h-full">
              <article
                data-testid={`product-card-${p.id}`}
                className="group bg-white rounded-[2.2rem] p-3 shadow-softer hover:shadow-lift hover:-translate-y-2 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative rounded-[1.8rem] overflow-hidden h-64">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[900ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roseink/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="font-serif text-[1.7rem] leading-snug text-ink">{p.title}</h3>
                  <p className="text-inksoft leading-relaxed mt-2.5 text-[15px] flex-1">{p.text}</p>
                  <a
                    data-testid={p.testid}
                    href={waLink(p.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-blush text-roseink px-6 py-3.5 text-[15px] font-medium ring-1 ring-petal hover:bg-rosedark hover:text-white hover:ring-rosedark hover:shadow-soft transition-all duration-300"
                  >
                    <WaIcon className="w-4 h-4" />
                    {p.cta}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
