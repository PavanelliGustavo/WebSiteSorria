# Sorria Instituto Odontológico — Documentação do Projeto

## Cliente
**Dra. Helena Pavanelli** — Odontopediatria e Ortodontia
**Local:** Centro Clínico Sudoeste, Brasília/DF
**Site:** https://sorriaodontologia.com.br

## Stack Técnica
- HTML5 semântico + CSS3 custom (sem Tailwind)
- JavaScript vanilla (sem frameworks)
- Lucide Icons (via CDN unpkg)
- Google Fonts: **Quicksand** (títulos) + **Nunito** (corpo/UI)

## Identidade Visual Oficial

> Fundo claro (branco/off-white) com verde escuro como cor principal (títulos, botões,
> marca) e dourado reservado a acentos pontuais. Substituiu a versão anterior de fundo
> verde, que "não funcionou" segundo a cliente.

### Paleta de Cores
```
--bg-primary:     #FFFFFF   /* Fundo principal — branco */
--bg-secondary:   #F6F4EF   /* Off-white quente p/ seções alternadas */
--bg-elevated:    #FFFFFF   /* Cards e modais — branco com sombra suave */
--bg-card:        #FFFFFF

--green-dark:     #43523D   /* Verde escuro — COR PRINCIPAL: títulos, botões, marca, ícones de marca */
--green-medium:   #5e7355   /* Verde médio — hover de botões/links verdes */
--green-soft:     #699367   /* Verde suave — tom de apoio (documentação de marca) */
--green-light:    #7ABC8E   /* Verde claro — tom de apoio infantil (documentação de marca) */

--gold:           #B8923C   /* Dourado — ACENTO, usado com parcimônia */
--gold-hover:     #9c7b30   /* Dourado mais escuro p/ hover */
--gold-border:    rgba(184,146,60,0.25)
--gold-divider:   rgba(184,146,60,0.35)

--border-soft:    rgba(67,82,61,0.10)   /* contornos estruturais neutros sobre fundo claro */

--text-body:      #2A2E27   /* Texto de corpo — parágrafos, listas */
--text-secondary: #5a6356   /* Texto secundário — subtítulos, legendas com mais peso */
--text-muted:     #8a9184   /* Texto auxiliar — legendas, rodapé, captions */

--color-black:    #0D0D0D   /* Preto Profundo oficial */
```

### Hierarquia de cores (regra geral)
- **Fundos:** branco, alternando com off-white `#F6F4EF` a cada seção para dar profundidade.
- **Títulos/headlines/marca:** verde escuro `#43523D` — não usar branco nem dourado.
- **Texto de corpo:** `#2A2E27` (contraste 13.8:1 no branco).
- **Botão primário** (maior destaque, ex. "Agendar Avaliação"): fundo verde escuro, texto branco. **Botão secundário:** borda + texto verde escuro, fundo transparente. Nenhum botão usa fundo dourado.
- **Dourado** é acento e aparece só em: ícones pequenos (lucide/SVG), sublinhados/divisores decorativos, o `<em>` itálico de destaque nas headlines/títulos de card, hover de links, estrelas de avaliação, bullets dos guias, e o sorriso da logo/símbolos. Nunca em texto de corpo ou títulos.
- Caixas de ícone (especialidades/tecnologia/guias) usam fundo off-white `#F6F4EF` com borda dourada sutil — combinação pedida explicitamente pela cliente.

> Nota de contraste: dourado `#B8923C` sobre branco mede ~2.9:1 — abaixo de AA mesmo para
> texto grande. É um trade-off aceito conscientemente pela cliente ("usado com parcimônia"),
> por isso o dourado foi removido de toda a leitura corrida (eyebrows, labels, nav, CRO,
> convênios passaram a usar `--green-dark`) e mantido só nos usos acima, que são decorativos
> ou ícones. `--text-muted` (#8a9184) também mede só ~3.25:1 no branco — aceitável para
> legendas curtas/rodapé, mas por isso a descrição dos guias (`guia-card__desc`) foi promovida
> para `--text-secondary` (6.26:1), por carregar informação mais relevante.

### Tipografia
- **Títulos, headlines e destaques:** Quicksand (500, 600, 700)
- **Corpo, parágrafos, menus, labels e guias:** Nunito (400, 600, 700)
- A fonte **Isidora Soft** é exclusiva da marca/logo (a logo já vem como imagem pronta — não é usada no texto do site).

### Logo
- Arquivos oficiais em `assets/images/brand/`: `logo-horizontal-branca.png`, `logo-horizontal-verde.png`, `logo-vertical-branca.png`, `simbolo-branco.png`, `simbolo-verde.png`, `logo-odontopediatria-branca.png`, `logo-odontopediatria-cor.png`, `simbolo-adulto-branco.png`, `simbolo-adulto-verde.png`, `simbolo-bebe-branco.png`, `simbolo-bebe-cor.png`.
- Header e footer usam a versão **verde horizontal** (`logo-horizontal-verde.png`) — fundo agora é claro, a logo branca ficaria invisível. As versões brancas continuam disponíveis para uso futuro sobre fundos escuros (ex. se algum componente específico mantiver fundo verde).
- Favicon gerado a partir de `simbolo-adulto-verde.png`.

### Ícones de rosto/sorriso = símbolo da marca
- Qualquer ícone genérico de rosto/sorriso no site usa `simbolo-adulto-verde.png` (institucional, versão colorida para fundo claro) — substitui ícones como o `smile` do Lucide (badge "Ortodontia" no hero, ícone do guia "Aparelho Ortodôntico").
- **Card de Odontopediatria** (seção Especialidades): ícone é `simbolo-bebe-cor.png` (símbolo colorido com detalhe infantil).
- **Card de Ortodontia**: ícone é `simbolo-adulto-verde.png`.
- Ambos ficam dentro da caixa de ícone com fundo off-white `#F6F4EF` e borda dourada sutil.

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
- Header fixo, transparente no topo e com fundo branco translúcido + sombra sutil ao rolar
- Menu hamburger com drawer lateral (mobile, fundo branco) / nav horizontal (desktop)
- Smooth scroll + indicador de seção ativa (IntersectionObserver)
- Hero com overlay claro (branco translúcido) + badges de credibilidade
- Seção Sobre com foto placeholder + badge "30+ anos"
- 2 cards de especialidades (Odontopediatria / Ortodontia)
- 3 cards de Tecnologia (Anestesia Eletrônica, Scanner 3D, Câmera HD)
- Galeria: carrossel touch (mobile) / grid 3 colunas (desktop)
- Seção de Convênios com 5 cards (Plan-Assiste, STJ, STF, SIS/Senado, Bacen)
- Carrossel de Depoimentos com autoplay 6s + arrows + swipe
- FAQ Accordion (8 perguntas)
- 9 Guias Pós-Atendimento em modal full-screen
- Localização com iframe Google Maps + dados de contato
- Footer completo com Instagram (Facebook foi removido — cliente só usa Instagram)
- Botão flutuante WhatsApp e todos os CTAs "Falar/Agendar pelo WhatsApp" usam o SVG oficial completo (balão + telefone) — não usar o ícone genérico `message-circle` do Lucide
- Mapa de Localização com pin/marcador nomeado da clínica (embed por busca `q=`, sem necessidade de API key)
- Animações fade-up nos cards (IntersectionObserver)
- SEO: meta tags, OG, Schema.org (Dentist)

## Pontos de Substituição Pendentes
1. **Foto hero** — `assets/images/hero-bg.jpg`
2. **Foto Dra. Helena** — `assets/images/dra-helena.jpg`
3. **Logos dos convênios** — 5 cards aguardando logos oficiais
4. **Fotos da clínica** — 6 placeholders na galeria
5. **Endereço completo** — CLSW 302, sala e bloco exatos
6. **Iframe Google Maps** — substituir com embed correto da clínica
7. **CRO-DF** — número do CRO da Dra. Helena
8. **Conteúdo dos guias** — textos profissionais reais (9 guias)
9. **Formação acadêmica** — graduação e especializações reais
10. **Link do Instagram** — URL real do perfil da clínica
11. **Place/endereço exato no Google Maps** — assim que a ficha da Sorria no Google Meu Negócio tiver o endereço completo (CLSW 302, sala/bloco), gerar o embed definitivo (Compartilhar > Incorporar mapa, ou place_id) para o pin oficial

## Copyright
© 2026 Sorria Instituto Odontológico
