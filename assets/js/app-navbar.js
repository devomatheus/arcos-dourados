/**
 * Popula o sino de notificações do navbar em todas as páginas do portal.
 * Depende de assets/js/app-data.js (window.AD) já carregado antes deste script.
 */
(function () {
  'use strict';

  function tempoRelativo(isoDate) {
    var diffMs = Date.now() - new Date(isoDate).getTime();
    var min = Math.round(diffMs / 60000);
    if (min < 1) return 'agora mesmo';
    if (min < 60) return 'há ' + min + ' min';
    var h = Math.round(min / 60);
    if (h < 24) return 'há ' + h + 'h';
    var d = Math.round(h / 24);
    return 'há ' + d + (d === 1 ? ' dia' : ' dias');
  }

  var ICONES = {
    saude: { icone: 'bx-heart', cor: 'success' },
    rh: { icone: 'bx-briefcase-alt-2', cor: 'primary' },
    info: { icone: 'bx-info-circle', cor: 'info' }
  };

  function render() {
    var lista = window.AD.get(window.AD.KEYS.notifications, []);
    var naoLidas = lista.filter(function (n) { return !n.lida; }).length;

    var badge = document.getElementById('navbarNotificationsBadge');
    var menu = document.getElementById('navbarNotificationsList');
    var counterText = document.getElementById('navbarNotificationsCount');
    if (!menu) return;

    if (badge) {
      badge.textContent = naoLidas;
      badge.classList.toggle('d-none', naoLidas === 0);
    }
    if (counterText) {
      counterText.textContent = naoLidas + (naoLidas === 1 ? ' nova' : ' novas');
    }

    if (lista.length === 0) {
      menu.innerHTML = '<li class="dropdown-notifications-item"><div class="p-4 text-center text-muted">Nenhuma notificação por aqui.</div></li>';
      return;
    }

    menu.innerHTML = lista.slice(0, 5).map(function (n) {
      var meta = ICONES[n.tipo] || ICONES.info;
      return (
        '<li class="dropdown-notifications-item list-group-item list-group-item-action dropdown-item ' +
        (n.lida ? '' : 'marked-as-unread') +
        '" data-id="' + n.id + '">' +
        '<div class="d-flex">' +
        '<div class="flex-shrink-0 me-3">' +
        '<div class="avatar"><span class="avatar-initial rounded-circle bg-label-' + meta.cor + '"><i class="bx ' + meta.icone + '"></i></span></div>' +
        '</div>' +
        '<div class="flex-grow-1">' +
        '<h6 class="mb-1 small fw-semibold">' + n.titulo + '</h6>' +
        '<p class="mb-0 small text-muted">' + n.mensagem + '</p>' +
        '<small class="text-muted">' + tempoRelativo(n.data) + '</small>' +
        '</div>' +
        '<div class="flex-shrink-0 dropdown-notifications-actions">' +
        '<a href="javascript:void(0)" class="dropdown-notifications-read"><span class="badge badge-dot"></span></a>' +
        '</div>' +
        '</div>' +
        '</li>'
      );
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();

    var menu = document.getElementById('navbarNotificationsList');
    if (menu) {
      menu.addEventListener('click', function (ev) {
        var item = ev.target.closest('.dropdown-notifications-item');
        if (!item) return;
        var id = Number(item.getAttribute('data-id'));
        var lista = window.AD.get(window.AD.KEYS.notifications, []);
        var alvo = lista.find(function (n) { return n.id === id; });
        if (alvo) {
          alvo.lida = true;
          window.AD.set(window.AD.KEYS.notifications, lista);
          window.dispatchEvent(new CustomEvent('ad:notifications-updated'));
        }
      });
    }

    var marcarTodas = document.getElementById('navbarMarkAllRead');
    if (marcarTodas) {
      marcarTodas.addEventListener('click', function (ev) {
        ev.preventDefault();
        var lista = window.AD.get(window.AD.KEYS.notifications, []);
        lista.forEach(function (n) { n.lida = true; });
        window.AD.set(window.AD.KEYS.notifications, lista);
        window.dispatchEvent(new CustomEvent('ad:notifications-updated'));
      });
    }
  });

  window.addEventListener('ad:notifications-updated', render);
})();
