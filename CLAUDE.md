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
- Caixas de ícone (especialidades/tecnologia) usam fundo off-white `#F6F4EF` com borda dourada sutil — combinação pedida explicitamente pela cliente.
- Marca d'água decorativa (`simbolo-adulto-verde.png`, opacity 0.05, ~380px, `pointer-events:none`) preenche o vazio lateral de algumas seções **somente em desktop grande (1280px+)** — alterna esquerda/direita entre seções para criar ritmo (sobre→esquerda, tecnologia→direita, depoimentos→esquerda, faq→direita, localização→esquerda, guias.html→esquerda).

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
├── guias.html          (grade 3x3 de capas dos 9 Guias de Pós-Atendimento)
├── guia.html           (visualizador dinâmico — recebe ?g=slug e renderiza as páginas)
├── css/style.css       (mobile-first, CSS custom properties, compartilhado por todas as páginas)
├── js/
│   ├── main.js         (menu, carrossel, FAQ, animações — compartilhado por todas as páginas)
│   ├── guias-data.js   (objeto GUIAS com metadados de cada guia — incluído em guia.html)
│   └── guias.js        (órfão — não referenciado por nenhuma página; mantido só como rascunho
│                         de conteúdo de alguns guias caso seja útil futuramente)
└── assets/
    ├── images/         (logos, placeholders — aguardando arquivos reais)
    └── guias/          (conteúdo dos guias, um subdiretório por guia)
        └── alinhadores-invisiveis/
            ├── alinhadores-invisiveis-01.jpg … alinhadores-invisiveis-14.jpg
            ├── guia-alinhadores-invisiveis.pdf
            └── capa-alinhadores-invisiveis.jpg
```

## Funcionalidades Implementadas
- Header fixo, transparente no topo e com fundo branco translúcido + sombra sutil ao rolar
- Menu hamburger com drawer lateral (mobile, fundo branco) / nav horizontal (desktop)
- Menu com 3 itens, nesta ordem: **Início** (`#inicio`) / **Contato & Localização** (`#localizacao`
  — consolida os antigos itens separados "Contato" e "Localização", que já eram a mesma área) /
  **Guias de Pós-Atendimento** (`guias.html` — página separada, ver abaixo). Mesmo menu no header
  (desktop+drawer mobile) e nos "Links rápidos" do footer, nas duas páginas.
- Smooth scroll + indicador de seção ativa (IntersectionObserver) — só atua nos 2 links que têm
  `data-section` (Início/Contato & Localização); o link de Guias não participa (é outra página).
- Hero com overlay claro (branco translúcido) + badges de credibilidade
- Seção Sobre com foto placeholder + badge "30+ anos"
- 2 cards de especialidades (Odontopediatria / Ortodontia)
- 3 cards de Tecnologia (Anestesia Eletrônica, Scanner 3D, Câmera HD)
- Galeria: carrossel touch (mobile) / grid 3 colunas (desktop)
- Seção de Convênios com 5 cards: **3 na primeira fileira + 2 centralizados na segunda**
  (flexbox com `flex-wrap` a partir de 768px; no mobile permanece como grid de 3 colunas, sem alteração)
- Carrossel de Depoimentos com autoplay 6s + arrows + swipe — **4 depoimentos reais** de pacientes
  (substituíram os 4 fictícios); cards mais largos no desktop (620px, ~2-2.5 visíveis por vez, era
  480px/~3.5 visíveis) para acomodar textos mais longos; altura uniforme via `align-items:stretch`
  no track + `height:auto` no card
- **Sistema de Guias de Pós-Atendimento** — duas páginas:
  - `guias.html`: grade 3x3 (desktop) / 2 colunas (tablet) / 1 coluna (mobile) de capas dos 9
    guias. Cards com capa real usam `<img class="guia-cover-card__bg">` + overlay verde escuro
    sempre visível + número e título em branco centralizados. Cards sem capa ainda mantêm o
    placeholder off-white. Ao clicar, abre `guia.html?g=[slug]`.
  - `guia.html`: visualizador dinâmico único para todos os guias. Lê `?g=slug` via JS, busca
    a config em `GUIAS` (definido em `js/guias-data.js`), e gera: eyebrow "Guia de
    Pós-Atendimento", `<h1>` com o título, botões "Baixar PDF" (atributo download) e
    "Compartilhar" (wa.me sem número, apenas com texto+URL), todas as páginas empilhadas
    verticalmente como `<img class="guia-viewer__page" loading="lazy">` (primeira é eager),
    e botão "Voltar aos Guias" no topo e no fim. Se o slug não existir em GUIAS, exibe
    mensagem amigável e link de volta.
  - **Guia ativo (implementado):** `alinhadores-invisiveis` — 14 páginas JPG + PDF + capa.
  - A seção de Guias e o modal de guia que existiam no `index.html` foram removidos de lá.
- FAQ Accordion (8 perguntas)
- Localização com mapa Google + dados de contato
- Footer completo com Instagram (Facebook foi removido — cliente só usa Instagram)
- Botão flutuante WhatsApp e todos os CTAs "Falar/Agendar pelo WhatsApp" usam o SVG oficial completo (balão + telefone) — não usar o ícone genérico `message-circle` do Lucide
- Mapa de Localização com pin/marcador nomeado da clínica (embed por busca `q=`, sem necessidade de API key)
- Animações fade-up nos cards (IntersectionObserver)
- **Desktop grande (1280px+):** container sobe de 1280px para 1360px, `--section-gap` sobe para
  140px, e o `html{font-size}` sobe de 16px para 18px (+12.5%) — como quase todo o site usa `rem`,
  isso escala headlines/subtítulos/corpo proporcionalmente sem precisar editar seletor por
  seletor, e não afeta mobile/tablet. Marca d'água decorativa do símbolo da marca aparece só
  nesse breakpoint (ver Identidade Visual).
- SEO: meta tags, OG, Schema.org (Dentist) — `guias.html` tem meta tags próprias mas sem o
  Schema.org Dentist duplicado (esse fica só na home).

## Como Adicionar um Novo Guia

1. Criar pasta `assets/guias/[slug]/` com:
   - `[slug]-01.jpg` … `[slug]-NN.jpg` — páginas em ordem (número com zero à esquerda)
   - `guia-[slug].pdf` — PDF para download
   - `capa-[slug].jpg` — imagem de capa para o card em `guias.html`
2. Adicionar uma entrada em `js/guias-data.js` (dentro do objeto `GUIAS`):
   ```js
   '[slug]': {
     titulo: 'Título do Guia',
     slug:   '[slug]',
     paginas: N,
     pdf:    'guia-[slug].pdf'
   }
   ```
3. Em `guias.html`, no card correspondente:
   - Trocar `href="#"` por `href="guia.html?g=[slug]"`
   - Substituir `<div class="guia-cover-card__placeholder">` por:
     `<img src="assets/guias/[slug]/capa-[slug].jpg" alt="" aria-hidden="true" class="guia-cover-card__bg">`
   - Remover o comentário `<!-- SUBSTITUIR ... -->` acima do card

## Pontos de Substituição Pendentes
1. **Foto hero** — `assets/images/hero-bg.jpg`
2. **Foto Dra. Helena** — `assets/images/dra-helena.jpg`
3. **Logos dos convênios** — 5 cards aguardando logos oficiais
4. **Fotos da clínica** — 6 placeholders na galeria
5. **Endereço completo** — CLSW 302, sala e bloco exatos
6. **Iframe Google Maps** — substituir com embed correto da clínica
7. **CRO-DF** — número do CRO da Dra. Helena
8. **Guias 02 a 09** — capas, PDFs e páginas JPG dos 8 guias restantes (cada um segue o processo
   de 3 passos em "Como Adicionar um Novo Guia" acima). `js/guias.js` tem rascunhos de conteúdo
   de alguns guias que podem ser reaproveitados como referência.
9. **Formação acadêmica** — graduação e especializações reais
10. **Link do Instagram** — URL real do perfil da clínica
11. **Place/endereço exato no Google Maps** — assim que a ficha da Sorria no Google Meu Negócio tiver o endereço completo (CLSW 302, sala/bloco), gerar o embed definitivo (Compartilhar > Incorporar mapa, ou place_id) para o pin oficial
12. **Fotos dos pacientes nos depoimentos** — Ilma Costa Nascimento, Suzana de Albuquerque, Aline Gonçalves Costa Henrique, Milk Alves (hoje usam iniciais em círculo)

## Copyright
© 2026 Sorria Instituto Odontológico
