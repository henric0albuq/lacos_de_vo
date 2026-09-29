import { motion } from 'framer-motion';
import { ASSETS } from '../../data';
import Reveal from './Reveal';
import { HeartDoodle, Sparkle, BowDoodle, GoldRing } from './deco';

export default function Mascot() {
  return (
    <section id="sobre" data-testid="sobre" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-blush via-cream to-lavender opacity-70 blur-3xl" aria-hidden="true" />
      <GoldRing className="absolute left-[6%] top-16 w-28 h-28 text-gold/50 animate-spin pointer-events-none" aria-hidden="true" />
      <Sparkle className="absolute right-[10%] top-24 w-7 h-7 text-gold animate-sparkle pointer-events-none" aria-hidden="true" />
      <HeartDoodle className="absolute right-[16%] bottom-20 w-6 h-6 text-rose animate-floaty pointer-events-none" aria-hidden="true" />
      <BowDoodle className="absolute left-[12%] bottom-16 w-7 h-7 text-lilac animate-floaty pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-5 md:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center relative">
        <Reveal className="relative flex justify-center">
          <motion.img
            data-testid="mascote-vovo"
            src={ASSETS.mascote}
            alt="Ilustração da vó de Laços de Vó, sorrindo e acenando"
            loading="lazy"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-72 sm:w-80 lg:w-full max-w-[400px] drop-shadow-2xl"
          />
          <Sparkle className="absolute top-6 right-[22%] w-5 h-5 text-gold animate-sparkle" aria-hidden="true" />
          <HeartDoodle className="absolute bottom-10 right-[12%] w-5 h-5 text-rose/80 animate-floaty" aria-hidden="true" />
        </Reveal>

        <div className="relative">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-rosedark">Sobre nós</span>
            </div>
            <div className="relative bg-white rounded-[2.5rem] p-9 md:p-12 mt-5 shadow-soft ring-1 ring-petal/70">
              <Sparkle className="absolute -top-4 right-10 w-8 h-8 text-gold animate-sparkle" aria-hidden="true" />
              <span className="font-serif text-6xl text-goldsoft leading-none block" aria-hidden="true">&ldquo;</span>
              <p data-testid="mascote-slogan" className="font-script text-3xl md:text-[2.5rem] leading-[1.35] text-roseink">
                Cada laço guarda uma história.
                <br />
                Cada sabor, um carinho.
              </p>
              <span className="absolute -bottom-[14px] left-14 w-7 h-7 bg-white rotate-45 border-b border-r border-petal/70 rounded-br-md" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8">
              {['Feito com carinho', 'Personalizamos para ti', 'Cada detalhe importa'].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-[13px] text-inksoft">
                  <BowDoodle className="w-4 h-4 text-gold" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
