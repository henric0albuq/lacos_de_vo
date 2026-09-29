import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { waLink, MSG } from '../../data';
import { WaIcon } from './deco';

export default function FloatingWhats() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-[70]"
        >
          <a
            data-testid="floating-whatsapp"
            href={waLink(MSG.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2.5 bg-[#2FA860] text-white pl-4 pr-6 py-3.5 rounded-full shadow-lift hover:-translate-y-1 hover:bg-[#289053] transition-all duration-300"
            aria-label="Faça seu pedido pelo WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#2FA860]/50 animate-pulse-ring" aria-hidden="true" />
            <WaIcon className="w-6 h-6 relative" />
            <span className="relative text-sm font-medium">Faça seu pedido</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
