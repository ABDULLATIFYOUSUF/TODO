var input = document.getElementById("input")
var listHead = document.getElementById("listHead")
var main1 = document.getElementById("main1")


function addTodo() {
    var list = `<li>${input.value} <div>
    <button class="btnB" onclick="editBtn(this)">Edit</button>
    <button class="btnR" onclick="delBtn(this)">Delete</button>
</div>
    
</li>`
    listHead.innerHTML += list
    input.value = ""
}

function deleteAll() {
    listHead.innerHTML = ""

}
function editBtn(e) {
    var inputField = prompt("update new value", e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue = inputField
}

function delBtn(e) {
    e.parentNode.parentNode.remove()

}