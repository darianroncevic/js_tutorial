
const inputBox = document.getElementById("item")
const descriptionBox = document.getElementById("desc")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value == "") {
        alert("You must write something!")
    } else {
        let p = document.createElement("p")
        p.innerHTML = descriptionBox.value
        p.classList.add("small_p")
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        li.appendChild(p)
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    descriptionBox.value = ""
    saveData()
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }

}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()