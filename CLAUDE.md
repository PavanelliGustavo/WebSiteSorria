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
--gold-light:     #e0c489   /* Dourado claro — para dourado sobre fundo ESCURO (hover da galeria) */
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
- **Card "Primeiro Sorriso"** (Odontopediatria, seção Especialidades): ícone é `simbolo-bebe-cor.png` (símbolo colorido com detalhe infantil).
- **Cards "Sorriso em Transformação"** (Ortodontia) e **"Sorriso para Toda a Vida"** (adultos): ícone é `simbolo-adulto-verde.png`.
- Os três ficam dentro da caixa de ícone com fundo off-white `#F6F4EF` e borda dourada sutil.

## Informações Reais da Clínica
- **Endereço:** Centro Clínico Sudoeste — SHCSW Bloco 3/4/5, Sala 238 — Brasília/DF — CEP 70673-416
  (aparece em: schema.org `PostalAddress` do `index.html`, seção "Onde Estamos", link "Como chegar",
  embed do mapa e rodapé das três páginas — manter os cinco pontos em sincronia)
- **Telefone:** (61) 3797-3006
- **WhatsApp:** (61) 98111-8014 — wa.me/5561981118014
- **E-mail:** contato@sorriaodontologia.com.br
- **Horário:** Segunda a Sexta — 8h às 18h (sem atendimento aos sábados)
- **Experiência:** +30 anos

## Tecnologias Oficiais (Seção "Nossos Diferenciais")
Título da seção: **"Tecnologia que torna sua experiência melhor"** — o foco do texto é o
BENEFÍCIO ao paciente, não o equipamento. Cada card tem uma frase de chamada
(`.tec-card__chamada`, dourado itálico em Quicksand) acima do nome do equipamento:
1. **Anestesia Computadorizada** — _"Mais conforto desde o primeiro minuto."_
2. **Scanner Intraoral 3D** — _"Adeus às moldagens desconfortáveis."_
3. **Câmera Intraoral HD** — _"Você entende o seu tratamento."_

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
│   └── guias.js        (órfão — não referenciado por nenhuma página. Com os 9 guias publicados
│                         perdeu a função de rascunho e ainda guarda TÍTULOS ANTIGOS
│                         ("Placa de Bruxismo", "Sequência de Erupção...") — ignorar em buscas;
│                         candidato a remoção)
└── assets/
    ├── images/         (logos, placeholders — aguardando arquivos reais)
    └── guias/          (conteúdo dos guias — 9 subdiretórios, um por guia, todos publicados)
        ├── alinhadores-invisiveis/   (14 páginas)
        ├── aparelho-ortodontico/     (15)
        ├── clareamento/              (11)
        ├── trauma-dental/            (14)
        ├── placa-contencao/          (16)
        ├── placa-bruxismo/           (17)
        ├── pos-extracao/             (15)
        ├── expansor/                 (15)
        └── primeiros-dentinhos/      (16)
            ├── [slug]-01.jpg … [slug]-NN.jpg   (páginas, zero à esquerda)
            ├── guia-[slug].pdf                 (download)
            └── capa-[slug].jpg                 (capa do card)
```

## Funcionalidades Implementadas
> **Regra de conteúdo × layout (vale para todo o site):** o CONTEÚDO (textos, cards, listas,
> legendas, perguntas) é sempre o MESMO em desktop e mobile — nunca criar um texto ou card que
> exista só numa das telas. O que pode variar entre as telas é apenas a ORGANIZAÇÃO/LAYOUT
> (grade vs. carrossel, empilhamento, tamanho de fonte, espaçamentos). Por isso as seções que
> viram carrossel no mobile (Equipe, Especialidades, Galeria) repetem exatamente os mesmos
> itens do desktop — e, na Galeria, que tem markup duplicado (grid + carrossel), qualquer
> alteração de conteúdo precisa ser aplicada NOS DOIS blocos.

- Header fixo, transparente no topo e com fundo branco translúcido + sombra sutil ao rolar
- Menu hamburger com drawer lateral (mobile, fundo branco) / nav horizontal (desktop)
- Menu com 3 itens, nesta ordem: **Início** (`#inicio`) / **Contato & Localização** (`#localizacao`
  — consolida os antigos itens separados "Contato" e "Localização", que já eram a mesma área) /
  **Guias de Pós-Atendimento** (`guias.html` — página separada, ver abaixo). Mesmo menu no header
  (desktop+drawer mobile) e nos "Links rápidos" do footer, nas duas páginas.
- Smooth scroll + indicador de seção ativa (IntersectionObserver) — só atua nos 2 links que têm
  `data-section` (Início/Contato & Localização); o link de Guias não participa (é outra página).
- **Mobile (≤767px) — ajustes exclusivos** (não afetam desktop):
  - `html + body { overflow-x: hidden }` — elimina scroll lateral em toda a viewport.
  - Header: botão "Agendar Avaliação" oculto (`display: none`) — só logo + hambúrguer visíveis.
  - Hero: `min-height: auto` (em vez dos `100dvh` do desktop) + paddings/margens internas
    reduzidos — sem isso sobrava um vão vazio grande, porque o conteúdo centralizado não
    preenchia a tela. Como o `.hero__scroll-indicator` é `position:absolute; bottom:32px`, ele
    fica `display:none` no mobile (sem os 100dvh colidiria com os selos).
  - Tecnologia: os TRÊS cards no mesmo formato, empilhados em 1 coluna
    (`grid-template-columns: 1fr`). O antigo 3º card "largo" (`grid-column: 1 / -1`) foi removido.
  - Convênios: layout 2+2+1 — o `.convenios__grid` vira `flex` com `flex-wrap` + `justify-content: center` e TODOS os `.convenio-item` recebem `flex: 0 0 calc(50% - 6px)`, garantindo largura idêntica nos 5 cards (o 5º centraliza sozinho na última fileira). Desktop continua 3+2 flex com reset explícito no 768px+ breakpoint.
  - Carrosséis (galeria + depoimentos): usam **scroll-snap nativo** no mobile (`overflow-x: auto` + `scroll-snap-type: x mandatory` no track, `scroll-snap-align: start` nos slides). O `main.js` detecta o modo via `_isScrollMode()` (`getComputedStyle(track).overflowX !== 'visible'`): em scroll mode o `goTo()` usa `scrollTo` e os dots sincronizam por evento `scroll`; no desktop segue o modo `transform` com os handlers de toque antigos. O `goTo()` calcula o destino como `slides[idx].offsetLeft - slides[0].offsetLeft`, e não somando larguras — assim não quebra quando o trilho tem padding lateral.
  - **`touch-action` nos 4 carrosséis horizontais — tem que listar as DUAS direções.**
    A regra base do `.carousel__track` é `touch-action: pan-y`, que bloqueia o arraste
    horizontal por toque; o bloco mobile sobrescreve com **`touch-action: pan-x pan-y`**.
    Já erramos esse valor duas vezes em sentidos opostos: só `pan-y` matava o swipe do
    carrossel, e depois só `pan-x` prendia a página (um gesto vertical iniciado sobre o
    trilho deixava de rolar o ancestral, e o usuário tinha que tocar fora para descer).
    Com as duas direções o navegador decide pela direção do gesto. **Não há
    `preventDefault()` envolvido:** o `touchmove` do `_bindTouch()` dá early-return quando
    `_isScrollMode()` é true, então no mobile o scroll é 100% nativo.
  - **Respiro lateral dos carrosséis** (`--container-px`, para alinhar com o resto da
    página): cada trilho recebe `padding-inline-start` **e** `scroll-padding-inline`. O
    `scroll-padding` é o que importa — sem ele o 1º card nasce afastado, mas todos os
    seguintes encostam na borda da tela ao fazer snap. Para o respiro **final**, galeria e
    depoimentos se apoiam no `margin-right` que todo slide já tem (inclusive o último),
    enquanto equipe e especialidades usam `gap` e por isso ganham um spacer
    `::after { flex: 0 0 var(--container-px) }` — o `padding-inline-end` do contêiner é
    ignorado por alguns navegadores no overflow de flex, então não dá para confiar nele.
  - **Equipe e Especialidades viram carrossel** (`.equipe__grid` / `.especialidades__grid`):
    reaproveitam o mesmo mecanismo nativo — `display:flex` + `overflow-x:auto` +
    `scroll-snap-type: x mandatory` + `touch-action: pan-x pan-y`, com `scroll-snap-align: start` nos
    filhos (`.equipe__photo` a 68% e `.especialidade-card` a 88% da largura, deixando prévia do
    próximo). **Sem JS**: não são instâncias da classe `Carousel` justamente para não aplicarem
    `transform` no desktop, onde as duas seções voltam a ser grade lado a lado. O
    `margin-inline` negativo + `padding-inline` faz o trilho sangrar até a borda mantendo o
    primeiro item alinhado ao container; o `padding-block: 8px` evita que a sombra dos cards
    seja cortada pelo `overflow`.
- Hero com overlay claro (branco translúcido) + badges de credibilidade. Headline é um
  **manifesto de 6 linhas** (`.hero__headline--manifesto`, fonte reduzida p/ caber): a 1ª
  ("Sorria sem medo.") e a última ("Por gerações.") em `<em>` dourado itálico, as 4 do meio em
  verde escuro. Não há mais subheadline — o manifesto substituiu headline + subtexto.
- **Seção Equipe** (`#sobre`, eyebrow "Quem cuida da sua família") — deixou de ser sobre a
  Dra. Helena individualmente: 3 placeholders de foto lado a lado (`.equipe__grid`, 3 colunas
  no desktop / 1 no mobile; `.equipe__photo` mantém o `aspect-ratio: 3/4` + borda dourada do
  antigo retrato), parágrafo coletivo centralizado (`.equipe__text`) e CTA de WhatsApp
  centralizado (`.equipe__cta`). Bio, CRO, formação acadêmica e o badge "30+ anos" foram
  removidos daqui (o selo "+30 anos" continua nos badges do hero).
- **3 cards de Especialidades** — "Primeiro Sorriso" (Odontopediatria, ícone
  `simbolo-bebe-cor.png`), "Sorriso em Transformação" (Ortodontia) e "Sorriso para Toda a Vida"
  (tratamento para adultos) — os dois últimos usam `simbolo-adulto-verde.png`. Cada card tem
  ícone, título + chamada em `<em>` dourado itálico, descrição, lista de 6 serviços e botão
  "Saiba mais" para o WhatsApp. Lado a lado no desktop, carrossel no mobile (ver bloco mobile).
- 3 cards de Tecnologia (Anestesia Computadorizada, Scanner 3D, Câmera HD) — cada um com
  frase de chamada dourada acima do título (ver "Tecnologias Oficiais"). Para os três ficarem
  com a mesma altura e as linhas alinhadas, `.tec-card__chamada` recebe
  `min-height: calc(2 * 1.4em)` **apenas no breakpoint 768px+** (reserva 2 linhas quando os
  cards estão lado a lado); empilhados no mobile isso só criaria espaço vazio.
- Galeria: carrossel touch (mobile) / grid 3 colunas (desktop). **Não há rótulo fixo sob as
  fotos** — a informação aparece só no hover, dentro do `.galeria__overlay`, em duas linhas: o
  **sentimento** do ambiente (`.galeria__overlay-sentimento`, dourado claro itálico) e o nome do
  ambiente (`.galeria__overlay-ambiente`, caixa alta). **Ordem das fotos** (igual no grid do
  desktop e na rolagem do carrossel mobile), com o par de sentimento de cada uma — ao
  reordenar, o sentimento acompanha a IMAGEM, nunca a posição:
  1. Fachada → Planejamento · 2. Recepção → Acolhimento · 3. Sala Infantil → Confiança ·
  4. Área de Espera → Excelência · 5. Consultório → Tecnologia · 6. Equipamentos → Relacionamento. O overlay usa `--gold-light` (não `--gold`)
  porque fica sobre fundo escuro `rgba(13,13,13,0.55)`. **No mobile não há hover nem overlay** —
  os slides do carrossel mostram só a foto, e isso é intencional: não reintroduzir legenda fixa.
  A seção fecha com `.galeria__fecho`: "É assim que acompanhamos famílias por gerações."
- Seção de Convênios com 5 cards: **3 na primeira fileira + 2 centralizados na segunda**
  (flexbox com `flex-wrap` a partir de 768px; no mobile permanece como grid de 3 colunas, sem alteração)
- Carrossel de Depoimentos com autoplay 6s + arrows + swipe — **4 depoimentos reais** de pacientes
  (substituíram os 4 fictícios); cards mais largos no desktop (620px, ~2-2.5 visíveis por vez, era
  480px/~3.5 visíveis) para acomodar textos mais longos; altura uniforme via `align-items:stretch`
  no track + `height:auto` no card
- **Sistema de Guias de Pós-Atendimento** — duas páginas:
  - `guias.html`: grade 3x3 (desktop) / 2 colunas (tablet) / 1 coluna (mobile) de capas dos 9
    guias. **Os 9 guias estão publicados — não há mais placeholder nem rótulo "GUIA 0X" em
    nenhum card.** Todo card usa `<img class="guia-cover-card__bg">` com a capa real e abre
    `guia.html?g=[slug]`; a capa já traz o título, por isso o overlay/rótulo não é renderizado
    (classe `guia-cover-card--has-cover`). As 3 primeiras capas são `loading="eager"`, o resto
    `lazy`. A ordem da grade é a mesma das chaves de `GUIAS` em `js/guias-data.js`.
  - `guia.html`: visualizador dinâmico único para todos os guias. Lê `?g=slug` via JS, busca
    a config em `GUIAS` (definido em `js/guias-data.js`), e gera: eyebrow "Guia de
    Pós-Atendimento", `<h1>` com o título, botões "Baixar PDF" (atributo download) e
    "Compartilhar" (wa.me sem número, apenas com texto+URL), todas as páginas empilhadas
    verticalmente como `<img class="guia-viewer__page" loading="lazy">` (primeira é eager),
    e botão "Voltar aos Guias" no topo e no fim. Se o slug não existir em GUIAS, exibe
    mensagem amigável e link de volta.
  - **Os 9 guias publicados** (slug → páginas → título; o campo `paginas` precisa bater com a
    quantidade real de JPGs, senão o visualizador pede imagens inexistentes):
    A ordem abaixo é a da grade (3x3, lendo da esquerda para a direita) e foi definida pela
    **simetria visual das capas** (fundos escuros nas quinas de cima, claros embaixo) — não é
    alfabética nem temática, então não "arrumar". `guias.html` e as chaves de `GUIAS` ficam
    nessa mesma ordem.
    | # | slug | páginas | título |
    |---|---|---|---|
    | 1 | `alinhadores-invisiveis` | 14 | Guia para Alinhadores Invisíveis |
    | 2 | `aparelho-ortodontico` | 15 | Guia para Aparelho Ortodôntico |
    | 3 | `placa-bruxismo` | 17 | Guia para Placa Miorrelaxante |
    | 4 | `trauma-dental` | 14 | Guia Pós-Trauma Dental Infantil |
    | 5 | `clareamento` | 11 | Guia Pós-Clareamento Dental |
    | 6 | `expansor` | 15 | Guia Pós-Instalação do Expansor |
    | 7 | `pos-extracao` | 15 | Guia Pós-Extração de Dente de Leite |
    | 8 | `placa-contencao` | 16 | Guia para Placa de Contenção |
    | 9 | `primeiros-dentinhos` | 16 | Guia Primeiros Dentinhos |
    Os cards **não têm rótulo numérico** ("GUIA 0X"): como todos têm capa real e a capa já
    traz o título, o overlay não é renderizado. Logo, reordenar a grade não exige renumerar
    nada — basta mover os blocos `<a>`.
    Dois títulos foram renomeados para bater com a capa aprovada: "Guia sobre Placa de Bruxismo"
    → **"Guia para Placa Miorrelaxante"** (o slug segue `placa-bruxismo`) e "Guia sobre a
    Sequência de Erupção dos Dentes de Leite" → **"Guia Primeiros Dentinhos"**.
  - A seção de Guias e o modal de guia que existiam no `index.html` foram removidos de lá.
- FAQ Accordion (9 perguntas). As **3 primeiras são objeções sensíveis** ("Meu filho tem medo
  de dentista.", "Tenho vergonha do meu sorriso.", "Já usei aparelho antes.") com respostas acolhedoras marcadas `<!-- REVISAR COM A CLÍNICA: texto da resposta -->`
  — a doutora ainda vai validar esses textos. As perguntas técnicas seguem depois, e a última
  consolida agendamento + convênios + horário (info que antes estava em 3 perguntas separadas,
  substituídas pelas 4 novas).
- Localização com mapa Google + dados de contato
- Footer completo com Instagram (Facebook foi removido — cliente só usa Instagram)
- Botão flutuante WhatsApp e todos os CTAs "Falar/Agendar pelo WhatsApp" usam o SVG oficial completo (balão + telefone) — não usar o ícone genérico `message-circle` do Lucide
- Mapa de Localização com pin nomeado da clínica (embed por busca `q=`, sem API key). A query é
  **deliberadamente curta**: `q=Sorria+Instituto+Odontológico,+Brasília&z=17&output=embed`. A ficha
  da clínica está ativa no Google ("Sorria Instituto Odontologico (Helena Nascimento Pavanelli)",
  Centro Clinico Sudoeste BLOCO 03/04/05 SALA 238, `-15.8025037, -47.9325397`) e resolve pelo
  nome + cidade. **Não acrescentar bloco/sala/CEP à query:** já aconteceu duas vezes de uma query
  "mais completa" (`...Centro Clínico Sudoeste, SHCSW Bloco 3/4/5, Sala 238, Brasília - DF,
  70673-416`) deixar de geocodificar, e o mapa cair numa visão geral de Brasília sem marcador.
  Para conferir, basta buscar coordenadas na resposta do embed: se não houver `-15.xxx,-47.xxx`,
  a query não resolveu. O link "Como chegar" usa a mesma query, pelo mesmo motivo.
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
2. **Fotos da equipe** — 3 placeholders na seção "Quem cuida da sua família" (a 1ª pode ser a
   Dra. Helena). Trocar cada `.equipe__photo` por um `<img>` com a foto real.
3. **Logos dos convênios** — 5 cards aguardando logos oficiais
4. **Fotos da clínica** — 6 placeholders na galeria
5. **CRO-DF** — número do CRO da Dra. Helena (usado no rodapé)
6. **Respostas das 3 perguntas sensíveis do FAQ** — textos acolhedores marcados com
   `<!-- REVISAR COM A CLÍNICA -->`, pendentes de validação da doutora
7. **Link do Instagram** — URL real do perfil da clínica
8. **Fotos dos pacientes nos depoimentos** — Ilma Costa Nascimento, Suzana de Albuquerque, Aline Gonçalves Costa Henrique, Milk Alves (hoje usam iniciais em círculo)

## Copyright
© 2026 Sorria Instituto Odontológico
