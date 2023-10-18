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
// domande easy
fetch ('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
.then(res => res.json())
.then (domande =>{
let easy = domande.results //tutte le domande in questo array
console.log(easy);
})

//domande hard
fetch ('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard')
.then(res => res.json())
.then (domande =>{
let hard = domande.results //tutte le domande in questo array
console.log(hard);
})