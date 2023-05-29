const addToDo = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer")
const inputField = document.querySelector("#inputField")

addToDo.addEventListener("click", ()=>{

    console.log(inputField.value) //displays what you are typing in to the input field

fetch("http://localhost:3001/post",{
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({toDos: inputField.value})
})
.then(res => res.json())
.then(data => console.log(data))

    const paragraph = document.createElement("p");
    paragraph.innerText =  inputField.value;
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener("click", ()=> {
        paragraph.innerText
    });

    paragraph.addEventListener("dblclick", ()=>{
        toDoContainer.removeChild(paragraph);
    })
})


