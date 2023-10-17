let areaCheckbox = document.getElementById('checkbox');
let areaButton = document.querySelector('.button');

let firstPage = document.getElementById('page1')
let secondPage = document.getElementById ('page2')

let timer = document.querySelector('.timer')    
areaButton.addEventListener('click', function() {
    if (areaCheckbox.checked) {
      firstPage.remove()
      secondPage.classList.remove('hidden')
      timer.classList.remove ('hidden')
      
    } else {
        // L'utente non ha selezionato la casella di controllo, mostra un messaggio di avviso
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please accept the agreement to proceed'
        });
    }
});