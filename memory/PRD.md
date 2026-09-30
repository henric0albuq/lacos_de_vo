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

## Atualizações (2026-09-29, tarde)
- Mascote da vovó recriada sem o artefato do terceiro braço; fundo limpo sem ruídos.
- Card do WhatsApp no "Fale conosco" agora mostra apenas o ícone (sem número), mantendo o link wa.me/351923340853.
- Fotos de banco de imagens removidas; todas as posições de produto (hero, 3 cards de produtos, personalização, galeria) usam as 4 fotos reais enviadas pela cliente:
  - cesta-cafe.jpg → hero principal + card Cestas de Café da Manhã + galeria (Cestas)
  - tabua-frios.jpg → card Tábuas de Frios + galeria (Tábuas de frios)
  - caixa-vinho.jpg → chip do hero + card Cestas Personalizadas + galeria (Presentes personalizados)
  - caixa-carinho.jpg → seção Personalização + galeria (Café da manhã)

## Atualização (2026-09-29, noite)
- Galeria reconstruída com as novas fotos enviadas: prato dourado de frios, tábua quadrada, foto de café (caneca I❤ + muffin) e caixa vermelha; bento sem buracos (cesta grande 2x2 como âncora).
- "Cestas Personalizadas" → "Cabazes Personalizados" (card de produto + marquee).

## Atualização (2026-09-29, noite II)
- Texto integral convertido de PT-BR para Português de Portugal, mantendo o tom afetivo/artesanal (tratamento por "tu": "Monta o teu presente", "Faz o teu pedido", "fala connosco", "à espera de um carinho", "partilhar", "pequeno almoço", "Contacto", "Cabazes de Pequeno Almoço").
- Mensagens pré-preenchidas do WhatsApp também em PT-PT ("um cabaz de pequeno almoço").
- Meta title/description do index.html em PT-PT.
## Montador de Cabaz (2026-09-29)
- Nova secção "Monta o teu cabaz em 1 minuto" (id=montar), entre "Como funciona" e a Galeria: 3 passos — 1) tipo de presente (cards com fotos reais: Cabaz de Pequeno Almoço / Cabaz Personalizado / Tábua de Frios), 2) ocasião (chips) + campo "Para quem é?" opcional, 3) acabamentos (extras multi-select) + nota para o cartão.
- Pré-visualização da mensagem do WhatsApp em tempo real (estilo balão de conversa) + botão "Enviar pedido pelo WhatsApp" (desativado até escolher o tipo).
- Funil: "Monta o teu presente" (hero) e "Quero personalizar" (personalização) agora rolam para o montador; os restantes CTAs continuam diretos no WhatsApp.
- Verificado por screenshot + interação real: seleção de tipo/ocasião/extras, campo de nome, mensagem composta correta e botão ativado.
- Próximo backlog: depoimentos, mais fotos reais na galeria.
- Extra "Brigadeiros caseiros" adicionado aos acabamentos especiais do montador (2026-09-29) — verificado no preview e na mensagem composta.
- Aviso "Sem entregas · recolha no local em Algueirão - Sintra" (PickupNote, 2026-09-29) repetido em 6 pontos ao longo do scroll: linha de confiança do hero, sob o título dos produtos, junto ao botão de envio do montador, no CTA final, em pílula destacada na secção de contacto e no rodapé. Verificado: 6 aparições no texto da página.

## Auditoria final (2026-09-29)
- Grep completo em src/ e public/: único resíduo PT-BR visível era o eyebrow "fale conosco" → corrigido para "fala connosco". Restantes ocorrências de "cesta" são apenas identificadores internos (ids, imports, testids), invisíveis ao utilizador.

## Backlog
- P0: — (nenhum bloqueador)
- P1: formulário de encomenda guiado no WhatsApp (montador de cesta); seção de depoimentos
- P2: página por categoria; integração com catálogo/Instagram; SEO avançado (dados estruturados)
