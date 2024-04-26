import { createTodo } from "./todo";
import { projectList } from "./projects";
import { loadTodos } from "./loadTasks";

export const inbox = document.querySelector('#Inbox');
export const sidebarAddTask = document.querySelector("#new-task");

export function loadModal(){
    const overlay = document.querySelector(".overlay");
    overlay.style.display="block";
    const popupBox = document.querySelector("#popup-box");
    popupBox.style.display="block";

    setProjectNames();

    const taskForm = document.querySelector("#task-form");
    const submit_Btm = document.querySelector('#submit-btn')

    function handleSubmit(){
        event.preventDefault();
        
        const projectName = document.querySelector("#project-name").value;
        const taskName = document.querySelector("#task-name").value;
        const taskDesc = document.querySelector("#task-desc").value;
        const dueDate = document.querySelector("#due-Date").value;
        const priority = document.querySelector("#priority").value;
        createTodo(projectName, taskName, taskDesc, dueDate, priority);
        popupBox.style.display = "none";
        overlay.style.display="none";
        loadTodos(projectName);

        //Removes the event listener after submission to prevent multiple listeners from firing in subsequent calls.
        submit_Btm.removeEventListener('click', handleSubmit);
    };

    submit_Btm.addEventListener('click', handleSubmit);
    taskForm.reset();

    //Handles close/cancel option for popup.
    const popupClose = document.querySelector("#popup-close");
    function closePopup(){
        taskForm.reset();
        popupBox.style.display = "none";
        overlay.style.display="none";
        popupClose.removeEventListener('click', closePopup);
    }
    popupClose.addEventListener('click', closePopup);

}


//Sets options for project name dropdown.
function setProjectNames(){
    const projectName = document.querySelector("#project-name");
    projectName.innerHTML = '';

    projectList.forEach((project) => {
        const option = document.createElement('option')
        option.value = project.name;
        option.textContent = project.name;
        projectName.add(option);
    });
}