/**
 * Camada de dados do Portal do Colaborador - Arcos Dourados.
 * Toda a persistência ocorre em sessionStorage (dados somem ao fechar a aba/navegador).
 */
(function (window) {
  'use strict';

  var KEYS = {
    seeded: 'ad_seeded',
    programs: 'ad_health_programs',
    subscriptions: 'ad_program_subscriptions',
    notifications: 'ad_notifications',
    payroll: 'ad_payroll',
    timebank: 'ad_timebank'
  };

  function readJSON(key, fallback) {
    try {
      var raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function seedPrograms() {
    return [
      {
        id: 'saude-mental',
        categoria: 'Saúde Mental',
        icone: 'bx-heart',
        titulo: 'Programa de Apoio Emocional',
        resumo: 'Canal de escuta e apoio psicológico gratuito e confidencial para você e sua família.',
        material:
          'O Programa de Apoio Emocional oferece atendimento psicológico por telefone e videochamada, disponível 24 horas por dia. O serviço é gratuito, confidencial e pode ser utilizado por você e por dependentes que morem na mesma residência. Basta agendar pelo aplicativo ou pela central de atendimento.'
      },
      {
        id: 'checkup-anual',
        categoria: 'Prevenção',
        icone: 'bx-first-aid',
        titulo: 'Check-up Anual',
        resumo: 'Exames periódicos gratuitos para acompanhar sua saúde ao longo do ano.',
        material:
          'Todos os colaboradores têm direito a um check-up completo por ano, incluindo exames de sangue, avaliação clínica e orientação com profissional de saúde. Os agendamentos são feitos diretamente nas unidades parceiras cadastradas na sua região.'
      },
      {
        id: 'vacinacao',
        categoria: 'Prevenção',
        icone: 'bx-injection',
        titulo: 'Campanha de Vacinação',
        resumo: 'Vacinação contra gripe e outras doenças sazonais, sem custo para o colaborador.',
        material:
          'Durante o ano, a empresa promove campanhas de vacinação em parceria com clínicas credenciadas. As datas e locais são divulgados com antecedência pelo mural de notificações. Leve um documento com foto no dia da aplicação.'
      },
      {
        id: 'nutricao',
        categoria: 'Qualidade de Vida',
        icone: 'bx-food-menu',
        titulo: 'Nutrição e Vida Saudável',
        resumo: 'Orientação nutricional individual e conteúdos sobre alimentação equilibrada.',
        material:
          'Nutricionistas parceiros oferecem orientação individual gratuita, além de conteúdos semanais com dicas de alimentação equilibrada para a rotina de quem trabalha em turnos. As consultas podem ser agendadas por videochamada.'
      },
      {
        id: 'ergonomia',
        categoria: 'Segurança do Trabalho',
        icone: 'bx-walk',
        titulo: 'Prevenção de Lesões e Ergonomia',
        resumo: 'Orientações práticas para reduzir dores e lesões durante a operação.',
        material:
          'Este programa reúne vídeos curtos e orientações de fisioterapeutas sobre postura, pausas ativas e cuidados durante a jornada de trabalho, com foco nas funções operacionais de loja.'
      },
      {
        id: 'telemedicina',
        categoria: 'Atendimento',
        icone: 'bx-video',
        titulo: 'Telemedicina 24h',
        resumo: 'Atendimento médico geral por videochamada, disponível todos os dias.',
        material:
          'Consultas médicas gerais por videochamada, disponíveis 24 horas por dia, 7 dias por semana, sem necessidade de agendamento prévio. Ideal para orientações rápidas, atestados e encaminhamentos.'
      }
    ];
  }

  function seedNotifications() {
    var now = new Date();
    function horasAtras(h) {
      return new Date(now.getTime() - h * 60 * 60 * 1000).toISOString();
    }
    return [
      {
        id: 3,
        titulo: 'Bem-vindo ao Portal do Colaborador',
        mensagem: 'Explore o módulo Saúde e conheça os programas disponíveis para você.',
        tipo: 'info',
        data: horasAtras(1),
        lida: false
      },
      {
        id: 2,
        titulo: 'Campanha de Vacinação',
        mensagem: 'Nova campanha de vacinação contra a gripe disponível em unidades parceiras.',
        tipo: 'saude',
        data: horasAtras(20),
        lida: false
      },
      {
        id: 1,
        titulo: 'Holerite disponível',
        mensagem: 'O holerite do mês mais recente já está disponível para consulta.',
        tipo: 'rh',
        data: horasAtras(48),
        lida: true
      }
    ];
  }

  function seedPayroll() {
    return [
      {
        id: 1,
        competencia: '07/2026',
        salarioBruto: 2650.0,
        inss: 238.5,
        irrf: 0.0,
        outrosDescontos: 95.0,
        salarioLiquido: 2316.5,
        status: 'Disponível'
      },
      {
        id: 2,
        competencia: '06/2026',
        salarioBruto: 2650.0,
        inss: 238.5,
        irrf: 0.0,
        outrosDescontos: 110.4,
        salarioLiquido: 2301.1,
        status: 'Disponível'
      },
      {
        id: 3,
        competencia: '05/2026',
        salarioBruto: 2550.0,
        inss: 229.5,
        irrf: 0.0,
        outrosDescontos: 95.0,
        salarioLiquido: 2225.5,
        status: 'Disponível'
      },
      {
        id: 4,
        competencia: '04/2026',
        salarioBruto: 2550.0,
        inss: 229.5,
        irrf: 0.0,
        outrosDescontos: 95.0,
        salarioLiquido: 2225.5,
        status: 'Disponível'
      }
    ];
  }

  function seedTimebank() {
    var hoje = new Date();
    function diasAtras(d) {
      var dt = new Date(hoje.getTime() - d * 24 * 60 * 60 * 1000);
      return dt.toISOString().slice(0, 10);
    }
    return [
      { id: 1, data: diasAtras(20), tipo: 'credito', horas: 2.5, descricao: 'Hora extra - cobertura de turno' },
      { id: 2, data: diasAtras(14), tipo: 'credito', horas: 1.0, descricao: 'Hora extra - fechamento de loja' },
      { id: 3, data: diasAtras(9), tipo: 'debito', horas: 3.0, descricao: 'Saída antecipada autorizada' },
      { id: 4, data: diasAtras(3), tipo: 'credito', horas: 2.0, descricao: 'Hora extra - evento promocional' }
    ];
  }

  function seedIfNeeded() {
    if (sessionStorage.getItem(KEYS.seeded)) {
      return;
    }
    writeJSON(KEYS.programs, seedPrograms());
    writeJSON(KEYS.subscriptions, []);
    writeJSON(KEYS.notifications, seedNotifications());
    writeJSON(KEYS.payroll, seedPayroll());
    writeJSON(KEYS.timebank, seedTimebank());
    sessionStorage.setItem(KEYS.seeded, '1');
  }

  function nextId(list) {
    return list.reduce(function (max, item) { return Math.max(max, item.id || 0); }, 0) + 1;
  }

  function notify(titulo, mensagem, tipo) {
    var lista = readJSON(KEYS.notifications, []);
    lista.unshift({
      id: nextId(lista),
      titulo: titulo,
      mensagem: mensagem,
      tipo: tipo || 'info',
      data: new Date().toISOString(),
      lida: false
    });
    writeJSON(KEYS.notifications, lista);
    window.dispatchEvent(new CustomEvent('ad:notifications-updated'));
  }

  function isSubscribed(programId) {
    return readJSON(KEYS.subscriptions, []).indexOf(programId) !== -1;
  }

  function toggleSubscription(programId, programTitulo) {
    var subs = readJSON(KEYS.subscriptions, []);
    var idx = subs.indexOf(programId);
    var subscribing = idx === -1;
    if (subscribing) {
      subs.push(programId);
      notify(
        'Notificações ativadas',
        'Você passará a receber novidades sobre "' + programTitulo + '".',
        'saude'
      );
    } else {
      subs.splice(idx, 1);
      notify(
        'Notificações desativadas',
        'Você não receberá mais novidades sobre "' + programTitulo + '".',
        'info'
      );
    }
    writeJSON(KEYS.subscriptions, subs);
    return subscribing;
  }

  function timebankBalance(entries) {
    return entries.reduce(function (total, item) {
      var sinal = item.tipo === 'debito' ? -1 : 1;
      return total + sinal * item.horas;
    }, 0);
  }

  function addTimebankEntry(entry) {
    var lista = readJSON(KEYS.timebank, []);
    var novo = {
      id: nextId(lista),
      data: entry.data,
      tipo: entry.tipo,
      horas: entry.horas,
      descricao: entry.descricao
    };
    lista.push(novo);
    writeJSON(KEYS.timebank, lista);
    notify(
      'Novo lançamento no banco de horas',
      (entry.tipo === 'debito' ? 'Débito' : 'Crédito') + ' de ' + entry.horas + 'h registrado.',
      'rh'
    );
    return novo;
  }

  function resetDemoData() {
    Object.keys(KEYS).forEach(function (k) { sessionStorage.removeItem(KEYS[k]); });
    seedIfNeeded();
  }

  seedIfNeeded();

  window.AD = {
    KEYS: KEYS,
    get: readJSON,
    set: writeJSON,
    notify: notify,
    isSubscribed: isSubscribed,
    toggleSubscription: toggleSubscription,
    timebankBalance: timebankBalance,
    addTimebankEntry: addTimebankEntry,
    resetDemoData: resetDemoData
  };
})(window);
