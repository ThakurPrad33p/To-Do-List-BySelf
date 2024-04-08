const inputBox = document.getElementById(input-box);
const listContainer = document.getElementById(list-container);

function addTask(){
    if(inputBox.value === ''){
        alert("Add Task")
    }
    else{
        let li = document.createElement("li");
        li.innerHtml = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value='';
}