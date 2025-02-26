const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

input.addEventListener("input", () => {
    const regex = /\d+/g;
    
    if(regex.test(input.value)){
        input.value = input.value.replace(regex, "")
    }
})

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const value = input.value

    newItem(value)
    input.value = ""
})

function newItem(value){
    try {
        const newItemList = document.createElement("li")
        const newDiv = document.createElement("div")
        const newInput = document.createElement("input")
        newInput.setAttribute("type", "checkbox")
        newInput.setAttribute("name", "item")
        newInput.setAttribute("id", "item")
        newDiv.append(newInput)
        newItemList.append(newDiv)
        const newSpan = document.createElement("span")
        newSpan.textContent = value
        newItemList.append(newSpan)
        const newDivTrash = document.createElement("div")
        newInput.setAttribute("id", "trash")
        newItemList.append(newDivTrash)
        console.log(newItemList)
        ul.append(newItemList)
    } catch (error) {
        console.log(error)
        alert("erro")
    }
}