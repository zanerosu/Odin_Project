import './style.css';
import {createTodo, projectList, getAllTodos} from './todo';
import { createProject } from './projects';
import { loadSidebarProjects } from './sidebar';
import { loadTodos } from './loadTasks';
import { inbox, loadModal, sidebarAddTask } from './getDOM';

//Mock data
createTodo("Inbox", "Task 1", "Desc 1", "1/13/24", "High");
createTodo("Inbox", "Task 2", "Desc 1", "1/13/24", "High");
createTodo("Inbox", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("Inbox", "Task 4", "Desc 1", "1/13/24", "High");
createTodo("Inbox", "Task 5", "Desc 1", "1/13/24", "High");
createTodo("Project 1", "P1 Task 1", "Desc 1", "1/13/24", "High");
createTodo("Project 1", "P1 Task 2", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "P2 Task 1", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "P2 Task 2", "Desc 1", "1/13/24", "High");
createTodo("Project 2", "P2 Task 3", "Desc 1", "1/13/24", "High");
createProject("Project 3");

console.log(projectList);

loadSidebarProjects();
loadTodos(inbox.id);

inbox.addEventListener('click', (event) => {
    loadTodos(inbox.id);
})

sidebarAddTask.addEventListener('click', (event) =>{
    loadModal();
})







