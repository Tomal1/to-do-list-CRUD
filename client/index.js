const addToDo = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer")
const inputField = document.querySelector("#inputField")

addToDo.addEventListener("click", ()=>{

    const paragraph = document.createElement("p");
    paragraph.innerText =  inputField.value;
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    inputField.value = "";


    ////
    paragraph.addEventListener("click", ()=>{
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener("dblclick", ()=>{
        toDoContainer.removeChild(paragraph);;
    })

})