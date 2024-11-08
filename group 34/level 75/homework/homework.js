const form = document.querySelector("form");
const ol = document.querySelector("ol");

let counter = 0;

function deleteItem(id){
    const item = document.getElementById(id);
    ol.removeChild(item);
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const itemValue = form.item.value;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = itemValue;
    deleteBtn.textContent = "Delete";

    li.id = "item-" + counter;

    deleteBtn.onclick = function(){
        deleteItem(li.id);
    }

    counter++;

    li.appendChild(deleteBtn);
    ol.appendChild(li);
})