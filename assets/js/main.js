// funzione che mi permette di incrementare il valore del counter
function increaseNumber() {
    let number = parseInt(document.getElementById('number').innerHTML)

    let increasedNumber
    increasedNumber = number + 1

    document.getElementById('number').innerHTML = increasedNumber
}

// funzione che mi permette di decrementare il valore del counter
function decreaseNumber() {
    let number = parseInt(document.getElementById('number').innerHTML)

    let decreasedNumber
    decreasedNumber = number - 1

    document.getElementById('number').innerHTML = decreasedNumber
}

//funzione per azzerare il counter
function reset() {
    document.getElementById('number').innerHTML = 0
}