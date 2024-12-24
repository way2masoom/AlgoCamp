
// Crating a function to store some todo
function loadTodos() {
    // localStorage.setItem("todos", ["todos-1", "todos-12", "todos-13"])
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}

// creating a function to store the todo text in the local storage
function addTodoLocalStorage(todoText) {
    const todos = loadTodos(); // get all todo 
    todos.todoList.push(todoText)
    localStorage.setItem("todos", JSON.stringify(todos))
}

document.addEventListener("DOMContentLoaded", () => {
    // todos Input part 
    const todoInput = document.getElementById("todoInput");

    // button
    const submitButton = document.getElementById("addTodo");

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value
        // condition to check it's empty or not
        if (todoText == '') {
            alert("Please write something for todos")
        } else {
            // add the todo to the local storage
            addTodoLocalStorage(todoText);
        }
    })

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value
        event.target.value = todoText.trim();
        console.log(event.target.value);

    });

    // calling the loadTodos function 
    loadTodos()
    console.log("Dom content successfully Loaded");

}) 