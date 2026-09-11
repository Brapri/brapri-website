export const company = {
  legalName: 'BRAPRI TECNOLOGIA LTDA',
  cnpj: '62.887.939/0001-77',
  address: "Área Rural 1, Pedra D'Água — Iconha/ES, 29280-000",
  email: 'contato@brapritecnologia.com.br',
  phone: '+55 (28) 3000-0000',
  hours: 'Seg–Sex, 08h–18h (BRT) · Suporte crítico 24/7',
};

export const services = [
  {
    id: 'software',
    icon: 'code-2',
    title: 'Desenvolvimento de software',
    summary: 'Sistemas web sob medida, portais internos e aplicações que substituem planilha e retrabalho.',
    footnote: 'Web · API · mobile',
    detail: ['Aplicações web e portais internos', 'APIs REST e GraphQL documentadas', 'Sustentação e evolução contínua'],
  },
  {
    id: 'automacao',
    icon: 'workflow',
    title: 'Automação de processos',
    summary: 'Rotinas que rodam sozinhas: aprovações, conciliação, emissão de documentos e disparos.',
    footnote: 'RPA · filas · agendadores',
    detail: ['Mapeamento do processo atual, ponta a ponta', 'Automação de tarefas repetitivas e conciliações', 'Alertas e trilha de auditoria de cada execução'],
  },
  {
    id: 'integracoes',
    icon: 'git-merge',
    title: 'Integrações e APIs',
    summary: 'ERP, e-commerce, marketplace e banco conversando entre si, sem digitação dupla.',
    footnote: 'ERP · e-commerce · fiscal',
    detail: ['Integração com ERP e emissores fiscais', 'Sincronia de pedidos, estoque e financeiro', 'Reprocessamento seguro em caso de falha'],
  },
  {
    id: 'dados',
    icon: 'bar-chart-3',
    title: 'Dados e painéis',
    summary: 'Indicadores consolidados em painel único, atualizados sem ninguém montar planilha.',
    footnote: 'ETL · dashboards',
    detail: ['Pipelines de extração e tratamento', 'Painéis operacionais e gerenciais', 'Histórico confiável para decisão'],
  },
  {
    id: 'consultoria',
    icon: 'compass',
    title: 'Consultoria e discovery',
    summary: 'Antes de codar: escopo, telas, integrações e custo do projeto definidos por escrito.',
    footnote: 'Discovery em 15 dias',
    detail: ['Mapeamento de processo e sistemas atuais', 'Escopo com telas, integrações e prazo', 'Estimativa de investimento e ganho esperado'],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud e sustentação',
    summary: 'Ambiente onde o software roda: deploy, monitoramento e correção sob o mesmo contrato.',
    footnote: 'AWS · Azure · CI/CD',
    detail: ['Deploy automatizado e ambientes separados', 'Monitoramento da aplicação 24/7', 'Correções e evolução com SLA definido'],
  },
];

export const support = [
  {
    id: 'infra',
    icon: 'server',
    title: 'Infraestrutura e redes',
    summary: 'Servidores, switches, firewall e Wi-Fi instalados e monitorados para o software rodar sem queda.',
    footnote: 'Projeto · instalação · monitoramento',
  },
  {
    id: 'manutencao',
    icon: 'wrench',
    title: 'Manutenção de equipamentos',
    summary: 'Preventiva e corretiva em desktops, notebooks e servidores, com atendimento presencial no sul do ES.',
    footnote: 'Preventiva · corretiva · em campo',
  },
  {
    id: 'suporte',
    icon: 'headset',
    title: 'Suporte ao usuário',
    summary: 'Service desk remoto para o dia a dia da equipe: acessos, e-mail, impressão e estações.',
    footnote: 'Remoto · SLA por severidade',
  },
];

export const aprenderConectadoCase = {
  id: 'aprender-conectado',
  tag: 'Gov · Educação',
  client: 'EACE · Aprender Conectado',
  title: 'Escolas públicas conectadas no sul do ES',
  imageUrl: undefined as string | undefined,
  summary: 'Escolas públicas sem conectividade confiável perdiam horas de aula digital. A BRAPRI instalou infraestrutura de rede completa em 5 municípios do sul do ES — do cabeamento ao Wi-Fi —, garantindo que laboratórios e salas de aula finalmente funcionassem como o programa prometia.',
  result: '5',
  resultLabel: 'municípios com escolas conectadas',
  challenge: 'As escolas tinham o programa, tinham os computadores, mas não tinham rede. Sem infraestrutura adequada, laboratórios de informática ficavam ociosos e o investimento público em equipamentos não se convertia em aprendizado.',
  challengePoints: [
    'Salas de aula sem sinal Wi-Fi ou com equipamentos domésticos que caíam o dia inteiro',
    'Laboratórios de informática sem cabeamento estruturado — máquinas sem acesso',
    'Cada escola com uma configuração diferente: impossível dar suporte com qualquer escala',
    'Professores adaptando aulas porque a rede "não estava funcionando hoje"',
  ],
  solutionHeadline: 'Infraestrutura padronizada e entregue em campo',
  solutionBody: 'A BRAPRI executou o projeto completo de infraestrutura de rede nos 5 municípios: levantamento in loco em cada escola, projeto de cabeamento Cat6, instalação de switches gerenciáveis, APs Wi-Fi 802.11ac com cobertura de todo o ambiente, rack, patch panel e certificação. Entrega padronizada para facilitar manutenção futura.',
  outcomes: [
    { metric: '5', label: 'Municípios', detail: 'Alfredo Chaves, Iconha, Cachoeiro de Itapemirim, Atílio Vivácqua e Mimoso do Sul' },
    { metric: '~30', label: 'Escolas', detail: 'Unidades com infraestrutura nova ou modernizada, laboratórios e salas conectados' },
    { metric: '100%', label: 'Cobertura Wi-Fi', detail: 'Todas as salas com sinal estável e switch gerenciável para controle de tráfego' },
  ],
  stack: ['Cabeamento Cat6', 'Switch gerenciável', 'Wi-Fi 802.11ac', 'Rack e patch panel', 'Certificação de rede'],
  municipalities: [
    { name: 'Alfredo Chaves',          lat: -20.63, lon: -40.74 },
    { name: 'Iconha',                  lat: -20.79, lon: -40.84 },
    { name: 'Cachoeiro de Itapemirim', lat: -20.85, lon: -41.11 },
    { name: 'Atílio Vivácqua',         lat: -20.91, lon: -41.19 },
    { name: 'Mimoso do Sul',           lat: -21.06, lon: -41.36 },
  ],
};

export const cases = [
  {
    id: 'eltech',
    tag: 'Indústria Química',
    title: 'Do Excel ao CRM: a operação comercial da Eltech em um único lugar',
    summary: 'A equipe comercial da Eltech Química perdia propostas no e-mail e não sabia o status de nenhum pedido. A BRAPRI construiu o CRM do zero: pipeline de vendas, agenda, estoque, compras e emissão fiscal — tudo integrado, do primeiro contato até a expedição.',
    result: '360°',
    resultLabel: 'visão do processo comercial — do lead à nota fiscal',
    challenge: 'A Eltech Química cresceu e a planilha não cresceu junto. Com uma equipe comercial espalhada, não havia como saber quais propostas estavam em aberto, quem tinha ligado para qual cliente, ou quantos itens restavam no estoque. Cada área tinha a sua planilha — e nenhuma delas conversava com a outra.',
    challengePoints: [
      'Pipeline de vendas na cabeça de cada vendedor: oportunidades sumiam sem follow-up',
      'Controle de estoque numa planilha separada — sem integração com pedidos, sempre desatualizada',
      'Propostas enviadas por e-mail sem rastreio: cliente aprovava e ninguém sabia',
      'Relatório gerencial feito manualmente toda semana, levava o dia todo',
    ],
    solutionHeadline: 'CRM Enterprise construído sob medida para a operação química',
    solutionBody: 'A BRAPRI mapeou toda a operação comercial da Eltech e construiu um sistema web completo: pipeline de propostas com histórico de atividades, gestão de clientes e contatos, controle de estoque integrado com compras, fluxo de expedição e emissão de documentos fiscais. Uma única tela mostra o status de cada negócio do início ao fim.',
    outcomes: [
      { metric: '360°', label: 'Visibilidade', detail: 'Do lead à nota fiscal em um único sistema — sem planilha, sem retrabalho' },
      { metric: '0', label: 'Digitação dupla', detail: 'Estoque, pedidos e emissão fiscal sincronizados automaticamente' },
      { metric: '100%', label: 'Rastreabilidade', detail: 'Histórico completo de cada cliente, proposta e atividade da equipe' },
    ],
    stack: ['React 19', 'Elysia', 'Prisma', 'Bun', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: '/assets/case-eltech.png',
  },
  {
    id: 'flamus',
    tag: 'Creator Platform',
    title: 'Web e desktop com um único código: o app da Flamus',
    summary: 'A Flamus precisava estar presente no navegador e no computador dos criadores sem dobrar o custo de desenvolvimento. A BRAPRI entregou as duas plataformas com um único backend de alta performance — o criador abre no site ou instala no Mac, a experiência é a mesma.',
    result: '2',
    resultLabel: 'plataformas com um único backend e base de código compartilhada',
    challenge: 'A Flamus queria alcançar criadores de conteúdo tanto no navegador quanto no desktop, mas desenvolver e manter duas aplicações separadas triplicaria o custo e o prazo. Além disso, o volume de uploads e interações em tempo real exigia um backend que aguentasse crescer rápido.',
    challengePoints: [
      'Dois produtos (web + desktop) com equipe e orçamento de startup',
      'Backend tradicional não aguentaria o volume de uploads e interações simultâneas',
      'Criadores esperam performance de app nativa, não de site empacotado',
      'Time to market curto: lançar os dois ao mesmo tempo ou perder o momentum',
    ],
    solutionHeadline: 'Uma plataforma, duas experiências — web e desktop integrados',
    solutionBody: 'A BRAPRI construiu o backend em ElysiaJS com Bun — extremamente rápido para lidar com upload de mídia e WebSockets —, o app web em Next.js e o desktop em Tauri, compartilhando a mesma lógica de negócio. O resultado: dois produtos entregues no mesmo prazo de um.',
    outcomes: [
      { metric: '2', label: 'Plataformas', detail: 'Web e desktop lançados simultaneamente com base de código unificada' },
      { metric: '1', label: 'Backend', detail: 'Um único backend de alta performance alimenta as duas plataformas' },
      { metric: '½', label: 'Prazo vs. duas equipes', detail: 'Entrega em metade do tempo comparado a desenvolver separadamente' },
    ],
    stack: ['Next.js', 'Tauri', 'ElysiaJS', 'Bun', 'TypeScript', 'AWS'],
    imageUrl: '/assets/case-flamus.jpg',
  },
  {
    id: 'aac',
    tag: 'Associação · Nacional',
    title: 'Recadastramento nacional da AAC sem papel e sem fila',
    summary: 'A Associação de Aposentados dos Correios precisava atualizar o cadastro de milhares de associados espalhados pelo Brasil. A BRAPRI criou um sistema web completo com login social, controle de aprovação por papéis e painel administrativo — o que era feito em papel passou a ser resolvido online em minutos.',
    result: 'Nacional',
    resultLabel: 'cobertura Brasil — sem deslocamento, sem formulário físico',
    challenge: 'A AAC precisava recadastrar seus associados aposentados em todo o Brasil, mas o processo era burocrático, em papel e dependia de deslocamento presencial em muitos casos. Além disso, a gestão de aprovações era manual e demorava semanas.',
    challengePoints: [
      'Processo de recadastramento presencial ou por correio: barreira para associados idosos',
      'Sem controle de quem recadastrou, quem está pendente, quem foi aprovado',
      'Fluxo de aprovação manual: formulários impressos passando de mesa em mesa',
      'Sem visibilidade em tempo real do progresso nacional',
    ],
    solutionHeadline: 'Sistema de recadastramento online com fluxo de aprovação automatizado',
    solutionBody: 'A BRAPRI construiu um sistema web com login via Google (sem necessidade de criar senha), controle de papéis (associado, revisor, gestor nacional), automação do fluxo de aprovação e painel administrativo com relatórios em tempo real. O associado acessa de casa; o gestor aprova com um clique.',
    outcomes: [
      { metric: '100%', label: 'Digital', detail: 'Fim do formulário físico — processo completo feito online pelo associado' },
      { metric: '0', label: 'Deslocamento', detail: 'Associados recadastram de casa com login social, sem criar senha' },
      { metric: 'Nacional', label: 'Cobertura', detail: 'Todas as regionais da AAC acessando o mesmo sistema em tempo real' },
    ],
    stack: ['Laravel 11', 'MySQL', 'Clerk', 'Docker', 'PHP', 'Nginx'],
    imageUrl: '/assets/case-aac.png',
  },
];

export const clients = [
  { id: 'dtecnica',  name: 'Dtecnica',              sector: 'Tecnologia',       logoUrl: 'https://dtecnica.com/wp-content/uploads/2025/05/dtecnica-logo2021-210.bk_.webp' },
  { id: 'deroyque',  name: 'Deroyque',              sector: 'Tecnologia',       logoUrl: '/assets/logos/deroyque.svg' },
  { id: 'iuh',       name: 'IUH Digital',           sector: 'Telecom · Edu',    logoUrl: 'https://iuh.digital/wp-content/webp-express/webp-images/uploads/2025/12/iuh__logo_alt-2-768x628.png.webp' },
  { id: 'eace',      name: 'EACE · Aprender Conectado', sector: 'Gov · Educação', logoUrl: 'https://651818aeb03babcd9aeedc490daec497.cdn.bubble.io/cdn-cgi/image/w=192,h=48,f=auto,dpr=2.5,fit=contain/f1745331952171x308140294008352200/LOGO_APRENDER_CONECTADO_CMYK-.png' },
  { id: 'flamus',    name: 'Flamus',                sector: 'Creator Platform', logoUrl: 'https://blog.flamus.com/wp-content/uploads/2026/03/Flamus_Logo_White.svg' },
];

export const stats = [
  { value: '2', suffix: 'sem', label: 'Ciclo de entrega em produção' },
  { value: '99,9', suffix: '%', label: 'Disponibilidade da aplicação' },
  { value: '70', suffix: '%', label: 'Menos tarefa manual após automação' },
  { value: '24', suffix: '/7', label: 'Monitoramento e sustentação' },
];

export const steps = [
  { n: '01', title: 'Discovery', body: 'Mapeamos o processo atual, os sistemas envolvidos e o resultado esperado.' },
  { n: '02', title: 'Arquitetura', body: 'Modelo de dados, integrações e ambiente definidos antes da primeira linha de código.' },
  { n: '03', title: 'Sprints', body: 'Entregas a cada duas semanas em homologação, com aceite formal por etapa.' },
  { n: '04', title: 'Sustentação', body: 'Depois do go-live: monitoramento, correção e evolução sob contrato.' },
];

export const nav = [
  { id: 'home', label: 'Início', href: '/' },
  { id: 'servicos', label: 'Serviços', href: '/servicos' },
  { id: 'cases', label: 'Cases', href: '/cases' },
  { id: 'empresa', label: 'Empresa', href: '/empresa' },
  { id: 'contato', label: 'Contato', href: '/contato' },
  { id: 'legal', label: 'Políticas', href: '/legal' },
];

export const legalDocs = [
  {
    id: 'termos',
    label: 'Termos de uso',
    updated: 'Atualizado em 01/07/2026',
    blocks: [
      ['Objeto', 'Estes termos regem a contratação dos serviços de desenvolvimento de software, integração e automação de processos prestados pela BRAPRI TECNOLOGIA LTDA, CNPJ 62.887.939/0001-77, a pessoas jurídicas estabelecidas no Brasil.'],
      ['Escopo e prazo', 'Cada contrato define escopo funcional, cronograma de sprints, nível de serviço (SLA) de sustentação e valor. Alterações de escopo são formalizadas por termo aditivo assinado pelas partes.'],
      ['Obrigações do cliente', 'Fornecer acesso aos sistemas e dados necessários, manter licenças válidas e indicar um responsável pela aprovação de escopo e aceite de cada entrega.'],
      ['Foro', 'Fica eleito o foro da comarca de Iconha, Espírito Santo, para dirimir controvérsias oriundas do contrato.'],
    ],
  },
  {
    id: 'privacidade',
    label: 'Política de privacidade',
    updated: 'Atualizado em 01/07/2026',
    blocks: [
      ['Dados coletados', 'Coletamos nome, e-mail corporativo, telefone e empresa quando você preenche o formulário de contato, além dos dados dos sistemas do cliente estritamente necessários ao desenvolvimento e à automação contratados.'],
      ['Finalidade', 'Os dados são usados exclusivamente para responder solicitações comerciais, executar o contrato e cumprir obrigações legais e fiscais.'],
      ['Compartilhamento', 'Não vendemos dados. Compartilhamos apenas com provedores de infraestrutura e contabilidade estritamente necessários, sob obrigação de confidencialidade.'],
      ['Direitos do titular', 'Nos termos da LGPD (Lei 13.709/2018), o titular pode solicitar acesso, correção ou exclusão dos dados pelo e-mail contato@brapritecnologia.com.br.'],
    ],
  },
  {
    id: 'reembolso',
    label: 'Reembolso e cancelamento',
    updated: 'Atualizado em 01/07/2026',
    blocks: [
      ['Cancelamento', 'Contratos recorrentes podem ser cancelados com aviso prévio de 30 dias, por e-mail, sem multa após o período mínimo de vigência.'],
      ['Reembolso', 'Cobranças efetuadas em duplicidade ou por serviço não prestado são reembolsadas integralmente em até 10 dias úteis, pelo mesmo meio de pagamento.'],
      ['Serviços já executados', 'Sprints e horas de desenvolvimento já entregues não são reembolsáveis; o valor proporcional ao período de sustentação não utilizado é devolvido ou creditado.'],
    ],
  },
  {
    id: 'entrega',
    label: 'Entrega de serviço',
    updated: 'Atualizado em 01/07/2026',
    blocks: [
      ['Início da prestação', 'Projetos iniciam com a reunião de discovery em até 5 dias úteis após a assinatura e a confirmação do pagamento da primeira parcela.'],
      ['Prazos de projeto', 'O desenvolvimento segue sprints de duas semanas, com entrega em ambiente de homologação e aceite formal por etapa.'],
      ['Atendimento', 'Sustentação remota em horário comercial e atendimento crítico 24/7 para indisponibilidade da aplicação, conforme severidade definida no SLA. Reuniões presenciais programadas na região sul do ES.'],
    ],
  },
];
