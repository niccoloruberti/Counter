// creo l'elemento riga
let row = document.createElement('div')
row.className = 'row'

// creo l'elemento col-12
let col12 = document.createElement('div')
col12.className = 'col-12'

// prendo l'elemento container
let container = document.getElementsByClassName('container')[0]

// aggiungo tre righe all'interno del container
for (let i = 1; i <= 4; i++) {
    let newRow = row.cloneNode()
    let newCol12 = col12.cloneNode()

    // alla prima riga aggiungo il titolo
    if (i === 1) {
        newRow.className = 'row mt-5'
        let h1 = document.createElement('h1')
        h1.textContent = 'Counter'
        h1.className = 'text-center'
        newCol12.appendChild(h1)
    }

    // alla seconda riga aggiungo il sottotitolo
    if (i === 2) {
        let label = document.createElement('label')
        label.textContent = 'Utilizza i pulsanti per aumentare e diminuire il valore del counter'
        label.className = 'text-center mb-5 w-100'
        newCol12.appendChild(label)
    }

    //alla terza riga aggiungo i bottoni e la visualizzazione del counter
    if (i === 3) {
        newCol12.className = 'col-12 d-flex justify-content-center'
        // creo il bottone -
        let buttonMin = document.createElement('button')
        buttonMin.id = 'decrease'
        buttonMin.className = 'btn btn-secondary'
        buttonMin.addEventListener('click', decreaseNumber)
        buttonMin.textContent = '-'
        newCol12.appendChild(buttonMin)
        // creo il contenitore del numero
        let divNumber = document.createElement('div')
        divNumber.id = 'number'
        divNumber.textContent = 0
        newCol12.appendChild(divNumber)
        // creo il bottone +
        let buttonAdd = document.createElement('button')
        buttonAdd.id = 'increase'
        buttonAdd.className = 'btn btn-secondary'
        buttonAdd.addEventListener('click', increaseNumber)
        buttonAdd.textContent = '+'
        newCol12.appendChild(buttonAdd)
    }

    if (i === 4) {
        newCol12.className = 'col-12 text-center mt-3'
        //creo il bottone di reset
        let buttonReset = document.createElement('button')
        buttonReset.className = 'btn btn-danger'
        buttonReset.addEventListener('click', reset)
        buttonReset.textContent = 'Reset'
        newCol12.appendChild(buttonReset)
    }

    newRow.appendChild(newCol12)
    container.appendChild(newRow)
}



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