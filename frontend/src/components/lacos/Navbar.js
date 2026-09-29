import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { NAV_LINKS, scrollToId, waLink, MSG, ASSETS, CONTACT } from '../../data';
import { WaIcon } from './deco';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      window.__lenis && window.__lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      window.__lenis && window.__lenis.start();
      document.body.style.overflow = '';
    }
    return () => {
      window.__lenis && window.__lenis.start();
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 80);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl shadow-softer py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          <button
            data-testid="nav-logo"
            onClick={() => go('inicio')}
            className="flex items-center gap-3 group"
            aria-label="Laços de Vó — voltar ao início"
          >
            <img
              src={ASSETS.face}
              alt="Ilustração da vó, marca Laços de Vó"
              className="w-11 h-11 rounded-full ring-2 ring-white shadow-softer bg-white p-[2px] group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-left leading-none">
              <span className="block font-script text-[1.65rem] text-roseink">laços de vó</span>
              <span className="hidden md:block text-[9px] tracking-[0.22em] uppercase text-inksoft mt-1">
                cabaz & tábuas de frios
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="relative text-[15px] text-ink/75 hover:text-rosedark transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-rosedark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              data-testid="nav-cta"
              href={waLink(MSG.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rosedark text-white px-6 py-3 text-sm font-medium shadow-softer hover:bg-roseink hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300"
            >
              <WaIcon className="w-4 h-4" />
              Fazer o meu pedido
            </a>
            <button
              data-testid="nav-menu-toggle"
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 rounded-full bg-white/80 backdrop-blur shadow-softer flex items-center justify-center text-roseink hover:bg-white transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-cream/97 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img src={ASSETS.face} alt="" className="w-10 h-10 rounded-full ring-2 ring-white shadow-softer" />
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="w-11 h-11 rounded-full bg-white shadow-softer flex items-center justify-center text-roseink"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`mobile-link-${l.id}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(l.id)}
                  className="font-serif text-3xl py-2.5 text-ink hover:text-rosedark transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                data-testid="mobile-menu-cta"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.45 }}
                href={waLink(MSG.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-rosedark text-white px-8 py-4 text-base font-medium shadow-soft"
              >
                <WaIcon className="w-5 h-5" />
                Fazer o meu pedido
              </motion.a>
            </nav>
            <div className="pb-10 flex items-center justify-center gap-4">
              <a data-testid="mobile-social-instagram" href={CONTACT.instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white shadow-softer flex items-center justify-center text-roseink hover:bg-blush transition-colors"><Instagram className="w-5 h-5" /></a>
              <a data-testid="mobile-social-facebook" href={CONTACT.facebook.href} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white shadow-softer flex items-center justify-center text-roseink hover:bg-blush transition-colors"><Facebook className="w-5 h-5" /></a>
              <a data-testid="mobile-social-whatsapp" href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-white shadow-softer flex items-center justify-center text-roseink hover:bg-blush transition-colors"><WaIcon className="w-5 h-5" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
