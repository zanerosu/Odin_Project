import './style.css';
import {createTodo, projectList, getAllTodos} from './todo';
import { createProject } from './projects';
import { loadSidebarProjects } from './sidebar';
import { loadTodos } from './loadTasks';
import { inbox } from './getDOM';

//Mock data
createTodo("", "Task 1", "Desc 1", "1/13/24", "High");
createTodo("", "Task 2", "Desc 1", "1/13/24", "High");
createTodo("", "Task 3", "Desc 1", "1/13/24", "High");
createTodo("", "Task 4", "Desc 1", "1/13/24", "High");
createTodo("", "Task 5", "Desc 1", "1/13/24", "High");
createTodo("", "Task 6", "Desc 1", "1/13/24", "High");
createTodo("inbox", "Task 7", "Desc 1", "1/13/24", "High");
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







