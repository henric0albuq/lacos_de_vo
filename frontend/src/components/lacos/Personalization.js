import { IMG, ASSETS, waLink, MSG, scrollToId } from '../../data';
import Reveal from './Reveal';
import { SectionHead, WaIcon, Sparkle, Squiggle } from './deco';

export default function Personalization() {
  return (
    <section id="personalizados" data-testid="personalizacao" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blush to-lavender rounded-[3rem] rotate-2" aria-hidden="true" />
            <img
              src={IMG.personalizacao}
              alt="Caixa de presente Laços de Vó com guloseimas e cartão feito à mão"
              loading="lazy"
              className="relative w-full h-[380px] md:h-[460px] object-cover rounded-[2.6rem] shadow-soft"
            />
            <img
              src={ASSETS.laco}
              alt=""
              aria-hidden="true"
              className="absolute -top-10 -right-4 md:-right-8 w-28 md:w-36 drop-shadow-lg animate-floaty pointer-events-none"
            />
            <Sparkle className="absolute -bottom-2 left-8 w-6 h-6 text-gold animate-sparkle" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <SectionHead
            center={false}
            eyebrow="personalização"
            title={<>O teu presente, <em className="italic text-rosedark font-light">ao teu jeitinho</em></>}
            sub="Diz-nos quem queres presentear e qual é a ocasião. A Laços de Vó ajuda-te a criar uma composição especial, pensada para essa pessoa."
          />
          <Reveal delay={0.15}>
            <Squiggle className="w-32 h-7 text-gold/70 mx-auto lg:mx-0 mt-6" aria-hidden="true" />
            <button
              data-testid="personalizar-cta"
              onClick={() => scrollToId('montar')}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-ink text-cream px-9 py-4 text-base font-medium shadow-soft hover:bg-roseink hover:-translate-y-0.5 hover:shadow-lift transition-all duration-300"
            >
              <WaIcon className="w-5 h-5" />
              Quero personalizar
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
