import { Instagram, Facebook, Mail } from 'lucide-react';
import { CONTACT } from '../../data';
import Reveal from './Reveal';
import { SectionHead, WaIcon } from './deco';

const CARDS = [
  { ...CONTACT.instagram, icon: Instagram, iconBg: 'bg-blush text-rosedark', testid: 'contact-instagram', href: CONTACT.instagram.href },
  { ...CONTACT.facebook, icon: Facebook, iconBg: 'bg-lavender text-roseink', testid: 'contact-facebook', href: CONTACT.facebook.href },
  { ...CONTACT.whatsapp, icon: WaIcon, iconBg: 'bg-[#E9F8EF] text-[#2FA860]', testid: 'contact-whatsapp', href: CONTACT.whatsapp.href, hideValue: true },
  { ...CONTACT.email, icon: Mail, iconBg: 'bg-creamdeep text-gold', testid: 'contact-email', href: CONTACT.email.href },
];

export default function Contact() {
  return (
    <section id="contato" data-testid="contato" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionHead
          eyebrow="fale conosco"
          title={<>Vamos preparar <em className="italic text-rosedark font-light">algo especial?</em></>}
          sub="Estamos a um clique de distância — escolhe o teu canal favorito e fala connosco."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {CARDS.map(({ icon: Icon, title, label, iconBg, testid, href, hideValue }, i) => (
            <Reveal key={testid} delay={i * 0.1} className="h-full">
              <a
                data-testid={testid}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 rounded-[1.8rem] bg-white/85 backdrop-blur px-6 py-9 text-center shadow-softer hover:shadow-soft hover:-translate-y-2 transition-all duration-400 h-full"
              >
                <span className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center ring-1 ring-white`}>
                  <Icon className="w-6 h-6" strokeWidth={1.6} />
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-inksoft">{title}</span>
                {!hideValue && (
                  <span className="font-medium text-ink break-all text-[15px] leading-snug">{label}</span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
