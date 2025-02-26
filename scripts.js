let calc = 5

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const trash = document.querySelector(".trash")
const alertMessage = document.querySelector("#alert")

// Impede números no input
input.addEventListener("input", () => {
    const regex = /\d+/g;
    
    if(regex.test(input.value)){
        input.value = input.value.replace(regex, "")
    }
})

// Evento de submit para adicionar novo item
form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const value = input.value

    newItem(value)
    input.value = ""
})

ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("trash")) {
        const listItem = event.target.closest("li"); // Seleciona o elemento pai <li>
        if (listItem) {
            listItem.remove();
            alertMessage.style.display = "block"
        }
    }
});

// Adiciona um novo item à lista
function newItem(value){
    try {
        const newItemList = document.createElement("li")
        newItemList.setAttribute("class", `item${calc}`)

        // Criando o checkbox
        const newDiv = document.createElement("div")
        const newInput = document.createElement("input")
        newInput.setAttribute("type", "checkbox")
        newInput.setAttribute("name", "item")
        newInput.setAttribute("id", "item")
        newDiv.append(newInput)
        newItemList.append(newDiv)

        // Criando o span do texto do item da lista
        const newSpan = document.createElement("span")
        newSpan.textContent = value
        newItemList.append(newSpan)

        // Criando a div para o ícone de lixeira
        const newDivTrash = document.createElement("div")
        newDivTrash.setAttribute("class", "trash")
        newItemList.append(newDivTrash)
        ul.append(newItemList)

        calc = calc + 1
    } catch (error) {
        console.log(error)
        alert("Erro")
    }
}

