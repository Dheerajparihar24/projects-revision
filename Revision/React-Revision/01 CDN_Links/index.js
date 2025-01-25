const Inc = document.getElementById("Inc");
const Dec = document.getElementById("Dec")

const count = document.getElementById("count")

let counter = 0;

function updateCount(){
    count.textContent = counter
}

function incCount(){
    counter++
    updateCount();
}

function decCount(){
    counter--;
    updateCount();
}

Inc.addEventListener("click", incCount);
Dec.addEventListener("click", decCount)
updateCount()