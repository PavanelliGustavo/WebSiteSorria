/* Configuração dos Guias de Pós-Atendimento
 *
 * Os 9 guias estão publicados. A ordem das chaves aqui é a mesma da grade em
 * guias.html (grade 3x3).
 *
 * Para adicionar/atualizar um guia:
 * 1. Criar pasta assets/guias/[slug]/ com:
 *      [slug]-01.jpg … [slug]-NN.jpg  (páginas em ordem, zero à esquerda)
 *      guia-[slug].pdf                (PDF para download)
 *      capa-[slug].jpg                (imagem de capa para o card em guias.html)
 * 2. Adicionar uma entrada neste objeto (o campo `paginas` precisa bater com a
 *    quantidade real de JPGs, senão o visualizador pede imagens inexistentes).
 * 3. Adicionar o card em guias.html com a capa real e href="guia.html?g=[slug]".
 */
var GUIAS = {
  'alinhadores-invisiveis': {
    titulo: 'Guia para Alinhadores Invisíveis',
    slug:   'alinhadores-invisiveis',
    paginas: 14,
    pdf:    'guia-alinhadores-invisiveis.pdf'
  },
  'aparelho-ortodontico': {
    titulo: 'Guia para Aparelho Ortodôntico',
    slug:   'aparelho-ortodontico',
    paginas: 15,
    pdf:    'guia-aparelho-ortodontico.pdf'
  },
  'clareamento': {
    titulo: 'Guia Pós-Clareamento Dental',
    slug:   'clareamento',
    paginas: 11,
    pdf:    'guia-clareamento.pdf'
  },
  'trauma-dental': {
    titulo: 'Guia Pós-Trauma Dental Infantil',
    slug:   'trauma-dental',
    paginas: 14,
    pdf:    'guia-trauma-dental.pdf'
  },
  'placa-contencao': {
    titulo: 'Guia para Placa de Contenção',
    slug:   'placa-contencao',
    paginas: 16,
    pdf:    'guia-placa-contencao.pdf'
  },
  'placa-bruxismo': {
    titulo: 'Guia para Placa Miorrelaxante',
    slug:   'placa-bruxismo',
    paginas: 17,
    pdf:    'guia-placa-bruxismo.pdf'
  },
  'pos-extracao': {
    titulo: 'Guia Pós-Extração de Dente de Leite',
    slug:   'pos-extracao',
    paginas: 15,
    pdf:    'guia-pos-extracao.pdf'
  },
  'expansor': {
    titulo: 'Guia Pós-Instalação do Expansor',
    slug:   'expansor',
    paginas: 15,
    pdf:    'guia-expansor.pdf'
  },
  'primeiros-dentinhos': {
    titulo: 'Guia Primeiros Dentinhos',
    slug:   'primeiros-dentinhos',
    paginas: 16,
    pdf:    'guia-primeiros-dentinhos.pdf'
  }
};
