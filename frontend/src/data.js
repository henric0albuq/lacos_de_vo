import logo from './assets/logo.png';
import face from './assets/face.png';
import mascote from './assets/mascote_clean.png';
import laco from './assets/laco_final.png';
import cestaCafe from './assets/cesta-cafe.jpg';
import tabuaFrios from './assets/tabua-frios.jpg';
import caixaVinho from './assets/caixa-vinho.jpg';
import caixaCarinho from './assets/caixa-carinho.jpg';

export const ASSETS = { logo, face, mascote, laco };

export const PRODUCT_PHOTOS = { cestaCafe, tabuaFrios, caixaVinho, caixaCarinho };

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

export const IMG = {
  heroMain: cestaCafe,
  heroChip: caixaVinho,
  cestas: cestaCafe,
  personalizadas: caixaVinho,
  tabuas: tabuaFrios,
  personalizacao: caixaCarinho,
};

export const GALLERY = [
  { src: cestaCafe, cat: 'Cestas', span: 'md:col-span-2 md:row-span-2' },
  { src: tabuaFrios, cat: 'Tábuas de frios', span: '' },
  { src: caixaVinho, cat: 'Presentes personalizados', span: '' },
  { src: caixaCarinho, cat: 'Café da manhã', span: '' },
];

export const GALLERY_FILTERS = [
  'Todos',
  'Cestas',
  'Café da manhã',
  'Tábuas de frios',
  'Presentes personalizados',
];
