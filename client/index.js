const addToDo = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer")
const inputField = document.querySelector("#inputField")

const start = () => {
    fetch("http://localhost:3001")
    .then(res => res.json())
    .then(data => {
        
        console.log(data)

        for(let i=0; i<data.length; i++){
            const paragraph = document.createElement("p");
            paragraph.innerText =  data[i].toDos;
            paragraph.classList.add("paragraph-styling");
            toDoContainer.appendChild(paragraph);
        }

        inputField.value = "";
    
    })
} 
start()


addToDo.addEventListener("click", ()=>{
    console.log(inputField.value) //displays what you are typing in to the input field

fetch("http://localhost:3001/post",{
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({toDos: inputField.value})
})
.then(res => res.json())
.then(data => console.log(data))

    //created in DOM
    const paragraph = document.createElement("p");
    paragraph.innerText =  inputField.value;
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    paragraph.addEventListener("click", ()=> {
        paragraph.innerText
    });

    paragraph.addEventListener("dblclick", ()=>{

        fetch("http://localhost:3001/delete", {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            // body: JSON.stringify({
            //     id:
            // })// how to excess id of element stored in mysql when I click on the element
        })
        .then(res => res.json())
        .then(data => console.log(data))

        //removed from DOM
        toDoContainer.removeChild(paragraph);
    })
})


