let areaCheckbox = document.getElementById('checkbox');
let areaButton = document.querySelector('.button');


areaButton.addEventListener('click', function () {
    if (areaCheckbox.checked) {
        page1.remove()
        page2.classList.remove('hidden')
    } else {
        // L'utente non ha selezionato la casella di controllo, mostra un messaggio di avviso
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please accept the agreement to proceed'
        });
    }
});