const addBtn = document.querySelector("#addbtn");
const inpContainer = document.querySelector(".InpTask");
const inpHead = document.querySelector("#inphead");
const inpBtn = document.querySelector("#inpbtn");
const inpTask = document.querySelector("#inptask");
const clearAll = document.querySelector("#clearall");

addBtn.addEventListener("click", () =>{
    inpContainer.removeAttribute("hidden", true);
    inpHead.setAttribute("hidden", true);
})

const hideTaskbar = () =>{
    inpContainer.setAttribute("hidden", true);
    inpHead.removeAttribute("hidden", true);
}

// get data

const getTodo = () =>{
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}


// save data

const addTask = (todos) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
}




// show data
const displayTodo = () =>{
    let todoList = document.querySelector("#alltask");
    let todos = getTodo();
    todoList.innerHTML = "";

    todos.forEach(element => {
        const listHtml = `
        <div class="todo-items">
        <div>
            <input type="checkbox" id="todo${element.id}" ${element.completed ? "checked" : ""} ${element.completed ? "disabled" : ""} onchange="updateTodoStatus(${element.id}, this.checked)"}/>
            <label for="todo${element.id}" ${element.completed ? "style='text-decoration: line-through;'": ""}>${element.text}</label>
            </div>
            <div>
            <button onclick="delData(${element.id})"><img src="trash.png" height="20px"/></button>
            </div>
        </div>
        `;
        todoList.insertAdjacentHTML("beforeend", listHtml);
        
    });
    
}




inpBtn.addEventListener("click",()=>{
    hideTaskbar();
    todoText = inpTask.value;
    if(todoText){
        let todos = getTodo();
        addTask(todos);
        let newTodo = {id: Date.now() , completed:false,text: todoText};
        todos.push(newTodo);
        addTask(todos);
        displayTodo();

    }
    else{
        alert("please enter a todo");
    }

    inpTask.value = "";
    
})
displayTodo();

const updateTodoStatus = (id) =>{
    let todos = getTodo();
    console.log(todos);
    let todo = todos.find(todo => todo.id == id);
    if(todo){
        todo.completed = true;
        addTask(todos);
    }
}

const delData = (id) =>{
    let todos = getTodo();
    let todo = todos.filter(todo=> todo.id !== id);
    addTask(todo);
    displayTodo();
}

clearAll.addEventListener("click", () =>{
    localStorage.clear();
    displayTodo();
});