window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = '';
});

window.onload = function() {
    var page4 = document.getElementById('page4');
    if (performance.getEntriesByType('navigation')[0].type === 'reload') {
        page4.classList.add('hidden');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Non è consentito aggiornare la pagina. Tornerai alla pagina di benvenuto.',
        }).then(function() {
            window.location.href = 'benchmark.html';
        });
    }
};