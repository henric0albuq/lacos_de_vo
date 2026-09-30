import Reveal from './Reveal';
import { SectionHead } from './deco';

const STEPS = [
  { n: '01', title: 'Escolhe', text: 'Escolhe um cabaz, uma tábua ou um presente personalizado.' },
  { n: '02', title: 'Preparamos', text: 'Montamos tudo com carinho e atenção a cada detalhe.' },
  { n: '03', title: 'Surpreende', text: 'Um presente pronto para arrancar sorrisos e criar uma memória especial.' },
  { n: '04', title: 'Recolhe', text: 'Vens buscar o teu cabaz em Algueirão - Sintra — aqui não fazemos entregas.' },
];

export default function HowItWorks() {
  return (
    <section data-testid="como-funciona" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="como funciona"
          title={<>Simples assim, <em className="italic text-rosedark font-light">carinho assim</em></>}
        />
        <div className="relative mt-16">
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-rose/50" aria-hidden="true" />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <div data-testid={`passo-${i + 1}`} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-white ring-1 ring-gold/50 shadow-softer flex items-center justify-center">
                    <span className="font-serif text-2xl text-gold italic">{s.n}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
                  <p className="text-inksoft text-[15px] leading-relaxed mt-2.5 max-w-[250px]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
