var addButton = document.querySelector(".inp button");
var inputText = document.querySelector(".inp input");
var parentElementz = document.querySelector(".tasks");

function deleteButtonHandler(event){
    var parentDiv=event.target.parentElement;
    parentDiv.remove();
}
function addButtonClickHandler() {
    var txt=inputText.value;
    inputText.value = "";
    const textNode=document.createTextNode(txt);
    var newTask=document.createElement("div");
    newTask.append(textNode);
    parentElementz.appendChild(newTask);
    var delBtn=document.createElement("button");
    delBtn.id="dl";
    delBtn.textContent="delete";
    newTask.appendChild(delBtn);
    delBtn.addEventListener("click",deleteButtonHandler);
    addButton.removeEventListener("click", addButtonClickHandler);
    inputText.removeEventListener("keypress", keypressHandler);
}
function keypressHandler(event){
    if(event.key=="Enter"){
        addButtonClickHandler();
    }
}
function inputFieldInputHandler() {
    if (inputText.value !== "") {
        addButton.addEventListener("click", addButtonClickHandler);
        inputText.addEventListener("keypress", keypressHandler);
    }
}

inputText.addEventListener("input", inputFieldInputHandler);


