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
inpBtn.addEventListener("click",()=>{
    hideTaskbar();
    console.log(inpTask.value)
})