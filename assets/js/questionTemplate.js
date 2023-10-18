const proceedButton = document.getElementById('proceed')

proceedButton.addEventListener('click', showQuestions)

function showQuestions () {
    let temp = document.getElementsByTagName('template')[0]
    let target = document.getElementById('container')
    console.log(temp);
    let clon = temp.content.cloneNode(true)
    target.appendChild(clon)
}