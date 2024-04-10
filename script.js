const addBtn = document.querySelector("#addbtn");
const inpContainer = document.querySelector(".InpTask");
const inpHead = document.querySelector("#inphead");
const inpBtn = document.querySelector("#inpbtn");
const inpTask = document.querySelector("#inptask");





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
        let li = document.createElement("li");
        li.textContent = element.text;
        todoList.appendChild(li);
        console.log(element)
    });
}


inpBtn.addEventListener("click",()=>{
    hideTaskbar();
    todoText = inpTask.value;
    if(todoText){
        let todos = getTodo();
        addTask(todos);
        let newTodo = {text: todoText};
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