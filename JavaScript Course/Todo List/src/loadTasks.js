import { loadModal } from "./getDOM";
import { getProject } from "./todo";
import { createTodo } from "./todo";
import { projectList } from "./todo";

const mainContent = document.querySelector("#main-content");

export function loadTodos(projectName){
    //Clear current html
    mainContent.innerHTML = '';
    
    const currProject = getProject(projectName ? projectName : "inbox");

    const taskContainer = document.createElement('div');
    taskContainer.classList.add("task-container");

    //Adds header to task container.
    const contentHeader = document.createElement('h1');
    contentHeader.textContent = currProject.name;
    contentHeader.classList.add("content-header");
    taskContainer.appendChild(contentHeader);

    const taskList = document.createElement('ul');
    taskList.id = "tasks-list";

    currProject.todos.forEach((todo) => {
        const task = document.createElement('li');
        task.classList.add("task");

        const taskCheck = document.createElement('input');
        taskCheck.type = "checkbox";
        taskCheck.name = "taskcheck";
        taskCheck.classList.add("task-check");
        task.appendChild(taskCheck);

        const taskLabel = document.createElement("label");
        taskLabel.setAttribute('for', taskCheck.name);
        taskLabel.classList.add("task-label");
        taskLabel.textContent = todo.title;
        task.appendChild(taskLabel);

        taskList.appendChild(task);

        taskCheck.addEventListener('click', ()=>{
            //Remove Todo from project
            //Reload Todo list
        });

        
    })

    taskContainer.appendChild(taskList);
    mainContent.appendChild(taskContainer);

    const btnContainer = document.createElement('div');
    btnContainer.id = "btnContainer";

    const addBtn = document.createElement('button');
    // Set button text
    addBtn.innerText = 'Add Task';
    addBtn.id = 'taskBtn'
    // Add click event listener to the button
    addBtn.addEventListener('click', function() {
        //Create popup window
        loadModal();
        console.log(projectList);
        loadTodos(currProject.name);
    });

    const addIcon = document.createElement('span');
    addIcon.classList.add("material-symbols-outlined")
    addIcon.textContent = 'add_circle';
    addBtn.prepend(addIcon);

    btnContainer.appendChild(addBtn);
    taskContainer.appendChild(btnContainer)
}