
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

// Function to append intoHTML
function appendTodoInHtml(todoText) {
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    todoItem.classList.add("todoItem");

    // creating some button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "completed";
    completedBtn.classList.add("completedBtn");

    // Adding the button to the todo Items List
    todoItem.appendChild(editBtn)
    todoItem.appendChild(deleteBtn)
    todoItem.appendChild(completedBtn)

    todoList.appendChild(todoItem);




}

// do after loading DOM
document.addEventListener("DOMContentLoaded", () => {

    // todos Input part
    const todoInput = document.getElementById("todoInput");

    // button
    const submitButton = document.getElementById("addTodo");

    // TodoList
    const todoList = document.getElementById("todoList");

    // click event
    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value
        // condition to check it's empty or not
        if (todoText == '') {
            alert("Please write something for todos")
        } else {
            // add the todo to the local storage
            addTodoLocalStorage(todoText);
            appendTodoInHtml(todoText); // calling the function to Display the Todo List
            todoInput.value = '';  // to make values empty
        }
    })


    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value
        event.target.value = todoText.trim();
        console.log(event.target.value);

    });

    // calling the loadTodos function 
    const todos = loadTodos()

    todos.todoList.forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todo;
        todoList.appendChild(newTodoItem);
    })

}) 