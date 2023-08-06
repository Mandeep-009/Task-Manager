// var addButton=document.querySelector(".inp button");
// var inputText=document.querySelector(".inp input");
// if(inputText.value != ""){
//     addButton.addEventListener("click", function() {
//         inputText.value = "hello"; 
//     });
// }

var addButton = document.querySelector(".inp button");
var inputText = document.querySelector(".inp input");

// Function to handle the click event of the button
function addButtonClickHandler() {
    var txt=inputText.value;
    inputText.value = "";
    // write code to make a new div of task
    var parentElementClassName=document.getElementsByClassName("tasks");
    var newTask=document.createElement("div");
    newTask.className="task";
    newTask.textContent=txt;
    parentElementClassName.appendChild(newTask);
    // console.log("done")
}

// Function to handle the input event of the input field
function inputFieldInputHandler() {
    if (inputText.value != "") {
        addButton.addEventListener("click", addButtonClickHandler);
    } else {
        addButton.removeEventListener("click", addButtonClickHandler);
    }
}

// Add the initial input event listener
inputText.addEventListener("input", inputFieldInputHandler);
