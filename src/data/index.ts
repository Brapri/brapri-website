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

export const cases = [
  {
    id: 'industria',
    tag: 'Indústria',
    title: 'Apontamento de produção sem papel',
    summary: 'Trocamos a ficha impressa por um app de apontamento em tablet, integrado ao ERP. O PCP passou a ver a linha em tempo real.',
    result: '—68%',
    resultLabel: 'tempo de fechamento do turno',
    stack: ['React', 'Node.js', 'PostgreSQL', 'ERP'],
    photoId: 'case-industria',
    photoHint: 'Foto da linha de produção / tablet no chão de fábrica (1600×1100)',
  },
  {
    id: 'varejo',
    tag: 'Varejo',
    title: 'Integração e-commerce, ERP e marketplace',
    summary: 'Pedidos, estoque e nota fiscal sincronizados a cada 5 minutos entre loja virtual, marketplace e ERP, com reprocessamento seguro de falhas.',
    result: '0',
    resultLabel: 'digitação dupla de pedido',
    stack: ['Python', 'REST', 'Docker', 'AWS'],
    photoId: 'case-varejo',
    photoHint: 'Foto de estoque / expedição (1600×1100)',
  },
  {
    id: 'logistica',
    tag: 'Logística',
    title: 'Robô de conciliação de fretes',
    summary: 'Uma rotina noturna confere conhecimentos de transporte contra o financeiro e abre exceção só no que divergir.',
    result: '9h',
    resultLabel: 'de trabalho manual eliminadas por semana',
    stack: ['Python', 'n8n', 'PostgreSQL'],
    photoId: 'case-logistica',
    photoHint: 'Foto de pátio / caminhão / conferência de carga (1600×1100)',
  },
  {
    id: 'servicos',
    tag: 'Serviços',
    title: 'Painel único de indicadores',
    summary: 'Dados de três sistemas consolidados em um painel gerencial atualizado sozinho, no lugar da planilha montada toda segunda.',
    result: '1',
    resultLabel: 'painel no lugar de 6 planilhas',
    stack: ['ETL', 'PostgreSQL', 'React'],
    photoId: 'case-servicos',
    photoHint: 'Foto de reunião gerencial / tela do painel (1600×1100)',
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
