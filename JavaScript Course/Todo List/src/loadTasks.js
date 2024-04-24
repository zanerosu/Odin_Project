import { projectList } from "./projects";
import { getProject } from "./todo";

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
    })

    taskContainer.appendChild(taskList);
    mainContent.appendChild(taskContainer);
}