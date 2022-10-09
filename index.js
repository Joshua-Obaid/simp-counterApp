let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
//<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="600" src="https://giphy.com/embed/P0TS9uvbRJrgRJuqtk/video" width="480"></iframe></div>
