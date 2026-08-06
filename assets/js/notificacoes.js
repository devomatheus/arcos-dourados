(function () {
    function tempoRelativo(isoDate) {
    var diffMs = Date.now() - new Date(isoDate).getTime();
    var min = Math.round(diffMs / 60000);
    if (min < 1) return 'agora mesmo';
    if (min < 60) return 'há ' + min + ' min';
    var h = Math.round(min / 60);
    if (h < 24) return 'há ' + h + 'h';
    return 'há ' + Math.round(h / 24) + ' dias';
    }

    function renderDashboardNotifications() {
    var lista = window.AD.get(window.AD.KEYS.notifications, []).slice(0, 3);
    var el = document.getElementById('dashboardNotifications');
    if (!el) return;
    if (lista.length === 0) {
        el.innerHTML = '<li class="list-group-item px-0 text-muted">Nenhuma notificação por aqui.</li>';
        return;
    }
    el.innerHTML = lista.map(function (n) {
        return (
        '<li class="list-group-item px-0">' +
        '<div class="d-flex justify-content-between">' +
        '<span class="fw-semibold small">' + n.titulo + '</span>' +
        (n.lida ? '' : '<span class="badge bg-danger rounded-pill">novo</span>') +
        '</div>' +
        '<small class="text-muted d-block">' + n.mensagem + '</small>' +
        '<small class="text-muted">' + tempoRelativo(n.data) + '</small>' +
        '</li>'
        );
    }).join('');
    }

    document.addEventListener('DOMContentLoaded', renderDashboardNotifications);
    window.addEventListener('ad:notifications-updated', renderDashboardNotifications);

    var btnReset = document.getElementById('btnResetDemo');
    if (btnReset) {
    btnReset.addEventListener('click', function () {
        if (window.confirm('Isso vai limpar todos os dados salvos nesta sessão (notificações, inscrições, lançamentos) e restaurar os dados de exemplo. Continuar?')) {
        window.AD.resetDemoData();
        window.location.reload();
        }
    });
    }
})();