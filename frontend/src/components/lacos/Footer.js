import { Instagram, Facebook } from 'lucide-react';
import { ASSETS, CONTACT, NAV_LINKS, scrollToId } from '../../data';
import { WaIcon, HeartDoodle } from './deco';

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-gradient-to-b from-[#F6E3EA] to-[#EDE6F5] pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col items-center text-center gap-7">
        <img src={ASSETS.logo} alt="Logo Laços de Vó — cabaz de pequeno almoço & tábuas de frios" className="w-40 md:w-48 drop-shadow-sm" />
        <p className="font-script text-2xl md:text-[1.7rem] leading-snug text-roseink max-w-md">
          Cada laço guarda uma história.
          <br />
          Cada sabor, um carinho.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-1" aria-label="Links do rodapé">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`footer-link-${l.id}`}
              onClick={() => scrollToId(l.id)}
              className="text-sm text-ink/70 hover:text-rosedark transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 mt-2">
          <a data-testid="footer-instagram" href={CONTACT.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/80 shadow-softer flex items-center justify-center text-roseink hover:bg-white hover:-translate-y-1 transition-all duration-300"><Instagram className="w-5 h-5" /></a>
          <a data-testid="footer-facebook" href={CONTACT.facebook.href} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white/80 shadow-softer flex items-center justify-center text-roseink hover:bg-white hover:-translate-y-1 transition-all duration-300"><Facebook className="w-5 h-5" /></a>
          <a data-testid="footer-whatsapp" href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-white/80 shadow-softer flex items-center justify-center text-roseink hover:bg-white hover:-translate-y-1 transition-all duration-300"><WaIcon className="w-5 h-5" /></a>
        </div>

        <div className="w-full border-t border-rosedark/15 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-inksoft">© {new Date().getFullYear()} Laços de Vó · Cabaz de pequeno almoço & tábuas de frios</p>
          <p className="inline-flex items-center gap-1.5 text-xs text-inksoft">
            Feito com
            <HeartDoodle className="w-3.5 h-3.5 text-rosedark" />
            pela Laços de Vó
          </p>
        </div>
      </div>
    </footer>
  );
}
