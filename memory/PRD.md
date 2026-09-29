# PRD — Laços de Vó (Landing Page)

## Problema original
Criar uma landing page moderna, elegante, acolhedora e visualmente chamativa para a empresa "Laços de Vó" (cabazes de pequeno almoço, cestas personalizadas, tábuas de frios e composições para datas especiais), usando o cartão de visitas fornecido como referência visual principal: preservar a logo original do cartão, a ilustração da senhora, a paleta (rosa pastel, rosa antigo, lilás, lavanda, creme, dourado suave) e os dados de contato exatos.

## Decisões confirmadas pelo usuário
- WhatsApp: +351 (Portugal) → wa.me/351923340853
- Imagens de produto: fotos reais apetitosas (Unsplash/Pexels)

## Arquitetura
- Frontend: React (CRA) + Tailwind + framer-motion + lenis (scroll suave) — página única, sem backend necessário.
- Assets: `src/assets/` — logo recortada do cartão (feathered PNG), rosto circular da vó, mascote da vovó gerada por IA a partir do cartão (fundo removido), laço em aquarela gerado por IA (fundo removido).
- Fontes: Fraunces (serifada), Outfit (sans), Parisienne (script).
- Favicon: SVG de laço em rosa (public/favicon.svg).

## Seções implementadas (2026-09-29)
1. Navbar fixa glassmorphism (sólida ao rolar, hamburger animado no mobile, CTA WhatsApp)
2. Hero 2 colunas com revelação mascarada linha a linha, parallax, composição com foto em arco + medalhão da vó + laço
3. Marquee editorial lento (script + ícones de laço)
4. "Um carinho em forma de presente" — 3 cards
5. "Nossos queridinhos" — 3 cards grandes com CTA WhatsApp específico por produto
6. "Para celebrar todos os tipos de amor" — grade de 8 ocasiões (ícones lineares)
7. Personalização — "Seu presente, do seu jeitinho" + CTA
8. Seção da mascote vovó + balão com o slogan exato
9. Como funciona — 3 passos com linha tracejada
10. Galeria catálogo premium (bento + filtros por categoria)
11. CTA final emocional + @lacosdevocestas
12. Contato (Instagram, Facebook, WhatsApp 923 340 853, e-mail) — todos clicáveis
13. Footer rosa/lilás com logo original, slogan, links e redes
14. Botão flutuante WhatsApp "Faça seu pedido" + indicadores de confiança

## Verificação
- Screenshots desktop (1440) e mobile (390): hero, menu, produtos, ocasiões, personalização, mascote, galeria, CTA, contato, footer — OK
- overflow-x mobile corrigido (marquee) — OK
- wa.me/351923340853 → 302 api.whatsapp.com com telefone e mensagem pré-preenchida — OK

## Backlog
- P0: — (nenhum bloqueador)
- P1: formulário de encomenda guiado no WhatsApp (montador de cesta); seção de depoimentos
- P2: página por categoria; integração com catálogo/Instagram; SEO avançado (dados estruturados)
