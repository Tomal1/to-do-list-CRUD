const addToDo = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");

const start = () => {
  fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        const paragraph = document.createElement("p");
        paragraph.innerText = data[i].toDos;
        paragraph.classList.add("paragraph-styling");
        toDoContainer.appendChild(paragraph);

        paragraph.addEventListener("click", (e)=>{

          let idFinder = "";
          if (paragraph.innerText === data[i].toDos) {
            idFinder = idFinder + data[i].id;
          }

          if (e.detail === 2){
            fetch("http://localhost:3001/delete", {
              method: "DELETE",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                id: idFinder,
              }),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }
        })
      }
      inputField.value = "";
    });



};
start();

addToDo.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Input field cant be left empty");
  } else {
    console.log(inputField.value); //displays what you are typing in to the input field

    fetch("http://localhost:3001/post", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ toDos: inputField.value }),
    })
      .then((res) => res.json())
      .then(console.log("posted successfully"));
  }
});
