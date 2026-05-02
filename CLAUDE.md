# Sorria Instituto Odontológico — Documentação do Projeto

## Cliente
**Dra. Helena Pavanelli** — Odontopediatria e Ortodontia
**Local:** Centro Clínico Sudoeste, Brasília/DF
**Site:** https://sorriaodontologia.com.br

## Stack Técnica
- HTML5 semântico + CSS3 custom (sem Tailwind)
- JavaScript vanilla (sem frameworks)
- Lucide Icons (via CDN unpkg)
- Google Fonts: **Playfair Display** (títulos) + **Montserrat** (corpo/UI)

## Identidade Visual Oficial

### Paleta de Cores
```
--bg-primary:     #1F3D2B   /* Verde Principal */
--bg-secondary:   #2E5E44   /* Verde Secundário */
--bg-elevated:    #1a3324   /* Verde escuro (modais, drawer) */
--bg-card:        rgba(255,255,255,0.04)  /* Glassmorphism */

--gold:           #C2A46D   /* Dourado Elegante — cor oficial */
--gold-light:     #d4b87e   /* Dourado claro (hover) */
--gold-muted:     #a8894f   /* Dourado escuro (bordas) */

--text-primary:   #F5F5F2   /* Off White oficial */
--text-secondary: #c8d4cc   /* Texto secundário sobre verde */
--text-disabled:  #7a9080   /* Texto desabilitado */

--color-black:    #0D0D0D   /* Preto Profundo oficial */
```

### Tipografia
- **Títulos e destaques:** Playfair Display (400, 600, 700)
- **Corpo, UI, botões, labels:** Montserrat (300, 400, 500, 600, 700)

## Informações Reais da Clínica
- **Telefone:** (61) 3797-3006
- **WhatsApp:** (61) 98111-8014 — wa.me/5561981118014
- **E-mail:** contato@sorriaodontologia.com.br
- **Horário:** Segunda a Sexta — 8h às 18h (sem atendimento aos sábados)
- **Experiência:** +30 anos

## Tecnologias Oficiais (Seção "Nossos Diferenciais")
1. **Anestesia Eletrônica** — fluxo controlado e indolor
2. **Scanner Intraoral 3D** — sem massa de moldagem
3. **Câmera Intraoral HD** — visualização em tempo real

## Convênios Aceitos
1. Plan-Assiste
2. STJ
3. STF
4. SIS/Senado
5. Bacen

## Estrutura de Arquivos
```
SorriaWebSite/
├── index.html
├── css/style.css       (mobile-first, CSS custom properties)
├── js/
│   ├── main.js         (menu, carrossel, FAQ, animações)
│   └── guias.js        (9 guias pós-atendimento + modal)
└── assets/images/      (placeholders — aguardando arquivos reais)
```

## Funcionalidades Implementadas
- Header fixo com blur on scroll
- Menu hamburger com drawer lateral (mobile) / nav horizontal (desktop)
- Smooth scroll + indicador de seção ativa (IntersectionObserver)
- Hero com overlay verde + badges de credibilidade
- Seção Sobre com foto placeholder + badge "30+ anos"
- 2 cards de especialidades (Odontopediatria / Ortodontia)
- 3 cards de Tecnologia (Anestesia Eletrônica, Scanner 3D, Câmera HD)
- Galeria: carrossel touch (mobile) / grid 3 colunas (desktop)
- Seção de Convênios com 5 cards (Plan-Assiste, STJ, STF, SIS/Senado, Bacen)
- Carrossel de Depoimentos com autoplay 6s + arrows + swipe
- FAQ Accordion (8 perguntas)
- 9 Guias Pós-Atendimento em modal full-screen
- Localização com iframe Google Maps + dados de contato
- Footer completo com redes sociais
- Botão flutuante WhatsApp (#25D366, SVG oficial)
- Animações fade-up nos cards (IntersectionObserver)
- SEO: meta tags, OG, Schema.org (Dentist)

## Pontos de Substituição Pendentes
1. **Logo** — `assets/images/logo-sorria.png` (versão "sobre cor institucional" do manual)
2. **Foto hero** — `assets/images/hero-bg.jpg`
3. **Foto Dra. Helena** — `assets/images/dra-helena.jpg`
4. **Logos dos convênios** — 5 cards aguardando logos oficiais
5. **Fotos da clínica** — 6 placeholders na galeria
6. **Endereço completo** — CLSW 302, sala e bloco exatos
7. **Iframe Google Maps** — substituir com embed correto da clínica
8. **CRO-DF** — número do CRO da Dra. Helena
9. **Conteúdo dos guias** — textos profissionais reais (9 guias)
10. **Formação acadêmica** — graduação e especializações reais
11. **Links de redes sociais** — Instagram e Facebook reais

## Copyright
© 2026 Sorria Instituto Odontológico
