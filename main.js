const descInput = document.querySelector("#descricao")
const btnAdicionar = document.querySelector("#btnAdicionar")
const lista = document.querySelector("#lista")


btnAdicionar.addEventListener("click", adicionarTartefa)

descInput.addEventListener("keyup", (ev) => {
    if (ev.key == "Enter"){
        adicionarTartefa()
    }
})

lista.addEventListener("click", doneCheck)

function adicionarTartefa(){
    if (descInput.value != ""){
        const divItem = document.createElement("div")
        divItem.innerHTML = descInput.value
        divItem.classList.add("item")
        const btnDone = document.createElement("button")
        btnDone.classList.add("check-btn")
        btnDone.innerText = "k"
        divItem.appendChild(btnDone)
        const btnDel = document.createElement("button")
        btnDel.classList.add("del-btn")
        btnDel.innerText = "X"
        divItem.appendChild(btnDel)

        lista.appendChild(divItem)
        descInput.value = ""    
        descInput.focus()
    }
}

function doneCheck(ev){
    const item = ev.target
    if (item.classList[0] == "check-btn"){
        item.parentElement.classList.toggle("completa")
    }

    if (item.classList[0] == "del-btn"){
        item.parentElement.remove()
    }
}