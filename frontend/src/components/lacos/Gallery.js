import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GALLERY, GALLERY_FILTERS, ASSETS } from '../../data';
import Reveal from './Reveal';
import { SectionHead } from './deco';

export default function Gallery() {
  const [cat, setCat] = useState('Todos');
  const items = cat === 'Todos' ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  return (
    <section id="tabuas" data-testid="galeria" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="galeria"
          title={<>Um gostinho do que <em className="italic text-rosedark font-light">fazemos</em></>}
          sub="Um catálogo vivo de composições — cada uma feita à mão, uma a uma."
        />

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                data-testid={`gallery-filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setCat(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  cat === f
                    ? 'bg-rosedark text-white shadow-softer'
                    : 'bg-white/80 text-inksoft ring-1 ring-petal hover:text-rosedark hover:ring-rose'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] grid-flow-dense gap-3 md:gap-4 mt-10">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.figure
                key={g.src}
                layout
                data-testid={`gallery-item-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-[1.6rem] overflow-hidden shadow-softer hover:shadow-soft transition-shadow duration-500 ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.cat}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1100ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roseink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute left-3 bottom-3 bg-white/85 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-medium text-roseink shadow-softer translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {g.cat}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
          {cat === 'Todos' && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 relative rounded-[1.6rem] bg-gradient-to-br from-blush via-cream to-lavender ring-1 ring-white flex flex-col items-center justify-center text-center p-6 overflow-hidden"
              data-testid="gallery-brand-panel"
            >
              <img src={ASSETS.laco} alt="" aria-hidden="true" className="w-16 mb-2 drop-shadow-md" />
              <p className="font-script text-2xl md:text-3xl text-roseink leading-tight">Feito à mão,<br />uma a uma</p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-inksoft mt-2">cada composição é única</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
