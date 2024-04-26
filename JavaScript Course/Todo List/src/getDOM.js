import { createTodo } from "./todo";
import { projectList } from "./projects";
import { loadTodos } from "./loadTasks";

export const inbox = document.querySelector('#Inbox');


export function loadModal() {
    const popupBox = document.querySelector("#popup-box");
    popupBox.style.display = "block";

    setProjectNames();

    const taskForm = document.querySelector("#task-form");
    const submitBtn = document.querySelector('#submit-btn');

    // Check if event listener already exists before adding
    if (!submitBtn.hasEventListener) {
        // Add event listener
        submitBtn.addEventListener('click', handleSubmit);
        submitBtn.hasEventListener = true; // Custom property to track listener
    }

    function handleSubmit(event) {
        event.preventDefault();

        const projectName = document.querySelector("#project-name").value;
        const taskName = document.querySelector("#task-name").value;
        const taskDesc = document.querySelector("#task-desc").value;
        const dueDate = document.querySelector("#due-Date").value;
        const priority = document.querySelector("#priority").value;
        
        createTodo(projectName, taskName, taskDesc, dueDate, priority);
        popupBox.style.display = "none";
        loadTodos(projectName);

        taskForm.reset();
    }
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