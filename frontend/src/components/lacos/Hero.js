import { motion, useScroll, useTransform } from 'framer-motion';
import { IMG, ASSETS, waLink, MSG } from '../../data';
import { WaIcon, HeartDoodle, Sparkle, BowDoodle } from './deco';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const lineReveal = {
  hidden: { y: '112%' },
  show: { y: '0%', transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

const TRUST = [
  { icon: HeartDoodle, label: 'Feito com carinho' },
  { icon: Sparkle, label: 'Personalizamos para você' },
  { icon: BowDoodle, label: 'Cada detalhe importa' },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yPhoto = useTransform(scrollY, [0, 700], [0, 55]);
  const yDeco = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section id="inicio" data-testid="hero" className="relative overflow-hidden pt-28 md:pt-36 pb-14 lg:pb-20">
      <div className="pointer-events-none absolute -top-24 -left-32 w-[480px] h-[480px] rounded-full bg-blush blur-3xl opacity-80" aria-hidden="true" />
      <div className="pointer-events-none absolute top-40 -right-40 w-[520px] h-[520px] rounded-full bg-lavender blur-3xl opacity-80" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 text-center lg:text-left">
          <motion.div variants={lineReveal} className="inline-flex items-center gap-3 justify-center lg:justify-start">
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-rosedark">
              Cabaz de pequeno almoço & tábuas de frios
            </span>
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
          </motion.div>

          <h1 className="font-serif text-[2.7rem] leading-[1.04] sm:text-6xl lg:text-[4.35rem] text-ink mt-6">
            <span className="block overflow-hidden pb-1"><motion.span variants={lineReveal} className="block">Presentes que</motion.span></span>
            <span className="block overflow-hidden pb-1"><motion.span variants={lineReveal} className="block"><em className="italic font-light text-rosedark">abraçam.</em></motion.span></span>
            <span className="block overflow-hidden pb-2"><motion.span variants={lineReveal} className="block">Sabores que ficam</motion.span></span>
            <span className="block overflow-hidden pb-3"><motion.span variants={lineReveal} className="block font-script text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-roseink leading-[1.15]">na memória.</motion.span></span>
          </h1>

          <motion.p variants={lineReveal} className="text-inksoft text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mt-6">
            Cestas de café da manhã, presentes personalizados e tábuas de frios preparados com
            carinho para transformar momentos especiais em lembranças inesquecíveis.
          </motion.p>

          <motion.div variants={lineReveal} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-9">
            <a
              data-testid="hero-cta-presente"
              href={waLink(MSG.personalizada)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-rosedark text-white px-8 py-4 text-base font-medium shadow-soft hover:bg-roseink hover:-translate-y-0.5 hover:shadow-lift transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
              <BowDoodle className="w-5 h-5" />
              Montar meu presente
            </a>
            <a
              data-testid="hero-cta-whatsapp"
              href={waLink(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur text-ink px-8 py-4 text-base font-medium ring-1 ring-petal hover:ring-rose hover:-translate-y-0.5 hover:shadow-softer transition-all duration-300"
            >
              <WaIcon className="w-5 h-5 text-[#2FA860]" />
              Falar pelo WhatsApp
            </a>
          </motion.div>

          <motion.div variants={lineReveal} className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-9">
            {TRUST.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-[13px] text-inksoft">
                <Icon className="w-4 h-4 text-gold" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative h-[440px] sm:h-[540px] lg:h-[600px]">
          <motion.div style={{ y: yDeco }} className="absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-[46%_54%_58%_42%/50%_44%_56%_50%] bg-gradient-to-br from-petal via-blush to-lavender opacity-90" />
            <Sparkle className="absolute left-4 top-14 w-6 h-6 text-gold animate-sparkle" />
            <Sparkle className="absolute right-8 bottom-24 w-4 h-4 text-gold/80 animate-sparkle" style={{ animationDelay: '1.2s' }} />
            <HeartDoodle className="absolute right-2 top-10 w-6 h-6 text-rose animate-floaty" />
            <HeartDoodle className="absolute left-8 bottom-16 w-4 h-4 text-lilac animate-floaty" style={{ animationDelay: '0.8s' }} />
          </motion.div>

          <motion.div
            style={{ y: yPhoto }}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 sm:right-6 lg:right-2 top-4 w-[76%] max-w-[360px]"
          >
            <div className="bg-white/85 backdrop-blur p-3 rounded-b-[2.4rem] rounded-t-[999px] shadow-soft ring-1 ring-white">
              <img
                src={IMG.heroMain}
                alt="Cabaz de pequeno almoço com flores e guloseimas"
                className="w-full h-[380px] sm:h-[470px] lg:h-[520px] object-cover rounded-b-[2rem] rounded-t-[999px]"
                loading="eager"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 sm:left-4 top-8"
          >
            <div className="bg-white p-1.5 rounded-full shadow-soft ring-1 ring-petal animate-floaty">
              <img src={ASSETS.face} alt="A vó da Laços de Vó" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-2 sm:left-8 bottom-6"
          >
            <div className="bg-white p-2.5 rounded-2xl shadow-soft ring-1 ring-petal w-32 sm:w-36">
              <img src={IMG.heroChip} alt="Caixa de presente com vinho e frios" className="w-full h-28 sm:h-32 object-cover rounded-xl" loading="eager" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-2 right-4 sm:right-14 w-28 sm:w-36 pointer-events-none"
          >
            <img src={ASSETS.laco} alt="" className="w-full drop-shadow-lg" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
