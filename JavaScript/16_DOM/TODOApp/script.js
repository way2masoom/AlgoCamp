
// Crating a function to store some todo
function loadTodos() {
    // localStorage.setItem("todos", ["todos-1", "todos-12", "todos-13"])
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}

// creating a function to store the todo text in the local storage
function addTodoLocalStorage(todo) {
    const todos = loadTodos(); // get all todo 
    todos.todoList.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos))
}

// Function to append intoHTML
function appendTodoInHtml(todo) {
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("li");

    // Making a DIV for the text Items
    const textDiv = document.createElement("div");


    textDiv.textContent = todo.text;
    todoItem.classList.add("todoItem");

    // Making a Wrapper DIV
    const Wrapper = document.createElement("div");
    Wrapper.classList.add("todoButtons")

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
    Wrapper.appendChild(editBtn)
    Wrapper.appendChild(deleteBtn)
    Wrapper.appendChild(completedBtn)

    todoItem.appendChild(textDiv)

    todoItem.appendChild(Wrapper)

    todoList.appendChild(todoItem);

}

// Function for the Filter Buttons actions
function executeFilterAction(event) {
    // Fetching the todoList 
    const todoList = document.getElementById("todoList");

    const element = event.target;
    const value = element.getAttribute("data-filter")
    console.log(value);
    todoList.innerHTML = ''; // Resting the TODOList items
    const todos = loadTodos(); // Loading all the TodoList items

    // condition for each buttons 
    if (value == "all") {
        console.log(todoList);
        todos.todoList.forEach(todo => {
            appendTodoInHtml(todo)
        })

    } else if (value == "pending") {
        todos.todoList.forEach(todo => {
            if (todo.isCompleted !== true)
                appendTodoInHtml(todo)
        })

    } else {

        todos.todoList.forEach(todo => {
            if (todo.isCompleted == true)
                appendTodoInHtml(todo)
        })
    }

}

// do after loading DOM
document.addEventListener("DOMContentLoaded", () => {

    // todos Input part
    const todoInput = document.getElementById("todoInput");

    // button
    const submitButton = document.getElementById("addTodo");

    // TodoList
    const todoList = document.getElementById("todoList");

    // Fetching All Filter Buttons 
    const filterBtns = document.getElementsByClassName("filterBtn");
    console.log(filterBtns);
    for (const btn of filterBtns) {
        console.log(btn);

        btn.addEventListener("click", executeFilterAction);
    }

    // click event
    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value
        // condition to check it's empty or not
        if (todoText == '') {
            alert("Please write something for todos")
        } else {
            // add the todo to the local storage
            addTodoLocalStorage({ text: todoText, isCompleted: false });
            appendTodoInHtml({ text: todoText, isCompleted: false }); // calling the function to Display the Todo List
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
        appendTodoInHtml(todo)
    })

}) 