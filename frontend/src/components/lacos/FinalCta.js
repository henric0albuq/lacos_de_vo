import { ASSETS, CONTACT, waLink, MSG } from '../../data';
import Reveal from './Reveal';
import { WaIcon, HeartDoodle, Sparkle, PickupNote } from './deco';

export default function FinalCta() {
  return (
    <section data-testid="cta-final" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blush via-cream to-lavender border border-white px-6 py-16 md:py-24 text-center shadow-soft">
            <img src={ASSETS.laco} alt="" aria-hidden="true" className="absolute -left-8 -top-8 w-36 md:w-48 opacity-90 rotate-[-14deg] pointer-events-none" />
            <HeartDoodle className="absolute right-[12%] top-10 w-7 h-7 text-rose animate-floaty pointer-events-none" aria-hidden="true" />
            <Sparkle className="absolute right-[6%] bottom-12 w-6 h-6 text-gold animate-sparkle pointer-events-none" aria-hidden="true" />
            <HeartDoodle className="absolute left-[14%] bottom-10 w-5 h-5 text-lilac animate-floaty pointer-events-none" aria-hidden="true" />

            <h2 className="relative font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-ink max-w-3xl mx-auto text-balance">
              Há alguém especial à espera <em className="italic text-rosedark font-light">de um carinho?</em>
            </h2>
            <p className="relative text-inksoft text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-6">
              Escolhe o teu presente e deixa a Laços de Vó transformar o teu momento numa lembrança deliciosa.
            </p>
            <div className="relative mt-10">
              <a
                data-testid="final-cta-whatsapp"
                href={waLink(MSG.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#2FA860] text-white px-10 py-5 text-lg font-medium shadow-lift hover:bg-[#289053] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700" aria-hidden="true" />
                <WaIcon className="w-6 h-6" />
                Fazer o meu pedido pelo WhatsApp
              </a>
            </div>
            <a
              data-testid="final-cta-instagram"
              href={CONTACT.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 mt-8 text-roseink font-medium hover:text-rosedark transition-colors"
            >
              <span className="underline decoration-gold/60 underline-offset-4">@lacosdevocestas</span>
            </a>
            <div className="relative mt-6 flex justify-center">
              <PickupNote />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
