fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
  .then(res => res.json())
  .then(domande => {
    let easy = domande.results //tutte le domande in questo array
    let template = document.getElementsByTagName('template')[0];
     console.dir(template);
  })
  


//domande hard
fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard')
  .then(res => res.json())
  .then(domande => {
    let hard = domande.results //tutte le domande in questo array
    console.table(hard);
  })