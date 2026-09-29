import logo from './assets/logo.png';
import face from './assets/face.png';
import mascote from './assets/mascote_clean.png';
import laco from './assets/laco_final.png';

export const ASSETS = { logo, face, mascote, laco };

export const WHATSAPP_NUMBER = '351923340853';
export const WHATSAPP_DISPLAY = '923 340 853';

export const MSG = {
  geral: 'Olá! Vim pelo site e gostaria de fazer um pedido.',
  cesta: 'Olá! Quero encomendar uma cesta de café da manhã.',
  personalizada: 'Olá! Quero montar um presente personalizado.',
  tabua: 'Olá! Quero encomendar uma tábua de frios.',
};

export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const CONTACT = {
  instagram: {
    href: 'https://instagram.com/lacosdevocestas',
    label: '@lacosdevocestas',
    title: 'Instagram',
  },
  facebook: {
    href: 'https://www.facebook.com/lacosdevocestas',
    label: 'lacosdevocestas',
    title: 'Facebook',
  },
  whatsapp: {
    href: waLink(MSG.geral),
    label: WHATSAPP_DISPLAY,
    title: 'WhatsApp',
  },
  email: {
    href: 'mailto:lacosdevocestas@gmail.com',
    label: 'lacosdevocestas@gmail.com',
    title: 'E-mail',
  },
};

export const NAV_LINKS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Nossos produtos', id: 'produtos' },
  { label: 'Cestas', id: 'cestas' },
  { label: 'Tábuas de frios', id: 'tabuas' },
  { label: 'Personalizados', id: 'personalizados' },
  { label: 'Sobre nós', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  else el.scrollIntoView({ behavior: 'smooth' });
};

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const p = (id, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroMain: u('photo-1773450970959-cef81e9b1053', 1100),
  heroChip: p(11000896, 640),
  cestas: u('photo-1641924676578-ed2792eb24de'),
  personalizadas: u('photo-1773450970981-793e2d72d820'),
  tabuas: u('photo-1773754109448-13d2af138059'),
  personalizacao: u('photo-1782061932586-c8a425a67e3f', 1100),
};

export const GALLERY = [
  { src: u('photo-1773450970959-cef81e9b1053'), cat: 'Cestas', span: 'md:col-span-2 md:row-span-2' },
  { src: p(6990558, 640), cat: 'Cestas', span: '' },
  { src: u('photo-1641924676578-ed2792eb24de'), cat: 'Café da manhã', span: 'md:row-span-2' },
  { src: u('photo-1675125530909-15213f01a9e1'), cat: 'Café da manhã', span: '' },
  { src: p(30199566), cat: 'Tábuas de frios', span: 'md:col-span-2' },
  { src: u('photo-1773754109448-13d2af138059'), cat: 'Tábuas de frios', span: '' },
  { src: p(11000896), cat: 'Presentes personalizados', span: 'md:col-span-2' },
  { src: u('photo-1589458456444-f7158a7e8a4f'), cat: 'Presentes personalizados', span: '' },
];

export const GALLERY_FILTERS = [
  'Todos',
  'Cestas',
  'Café da manhã',
  'Tábuas de frios',
  'Presentes personalizados',
];
