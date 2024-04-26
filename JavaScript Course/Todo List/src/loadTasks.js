import { loadModal } from "./getDOM";
import { getProject, projectList, removeTodo } from "./todo";

const mainContent = document.querySelector("#main-content");

export function loadTodos(projectName){
    //Clear current html
    mainContent.innerHTML = '';
    
    const currProject = getProject(projectName ? projectName : "Inbox");

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

        const taskCheck = document.createElement('div');
        taskCheck.id = `taskcheck-${todo.id}`;
        taskCheck.classList.add("taskCheck");
        
        const checkIcon = document.createElement('span');
        checkIcon.classList.add("material-symbols-outlined");
        checkIcon.classList.add("checkIcon")
        checkIcon.textContent = "Done";
        taskCheck.appendChild(checkIcon);
        task.appendChild(taskCheck);

        

        const taskLabel = document.createElement("label");
        taskLabel.setAttribute('for', taskCheck.id);
        taskLabel.classList.add("task-label");
        taskLabel.textContent = todo.title;
        task.appendChild(taskLabel);

        taskList.appendChild(task);

        taskCheck.addEventListener('click', completeTodo);
       

        function completeTodo(){
            console.log("CHECKED!")
            removeTodo(currProject.name, todo.id);
            loadTodos(projectName);
            taskCheck.removeEventListener('click', completeTodo);
            console.log(projectList);
        }

        taskCheck.addEventListener('mouseover', hoverCheck, false);
        taskCheck.addEventListener('mouseout', remHoverCheck, false);

        function hoverCheck(){
            checkIcon.style.display = "block"
        }

        function remHoverCheck(){
            checkIcon.style.display = "none"
        }
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
    });

    const addIcon = document.createElement('span');
    addIcon.classList.add("material-symbols-outlined")
    addIcon.textContent = 'add_circle';
    addBtn.prepend(addIcon);

    btnContainer.appendChild(addBtn);
    taskContainer.appendChild(btnContainer)
}