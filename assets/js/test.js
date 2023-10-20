// handler is a function that accepts an array
function abs(handler) {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
    .then(res => {return res.json()})
    .then(data => {
        var a = [];
        a.push(data);
        handler(a);
        console.log(a);
    });
}

abs()