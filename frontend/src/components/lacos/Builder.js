import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { IMG, waLink } from '../../data';
import Reveal from './Reveal';
import { SectionHead, WaIcon } from './deco';

const TYPES = [
  { id: 'cabaz', label: 'Cabaz de Pequeno Almoço', img: IMG.cestas },
  { id: 'personalizado', label: 'Cabaz Personalizado', img: IMG.personalizadas },
  { id: 'tabua', label: 'Tábua de Frios', img: IMG.tabuas },
];

const TYPE_LABELS = {
  cabaz: 'Cabaz de Pequeno Almoço',
  personalizado: 'Cabaz Personalizado',
  tabua: 'Tábua de Frios',
};

const OCASIOES = ['Aniversário', 'Dia dos Namorados', 'Dia das Mães', 'Dia dos Pais', 'Casamento', 'Só porque sim'];
const EXTRAS = ['Flores secas', 'Laço premium', 'Cartão com mensagem', 'Vinho', 'Chocolates', 'Vela aromática'];

const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w]+/g, '-');

const StepTitle = ({ n, title }) => (
  <div className="flex items-center gap-3">
    <span className="w-9 h-9 rounded-full bg-blush text-rosedark font-serif italic flex items-center justify-center text-sm shrink-0">{n}</span>
    <h3 className="font-serif text-xl text-ink">{title}</h3>
  </div>
);

export default function Builder() {
  const [tipo, setTipo] = useState(null);
  const [ocasiao, setOcasiao] = useState(null);
  const [nome, setNome] = useState('');
  const [extras, setExtras] = useState([]);
  const [nota, setNota] = useState('');

  const toggleExtra = (x) =>
    setExtras((prev) => (prev.includes(x) ? prev.filter((e) => e !== x) : [...prev, x]));

  const message = useMemo(() => {
    if (!tipo) return '';
    const lines = ['Olá! Vim pelo site e quero fazer um pedido:', '', `Presente: ${TYPE_LABELS[tipo]}`];
    if (ocasiao) lines.push(`Ocasião: ${ocasiao}`);
    if (nome.trim()) lines.push(`Para: ${nome.trim()}`);
    if (extras.length) lines.push(`Extras: ${extras.join(', ')}`);
    if (nota.trim()) lines.push('', `Mensagem: ${nota.trim()}`);
    return lines.join('\n');
  }, [tipo, ocasiao, nome, extras, nota]);

  return (
    <section id="montar" data-testid="montador" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="pointer-events-none absolute -left-40 top-1/3 w-[420px] h-[420px] rounded-full bg-lavender blur-3xl opacity-60" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="monta ao teu jeitinho"
          title={<>Monta o teu cabaz <em className="italic text-rosedark font-light">em 1 minuto</em></>}
          sub="Escolhe o tipo, diz-nos a ocasião e envia — a tua mensagem chega pronta no nosso WhatsApp."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 bg-white rounded-[2.5rem] p-6 md:p-12 shadow-soft ring-1 ring-petal/60 grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
            <div className="space-y-9 text-left">
              <div>
                <StepTitle n="1" title="Escolhe o tipo de presente" />
                <div className="grid sm:grid-cols-3 gap-3 mt-5">
                  {TYPES.map((t) => {
                    const active = tipo === t.id;
                    return (
                      <button
                        key={t.id}
                        data-testid={`builder-type-${t.id}`}
                        onClick={() => setTipo(t.id)}
                        className={`relative rounded-2xl overflow-hidden ring-1 transition-all duration-300 text-left group ${
                          active ? 'ring-2 ring-rosedark shadow-soft' : 'ring-petal hover:ring-rose hover:shadow-softer'
                        }`}
                      >
                        <img src={t.img} alt={t.label} loading="lazy" className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-500" />
                        {active && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-rosedark text-white flex items-center justify-center shadow"
                          >
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </motion.span>
                        )}
                        <span className={`block p-3 text-sm font-medium leading-snug ${active ? 'text-roseink' : 'text-ink'}`}>{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <StepTitle n="2" title="Qual é a ocasião?" />
                <div className="flex flex-wrap gap-2 mt-5">
                  {OCASIOES.map((o) => (
                    <button
                      key={o}
                      data-testid={`builder-ocasiao-${slug(o)}`}
                      onClick={() => setOcasiao((prev) => (prev === o ? null : o))}
                      className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                        ocasiao === o
                          ? 'bg-rosedark text-white shadow-softer'
                          : 'bg-cream text-inksoft ring-1 ring-petal hover:text-rosedark hover:ring-rose'
                      }`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                <input
                  data-testid="builder-nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Para quem é? (opcional) — ex.: A minha mãe"
                  className="mt-4 w-full rounded-2xl bg-cream/60 ring-1 ring-petal focus:ring-rose outline-none px-5 py-3.5 text-[15px] text-ink placeholder:text-inksoft/60 transition-shadow"
                />
              </div>

              <div>
                <StepTitle n="3" title="Acabamentos especiais" />
                <div className="flex flex-wrap gap-2 mt-5">
                  {EXTRAS.map((x) => {
                    const active = extras.includes(x);
                    return (
                      <button
                        key={x}
                        data-testid={`builder-extra-${slug(x)}`}
                        onClick={() => toggleExtra(x)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                          active
                            ? 'bg-rosedark text-white shadow-softer'
                            : 'bg-cream text-inksoft ring-1 ring-petal hover:text-rosedark hover:ring-rose'
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                        {x}
                      </button>
                    );
                  })}
                </div>
                <textarea
                  data-testid="builder-nota"
                  value={nota}
                  onChange={(e) => setNota(e.target.value)}
                  rows={2}
                  placeholder="Nota para o cartão ou pedidos especiais (opcional)"
                  className="mt-4 w-full rounded-2xl bg-cream/60 ring-1 ring-petal focus:ring-rose outline-none px-5 py-3.5 text-[15px] text-ink placeholder:text-inksoft/60 resize-none transition-shadow"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-inksoft">
                <Sparkles className="w-4 h-4 text-gold" />
                Pré-visualização da mensagem
              </div>
              <div
                data-testid="builder-preview"
                className="mt-3 flex-1 rounded-[1.6rem] bg-gradient-to-br from-blush/70 via-cream to-lavender/70 p-5 sm:p-7 flex items-center"
              >
                {message ? (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[1.3rem] rounded-tl-md px-5 py-4 shadow-softer w-full"
                  >
                    <p className="whitespace-pre-line text-[15px] leading-relaxed text-ink">{message}</p>
                    <p className="text-right text-[10px] text-inksoft/70 mt-2">agora ✓✓</p>
                  </motion.div>
                ) : (
                  <p className="italic text-inksoft/80 text-[15px] leading-relaxed">
                    Escolhe o tipo de presente para ver a tua mensagem aqui…
                  </p>
                )}
              </div>
              <button
                data-testid="builder-send"
                disabled={!message}
                onClick={() => window.open(waLink(message), '_blank', 'noopener')}
                className={`mt-5 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-medium transition-all duration-300 ${
                  message
                    ? 'bg-[#2FA860] text-white shadow-lift hover:bg-[#289053] hover:-translate-y-0.5'
                    : 'bg-petal/50 text-inksoft cursor-not-allowed'
                }`}
              >
                <WaIcon className="w-5 h-5" />
                Enviar pedido pelo WhatsApp
              </button>
              {!message && (
                <p className="text-xs text-inksoft mt-3 text-center">Escolhe primeiro o tipo de presente — nós montamos a mensagem por ti.</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
