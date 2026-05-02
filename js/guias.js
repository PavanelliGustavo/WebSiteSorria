/**
 * SORRIA INSTITUTO ODONTOLÓGICO
 * Dados e lógica dos Guias Pós-Atendimento
 */

/* ── DADOS DOS GUIAS ─────────────────────────────────────── */
const GUIAS_DATA = [
  {
    id: 1,
    icon: 'align-justify',
    titulo: 'Guia para Pacientes com Alinhadores Invisíveis',
    descricao: 'Cuidados essenciais para manter seu tratamento no caminho certo.',
    categoria: 'Ortodontia',
    /* SUBSTITUIR: conteúdo real abaixo — estas são instruções profissionais de exemplo */
    conteudo: `
      <h2>Bem-vindo ao seu tratamento com alinhadores</h2>
      <p>Os alinhadores invisíveis são placas removíveis de plástico transparente que movem os dentes de forma gradual e progressiva. Para que o tratamento funcione corretamente, siga estas orientações com atenção.</p>

      <div class="alert-box">
        <p><strong>Regra de ouro:</strong> Use os alinhadores por 20 a 22 horas por dia. Remova apenas para comer, beber (exceto água) e higienizar os dentes.</p>
      </div>

      <h2>Uso correto dos alinhadores</h2>
      <ul>
        <li>Troque para o próximo alinhador conforme orientado pela Dra. Helena (geralmente a cada 1 ou 2 semanas)</li>
        <li>Ao inserir o alinhador, pressione gentilmente com os dedos — nunca morda para encaixar</li>
        <li>Para remover, puxe pelos dentes molares de ambos os lados simultaneamente</li>
        <li>Sempre guarde o alinhador no estojo quando não estiver usando — nunca em papel ou guardanapo</li>
        <li>Se perder ou quebrar um alinhador, entre em contato imediatamente pelo WhatsApp</li>
      </ul>

      <h2>Higiene dos alinhadores</h2>
      <ul>
        <li>Lave os alinhadores com escova macia e água fria ou morna (nunca quente — deforma o plástico)</li>
        <li>Nunca use pasta de dente — ela arranha e opacifica o plástico</li>
        <li>Use pastilha efervescente específica para alinhadores uma vez ao dia</li>
        <li>Enxague sempre antes de recolocar</li>
      </ul>

      <h2>Higiene bucal durante o tratamento</h2>
      <ul>
        <li>Escove os dentes após cada refeição antes de recolocar o alinhador</li>
        <li>Use fio dental diariamente — os alinhadores retêm umidade que favorece cáries</li>
        <li>Use enxaguante bucal sem álcool conforme indicado</li>
        <li>Nunca recoloque o alinhador com os dentes sujos</li>
      </ul>

      <h2>O que evitar</h2>
      <ul>
        <li>Beber café, chá, refrigerante ou suco com o alinhador — mancha e danifica</li>
        <li>Fumar com o alinhador — amarela irreversivelmente</li>
        <li>Deixar o alinhador exposto ao calor (sol, carro, água quente)</li>
        <li>Pular dias de uso — cada hora importa para o resultado final</li>
      </ul>

      <h2>Sinais de alerta — entre em contato</h2>
      <ul>
        <li>Dor intensa que não melhora após 3–4 dias</li>
        <li>Alinhador muito folgado ou que não encaixa nos attachments</li>
        <li>Perda ou fratura do alinhador ou de um attachment</li>
        <li>Irritação persistente na gengiva ou bochechas</li>
      </ul>

      <div class="alert-box">
        <p><strong>Lembre-se:</strong> As consultas de acompanhamento são fundamentais. Não falte — é nelas que avaliamos o progresso e fazemos ajustes.</p>
      </div>
    `
  },
  {
    id: 2,
    icon: 'smile',
    titulo: 'Guia para Pacientes com Aparelho Ortodôntico',
    descricao: 'Tudo que você precisa saber para manter o aparelho e acelerar o tratamento.',
    categoria: 'Ortodontia',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>Seu aparelho ortodôntico</h2>
      <p>O aparelho fixo (metálico ou cerâmico) é composto por bráquetes colados aos dentes e fios que promovem os movimentos dentários. Com os cuidados certos, seu tratamento seguirá o prazo previsto.</p>

      <h2>Primeiros dias com o aparelho</h2>
      <p>É normal sentir desconforto e sensibilidade nos primeiros 3 a 5 dias após a instalação ou cada ativação. Para aliviar:</p>
      <ul>
        <li>Prefira alimentos pastosos e frios (iogurte, purê, sorvete)</li>
        <li>Analgésico simples (paracetamol ou ibuprofeno) pode ser usado conforme bula</li>
        <li>Cera ortodôntica sobre bráquetes que irritem a mucosa</li>
      </ul>

      <h2>Higiene bucal com aparelho</h2>
      <ul>
        <li>Escove os dentes após cada refeição — use escova de cabeça pequena e macia</li>
        <li>Angule a escova 45° em direção à gengiva para limpar embaixo dos fios</li>
        <li>Use escova interdental (proxy brush) para limpar entre os bráquetes</li>
        <li>Passe fio dental com o auxílio de um passador de fio ou fio superfloss</li>
        <li>Use enxaguante bucal fluoretado à noite</li>
        <li>Consulte sempre com a última escovação do dia sendo a mais cuidadosa</li>
      </ul>

      <h2>Alimentos proibidos</h2>
      <ul>
        <li><strong>Alimentos duros:</strong> cenoura crua, maçã mordida inteira, milho na espiga, cana, gelo</li>
        <li><strong>Alimentos pegajosos:</strong> bala de goma, caramelo, chicletes, paçoca</li>
        <li><strong>Alimentos que colam:</strong> amendoim, pão francês muito crocante</li>
        <li>Corte frutas e vegetais em pedaços pequenos antes de comer</li>
      </ul>

      <h2>Em caso de emergências</h2>
      <ul>
        <li><strong>Fio solto ou saliente:</strong> use cera para proteger a mucosa e entre em contato</li>
        <li><strong>Bráquete solto:</strong> não descole — coloque cera e agende consulta</li>
        <li><strong>Fio saindo pelo fundo:</strong> use um abaixador de língua para empurrar de volta com cuidado e entre em contato</li>
      </ul>

      <div class="alert-box">
        <p><strong>Não falte às consultas!</strong> O espaçamento entre consultas é calculado para manter a força ideal no fio. Atrasos podem comprometer o resultado.</p>
      </div>
    `
  },
  {
    id: 3,
    icon: 'sparkles',
    titulo: 'Guia Pós-Clareamento Dental',
    descricao: 'Cuide do resultado do clareamento nos dias seguintes ao procedimento.',
    categoria: 'Estética',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>Parabéns pelo seu sorriso mais claro!</h2>
      <p>O clareamento dental é um procedimento seguro quando realizado por profissional. Nos primeiros dias, os dentes ficam levemente porosos e mais suscetíveis a manchas — por isso a dieta branca é essencial.</p>

      <div class="alert-box">
        <p><strong>Regra dos primeiros 7 dias:</strong> Se o alimento mancha a toalha branca, ele vai manchar seus dentes. Evite-o durante este período.</p>
      </div>

      <h2>Dieta branca — o que pode comer</h2>
      <ul>
        <li>Frango, peixe, queijo branco, iogurte natural</li>
        <li>Arroz branco, massa com molho branco, pão de forma sem casca</li>
        <li>Batata, couve-flor, maçã (sem casca), pera, banana</li>
        <li>Água, leite, água de coco (sem corante)</li>
      </ul>

      <h2>O que evitar nos primeiros 7 dias</h2>
      <ul>
        <li>Café, chá preto, chá mate, chimarrão</li>
        <li>Vinho tinto, refrigerante escuro (cola), suco de uva</li>
        <li>Molho de tomate, shoyu, molho inglês, curry</li>
        <li>Chocolate, beterraba, cenoura, espinafre</li>
        <li>Cigarro — mancha e compromete o resultado em definitivo</li>
        <li>Batons e produtos labiais com pigmento escuro</li>
      </ul>

      <h2>Sensibilidade — o que é normal</h2>
      <p>Sensibilidade ao frio, calor ou ar é muito comum nas 24–72h após o clareamento. Ela é transitória e não indica dano ao dente. Para aliviar:</p>
      <ul>
        <li>Use pasta dessensibilizante (Sensodyne ou similar) 3x ao dia</li>
        <li>Evite alimentos e bebidas muito quentes ou muito frias</li>
        <li>Se a dor for intensa, um anti-inflamatório simples pode ajudar — consulte a Dra. Helena</li>
      </ul>

      <h2>Manutenção do resultado</h2>
      <ul>
        <li>Escove os dentes logo após consumir alimentos pigmentados</li>
        <li>Use canudo para bebidas escuras sempre que possível</li>
        <li>Faça manutenção (reforço) conforme indicado — geralmente a cada 6–12 meses</li>
        <li>Evite cigarro — é o principal causador de manchamento recorrente</li>
      </ul>

      <div class="alert-box">
        <p><strong>Atenção:</strong> O clareamento clareia apenas dentes naturais — não altera a cor de próteses, coroas ou restaurações já existentes. Informe a Dra. Helena sobre qualquer restauração que ficou mais escura que os dentes.</p>
      </div>
    `
  },
  {
    id: 4,
    icon: 'shield-alert',
    titulo: 'Guia Pós-Trauma Dental Infantil',
    descricao: 'O que fazer (e o que não fazer) quando seu filho sofre um trauma na boca.',
    categoria: 'Odontopediatria',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>Mantendo a calma em momentos difíceis</h2>
      <p>Quedas e batidas são comuns na infância — e podem envolver os dentes. Saber como agir rapidamente faz toda a diferença no prognóstico.</p>

      <div class="alert-box">
        <p><strong>Emergência:</strong> Se houver perda de consciência, convulsão, vômito repetido ou dificuldade para abrir a boca, vá ao pronto-socorro IMEDIATAMENTE antes de se preocupar com o dente.</p>
      </div>

      <h2>Tipos de trauma e o que fazer</h2>

      <h3>Dente permanente avulsionado (saiu completamente)</h3>
      <ol>
        <li>Segure o dente pela coroa (parte branca) — nunca pela raiz</li>
        <li>Se estiver sujo, lave rapidamente em leite ou soro fisiológico — nunca esfregue</li>
        <li>Recoloque o dente no alvéolo (buraco) se a criança cooperar</li>
        <li>Se não for possível recolocar, guarde em leite integral, soro fisiológico ou saliva da própria criança</li>
        <li>Procure a Sorria ou um pronto-socorro odontológico em até 30 minutos — cada minuto conta!</li>
      </ol>

      <h3>Dente de leite avulsionado</h3>
      <ul>
        <li>Não replante dentes de leite — pode prejudicar o dente permanente</li>
        <li>Leve o dente avulsionado para a consulta</li>
        <li>Aguarde consulta odontológica para avaliação</li>
      </ul>

      <h3>Dente trincado ou fraturado</h3>
      <ul>
        <li>Guarde os fragmentos (podem ser recolados)</li>
        <li>Aplique compressa fria na face para reduzir o inchaço</li>
        <li>Evite alimentos duros, quentes ou frios até a consulta</li>
        <li>Procure a Sorria o mais rápido possível</li>
      </ul>

      <h3>Dente deslocado (movido para frente, para trás, para dentro ou para fora)</h3>
      <ul>
        <li>Não tente reposicionar o dente por conta própria</li>
        <li>Aplique compressa fria</li>
        <li>Procure atendimento odontológico em poucas horas</li>
      </ul>

      <h2>Cuidados gerais após o trauma</h2>
      <ul>
        <li>Dieta pastosa por 2 semanas após trauma ou reimplante</li>
        <li>Higiene bucal suave na área afetada</li>
        <li>Evitar esportes de contato até liberação</li>
        <li>Comparecer a todas as consultas de acompanhamento — o monitoramento é essencial</li>
      </ul>

      <div class="alert-box">
        <p><strong>Mesmo sem sintomas visíveis,</strong> um trauma deve ser avaliado pela Dra. Helena. Lesões internas e raízes podem ser afetadas sem causar dor imediata.</p>
      </div>
    `
  },
  {
    id: 5,
    icon: 'shield',
    titulo: 'Guia sobre Placa de Contenção',
    descricao: 'Como usar e cuidar da sua contenção para preservar o resultado ortodôntico.',
    categoria: 'Ortodontia',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>A contenção é parte do tratamento</h2>
      <p>Após a remoção do aparelho, os dentes têm tendência natural de voltar à posição original — especialmente nos primeiros meses. A contenção garante que todo o investimento do tratamento seja preservado.</p>

      <div class="alert-box">
        <p><strong>Regra fundamental:</strong> Se você não usar a contenção, os dentes se movem. Não há exceção.</p>
      </div>

      <h2>Tipos de contenção</h2>
      <h3>Contenção removível (placa de Hawley ou termoformada)</h3>
      <p>Placa acrílica ou transparente que encaixa nos dentes.</p>
      <ul>
        <li>Use pelo tempo orientado pela Dra. Helena (geralmente 22h/dia no início, reduzindo gradualmente)</li>
        <li>Remova apenas para comer e higienizar os dentes</li>
        <li>Sempre guarde no estojo — nunca em papel, guardanapo ou bolso</li>
      </ul>

      <h3>Contenção fixa (fio de contenção)</h3>
      <p>Fio fino colado na parte interna dos dentes (geralmente nos dentes da frente inferiores).</p>
      <ul>
        <li>É permanente e discreta — você mal percebe</li>
        <li>Não interfere na fala nem na mastigação</li>
        <li>Exige higiene especial com fio dental e proxy brush na região</li>
      </ul>

      <h2>Higiene da placa removível</h2>
      <ul>
        <li>Lave com escova macia e água morna — nunca quente</li>
        <li>Nunca use pasta de dente — arranha e opacifica</li>
        <li>Use pastilha efervescente de higiene uma vez por semana</li>
        <li>Enxague antes de colocar na boca</li>
      </ul>

      <h2>Atenção — entre em contato se</h2>
      <ul>
        <li>A placa ficou apertada ou folgada demais</li>
        <li>A placa quebrou ou um pedaço se soltou</li>
        <li>O fio de contenção se soltou de algum dente</li>
        <li>Você sentir que algum dente voltou a se mover</li>
      </ul>

      <h2>Duração da contenção</h2>
      <p>A necessidade da contenção é, em muitos casos, permanente — especialmente o fio fixo. A placa removível pode ser gradualmente reduzida (uso noturno apenas) após 12 a 24 meses, conforme avaliação da Dra. Helena. <strong>Nunca descontinue por conta própria.</strong></p>
    `
  },
  {
    id: 6,
    icon: 'moon',
    titulo: 'Guia sobre Placa de Bruxismo',
    descricao: 'Entenda o bruxismo e saiba como cuidar da sua placa de proteção.',
    categoria: 'Proteção Oclusal',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>O que é bruxismo</h2>
      <p>Bruxismo é o hábito involuntário de apertar ou ranger os dentes, geralmente durante o sono. Pode causar desgaste dentário, dores na mandíbula, cabeça e pescoço, além de quebrar restaurações e dentes.</p>
      <p>A placa de bruxismo (também chamada de placa oclusal ou de relaxamento muscular) é um dispositivo de acrílico usado para proteger os dentes e relaxar a musculatura.</p>

      <h2>Como usar a placa</h2>
      <ul>
        <li>Use a placa todas as noites ao dormir</li>
        <li>Insira com os dedos, nunca mordendo para encaixar</li>
        <li>Se acordar no meio da noite com a placa fora da boca, recoloque-a</li>
        <li>Em casos de bruxismo diurno intenso, a Dra. Helena pode indicar uso parcial durante o dia</li>
      </ul>

      <h2>Higiene da placa</h2>
      <ul>
        <li>Lave com escova macia e água fria imediatamente ao acordar</li>
        <li>Use sabão neutro — não use pasta de dente</li>
        <li>Enxague bem e deixe secar antes de guardar no estojo</li>
        <li>Uma vez por semana, deixe de molho em solução de pastilha efervescente por 15 minutos</li>
        <li>Guarde sempre no estojo — protege de calor, deformação e contaminação</li>
      </ul>

      <h2>O bruxismo tem cura?</h2>
      <p>O bruxismo é uma condição multifatorial, relacionada a estresse, ansiedade, má-oclusão e fatores genéticos. A placa <strong>não trata</strong> o bruxismo — ela protege os dentes enquanto a causa é investigada e tratada.</p>
      <p>Estratégias complementares incluem: fisioterapia, técnicas de relaxamento, acompanhamento psicológico e, em alguns casos, medicação ou toxina botulínica (botox) nos músculos mastigatórios.</p>

      <h2>Quando a placa precisa ser substituída</h2>
      <ul>
        <li>Desgaste visível ou perfuração do acrílico</li>
        <li>Placa ficou folgada ou apertada demais (mudanças dentárias)</li>
        <li>Após 2 a 3 anos de uso regular — mesmo sem danos visíveis</li>
        <li>Se houver odor persistente mesmo após higienização</li>
      </ul>

      <div class="alert-box">
        <p><strong>Importante:</strong> A placa de bruxismo é de uso exclusivamente individual. Nunca compartilhe e informe a Dra. Helena sobre qualquer mudança na mordida ou aumento dos sintomas.</p>
      </div>
    `
  },
  {
    id: 7,
    icon: 'scissors',
    titulo: 'Guia Pós-Extração de Dente de Leite',
    descricao: 'Cuidados após a extração para uma recuperação rápida e tranquila.',
    categoria: 'Odontopediatria',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>A extração foi bem realizada — agora é hora de cuidar</h2>
      <p>A extração de dente de leite é um procedimento simples e rotineiro. Com os cuidados certos, a recuperação é rápida e sem complicações.</p>

      <h2>Primeiras 2 horas após a extração</h2>
      <ul>
        <li>Mantenha a gaze firmemente pressionada sobre o local por 30 a 45 minutos — mordendo com firmeza (não mordendo a gaze toda, apenas sobre o buraco)</li>
        <li>Não cuspa, não enxágue e não toque no local com a língua ou os dedos</li>
        <li>Não beba com canudo — a sucção pode deslocar o coágulo</li>
        <li>Aguarde o efeito da anestesia passar antes de dar qualquer alimento</li>
      </ul>

      <div class="alert-box">
        <p><strong>Atenção com a anestesia:</strong> A criança pode ficar com a bochecha, lábio ou língua dormente por até 2–3 horas. Evite que ela morda ou belisque a região anestesiada — pode se machucar sem perceber.</p>
      </div>

      <h2>Nas primeiras 24 horas</h2>
      <ul>
        <li>Ofereça apenas alimentos frios ou em temperatura ambiente e pastosos (sorvete, iogurte, purê, vitaminas)</li>
        <li>Evite alimentos quentes, condimentados e duros</li>
        <li>Não realize a higiene direta no local — lave o restante da boca normalmente</li>
        <li>Um sangramento leve em forma de fio é normal — se houver sangramento intenso, pressione com gaze limpa e entre em contato</li>
        <li>Compressa fria na bochecha externa (20 min ligado, 20 min desligado) reduz o inchaço</li>
      </ul>

      <h2>Nos dias seguintes</h2>
      <ul>
        <li>A partir do 2º dia, retome a higiene bucal normalmente, inclusive na região da extração</li>
        <li>Bochechos com água morna com sal (1 colher de chá em 1 copo) a partir do 2º dia — 3x ao dia após as refeições</li>
        <li>O alvéolo (buraco) fechará completamente em 1 a 2 semanas</li>
        <li>Use analgésico (paracetamol ou ibuprofeno infantil) conforme bula, se necessário</li>
      </ul>

      <h2>Quando entrar em contato</h2>
      <ul>
        <li>Sangramento intenso que não cessa com pressão</li>
        <li>Febre acima de 38°C</li>
        <li>Inchaço crescente após o 2º dia</li>
        <li>Dor intensa que não melhora com analgésico</li>
        <li>Saída de pus ou secreção do local</li>
      </ul>
    `
  },
  {
    id: 8,
    icon: 'maximize-2',
    titulo: 'Guia sobre a Instalação do Expansor',
    descricao: 'Como funciona o expansor palatino e como ativá-lo corretamente em casa.',
    categoria: 'Ortodontia Interceptiva',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>O que é o expansor palatino</h2>
      <p>O expansor é um aparelho fixo instalado no palato (céu da boca) que amplia gradualmente a arcada superior. É indicado principalmente para crianças, enquanto a sutura palatina mediana ainda não está fusionada, permitindo a correção de palatos estreitos com muito mais eficiência.</p>

      <h2>Como fazer a ativação em casa</h2>
      <p>A Dra. Helena entregará uma chave específica para o seu expansor e demonstrará pessoalmente a técnica. Siga rigorosamente:</p>
      <ol>
        <li>Posicione a criança deitada ou reclinada com a cabeça apoiada e a boca bem aberta</li>
        <li>Insira a chave no buraco (furo) do expansor, de frente para trás</li>
        <li>Empurre a chave firmemente para trás até que o furo seguinte fique visível</li>
        <li>Retire a chave para trás e para baixo — nunca de volta para a frente</li>
        <li>Confirme que a chave girou — você verá o parafuso avançar</li>
        <li>Guarde a chave no estojo fornecido</li>
      </ol>

      <div class="alert-box">
        <p><strong>Frequência:</strong> Siga exatamente o número de ativações por semana indicado pela Dra. Helena. Nem mais, nem menos. <!-- SUBSTITUIR: número real de ativações --></p>
      </div>

      <h2>O que esperar</h2>
      <ul>
        <li>Pressão ou sensação de peso no nariz e na região do palato — é completamente normal</li>
        <li>Um espaço entre os dentes da frente (diastema) pode surgir e aumentar — é sinal que está funcionando</li>
        <li>Leve dificuldade na fala inicial — passa em poucos dias</li>
        <li>Acúmulo de alimento no expansor — normal, higienize bem</li>
        <li>Inchaço leve da gengiva nos primeiros dias — use enxaguante e higienize bem</li>
      </ul>

      <h2>Higiene com o expansor</h2>
      <ul>
        <li>Irrigador bucal (water flosser) é altamente recomendado — remove restos alimentares do expansor com eficiência</li>
        <li>Escove o expansor com escova interdental após cada refeição</li>
        <li>Enxaguante bucal fluoretado uma vez ao dia</li>
      </ul>

      <h2>Quando entrar em contato</h2>
      <ul>
        <li>Dor intensa que não cede após as primeiras 48h de ativação</li>
        <li>Expansor solto ou movendo-se</li>
        <li>Chave não girou ou travou</li>
        <li>Banda solta em algum dente de apoio</li>
      </ul>
    `
  },
  {
    id: 9,
    icon: 'calendar',
    titulo: 'Guia sobre a Sequência de Erupção dos Dentes de Leite',
    descricao: 'Saiba quando cada dentinho deve aparecer e o que fazer para ajudar seu filho.',
    categoria: 'Odontopediatria',
    /* SUBSTITUIR: conteúdo real */
    conteudo: `
      <h2>A dentição de leite: um marco no desenvolvimento</h2>
      <p>Os 20 dentes de leite têm papel fundamental no desenvolvimento da fala, mastigação, nutrição e no guia para a erupção dos dentes permanentes. Conhecer a sequência normal ajuda a identificar quando buscar acompanhamento.</p>

      <h2>Sequência de erupção esperada</h2>

      <h3>Incisivos centrais inferiores (primeiros a aparecer)</h3>
      <p><strong>Idade média:</strong> 6 a 10 meses<br>Os primeiros "dentinhos" de baixo — geralmente os que causam mais fussiness (choro e irritação).</p>

      <h3>Incisivos centrais superiores</h3>
      <p><strong>Idade média:</strong> 8 a 12 meses</p>

      <h3>Incisivos laterais superiores e inferiores</h3>
      <p><strong>Idade média:</strong> 9 a 13 meses</p>

      <h3>Primeiros molares de leite</h3>
      <p><strong>Idade média:</strong> 13 a 19 meses<br>Pode causar mais desconforto por serem maiores. Febre baixa (até 37,5°C) pode ocorrer.</p>

      <h3>Caninos (dentes "de vampiro")</h3>
      <p><strong>Idade média:</strong> 16 a 22 meses</p>

      <h3>Segundos molares de leite (últimos a erupcionar)</h3>
      <p><strong>Idade média:</strong> 25 a 33 meses<br>Completam a dentição de leite, totalizando 20 dentes.</p>

      <div class="alert-box">
        <p><strong>A sequência pode variar!</strong> Cada criança tem seu ritmo. Uma diferença de 3 a 6 meses é completamente normal. O que importa é a sequência e o padrão geral, não a data exata.</p>
      </div>

      <h2>Como ajudar na fase da dentição</h2>
      <ul>
        <li>Mordedores gelados (não congelados) — o frio alivia a inflamação da gengiva</li>
        <li>Massagem suave na gengiva com dedo limpo ou dedeira de silicone</li>
        <li>Gel de mordedores específicos para bebês (sem benzocaína) — consulte o pediatra</li>
        <li>Dose de analgésico (paracetamol ou ibuprofeno) pode ser indicada pelo pediatra para noites difíceis</li>
        <li>Mantenha o rosto da criança seco — o excesso de saliva pode irritar a pele</li>
      </ul>

      <h2>Quando buscar o dentista</h2>
      <ul>
        <li>Ausência de qualquer dente aos 12–13 meses</li>
        <li>Assimetria muito marcada na erupção</li>
        <li>Dentes de leite caindo antes de 4 anos (exceto trauma)</li>
        <li>Dentes permanentes erucionando antes dos dentes de leite caírem</li>
        <li>Qualquer dúvida — a Dra. Helena está aqui para isso!</li>
      </ul>

      <h2>Higiene desde o primeiro dentinho</h2>
      <ul>
        <li>Antes dos dentes: limpe as gengivas com gaze úmida ou dedeira após cada mamada</li>
        <li>Ao erupcionar: escova infantil macia com pasta fluoretada do tamanho de um grão de arroz (0–3 anos) ou ervilha (3–6 anos)</li>
        <li>Escovação 2x ao dia — sempre com supervisão e ajuda dos pais até os 8–9 anos</li>
        <li>Fio dental assim que dois dentes se tocarem</li>
      </ul>
    `
  }
];

/* ── RENDER DOS CARDS ────────────────────────────────────── */
function renderGuiaCards() {
  const grid = document.getElementById('guiasGrid');
  if (!grid) return;

  grid.innerHTML = GUIAS_DATA.map((guia) => `
    <article
      class="guia-card glass-card fade-up"
      role="listitem"
      data-guia-id="${guia.id}"
      aria-labelledby="guia-title-${guia.id}"
      tabindex="0"
    >
      <div class="guia-card__icon-wrap" aria-hidden="true">
        <i data-lucide="${guia.icon}"></i>
      </div>
      <div class="guia-card__content">
        <p class="guia-card__number">Guia 0${guia.id} — ${guia.categoria}</p>
        <h3 class="guia-card__title" id="guia-title-${guia.id}">${guia.titulo}</h3>
        <p class="guia-card__desc">${guia.descricao}</p>
      </div>
      <button
        class="btn btn--secondary btn--sm"
        onclick="abrirGuia(${guia.id})"
        aria-label="Ver guia: ${guia.titulo}"
      >
        Ver Guia
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </button>
    </article>
  `).join('');

  // Permitir abrir via teclado no card
  grid.querySelectorAll('.guia-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = parseInt(card.dataset.guiaId, 10);
        abrirGuia(id);
      }
    });
  });

  // Re-inicializa ícones Lucide nos novos elementos
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── MODAL ───────────────────────────────────────────────── */
const WPP_NUMBER = '5561981118014';

function abrirGuia(id) {
  const guia = GUIAS_DATA.find(g => g.id === id);
  if (!guia) return;

  const overlay   = document.getElementById('guiaModalOverlay');
  const category  = document.getElementById('guiaModalCategory');
  const title     = document.getElementById('guiaModalTitle');
  const body      = document.getElementById('guiaModalBody');
  const shareBtn  = document.getElementById('guiaWhatsappShare');

  category.textContent = guia.categoria;
  title.textContent    = guia.titulo;
  body.innerHTML       = guia.conteudo;

  const wppText = encodeURIComponent(
    `Olá, Dra. Helena! Recebi o *${guia.titulo}* da Sorria Instituto Odontológico e estou com uma dúvida. Pode me ajudar?`
  );
  shareBtn.href = `https://wa.me/${WPP_NUMBER}?text=${wppText}`;

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';

  // Foco no modal para acessibilidade
  setTimeout(() => {
    document.getElementById('guiaModalClose').focus();
    // Scroll do body do modal para o topo
    body.scrollTop = 0;
  }, 50);

  // Re-inicializa ícones Lucide no conteúdo do modal
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function fecharGuia() {
  const overlay = document.getElementById('guiaModalOverlay');
  overlay.hidden = true;
  document.body.style.overflow = '';
}

/* ── EVENTOS DO MODAL ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderGuiaCards();

  const overlay  = document.getElementById('guiaModalOverlay');
  const closeBtn = document.getElementById('guiaModalClose');

  closeBtn?.addEventListener('click', fecharGuia);

  // Fechar ao clicar no overlay
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) fecharGuia();
  });

  // Fechar com Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay?.hidden) fecharGuia();
  });

  // Trap foco dentro do modal
  overlay?.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || overlay.hidden) return;
    const focusable = overlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
});

/* Expõe globalmente para uso nos botões inline */
window.abrirGuia = abrirGuia;
