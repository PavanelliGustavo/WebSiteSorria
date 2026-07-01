/* Configuração dos Guias de Pós-Atendimento
 *
 * Para adicionar um novo guia:
 * 1. Criar pasta assets/guias/[slug]/ com:
 *      [slug]-01.jpg … [slug]-NN.jpg  (páginas em ordem, zero à esquerda)
 *      guia-[slug].pdf                (PDF para download)
 *      capa-[slug].jpg                (imagem de capa para o card em guias.html)
 * 2. Adicionar uma entrada neste objeto.
 * 3. Ativar o card em guias.html: trocar href="#" por href="guia.html?g=[slug]"
 *    e substituir o placeholder do card pela tag <img class="guia-cover-card__bg">.
 */
var GUIAS = {
  'alinhadores-invisiveis': {
    titulo: 'Guia para Pacientes com Alinhadores Invisíveis',
    slug:   'alinhadores-invisiveis',
    paginas: 14,
    pdf:    'guia-alinhadores-invisiveis.pdf'
  }
  /* Próximos guias — descomente e preencha ao adicionar cada um:
  ,
  'aparelho-ortodontico': {
    titulo: 'Guia para Pacientes com Aparelho Ortodôntico',
    slug:   'aparelho-ortodontico',
    paginas: 0,
    pdf:    'guia-aparelho-ortodontico.pdf'
  },
  'pos-clareamento': {
    titulo: 'Guia Pós-Clareamento Dental',
    slug:   'pos-clareamento',
    paginas: 0,
    pdf:    'guia-pos-clareamento.pdf'
  },
  'pos-trauma-infantil': {
    titulo: 'Guia Pós-Trauma Dental Infantil',
    slug:   'pos-trauma-infantil',
    paginas: 0,
    pdf:    'guia-pos-trauma-infantil.pdf'
  },
  'placa-contencao': {
    titulo: 'Guia sobre Placa de Contenção',
    slug:   'placa-contencao',
    paginas: 0,
    pdf:    'guia-placa-contencao.pdf'
  },
  'placa-bruxismo': {
    titulo: 'Guia sobre Placa de Bruxismo',
    slug:   'placa-bruxismo',
    paginas: 0,
    pdf:    'guia-placa-bruxismo.pdf'
  },
  'pos-extracao-leite': {
    titulo: 'Guia Pós-Extração de Dente de Leite',
    slug:   'pos-extracao-leite',
    paginas: 0,
    pdf:    'guia-pos-extracao-leite.pdf'
  },
  'expansor': {
    titulo: 'Guia sobre a Instalação do Expansor',
    slug:   'expansor',
    paginas: 0,
    pdf:    'guia-expansor.pdf'
  },
  'erupcao-dentes-leite': {
    titulo: 'Guia sobre a Sequência de Erupção dos Dentes de Leite',
    slug:   'erupcao-dentes-leite',
    paginas: 0,
    pdf:    'guia-erupcao-dentes-leite.pdf'
  }
  */
};
