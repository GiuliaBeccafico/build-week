fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
  .then(res => res.json())
  .then(domande => {
    let easy = domande.results //tutte le domande in questo array
    let template = document.getElementsByTagName('template')[0];
    
    const main = document.querySelector('.main')
    let firstTitle = main.children[0].children[0]
    let secondTitle = main.children[0].children[1]
    let question = easy[0].question.split(' ')
    let first = question.slice(0, question.length/2).join(' ')
    let second = question.slice(question.length/2, question.length).join(' ')
    firstTitle.innerText = first
    secondTitle.innerText = second
  })

//prove attach questions

// function questionTitles() {
//   const main = document.querySelector('.main')
//   let question = easy[0].question
//   let first = question.slice(0, question.length / 2)
//   let second = question.slice(question.length / 2, question.length)
//   let firstTitle = main.children[0].children[0]
//   firstTitle.innerText = 'prima domanda'
//   let secondTitle = main.children[0].children[1]
//   secondTitle.innerText = 'seconda domanda'
//   console.log(main);
// }

//domande hard
fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard')
  .then(res => res.json())
  .then(domande => {
    let hard = domande.results //tutte le domande in questo array
    
  })